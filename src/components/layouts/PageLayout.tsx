import { ReactNode, useRef } from "react";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  mainClassName?: string;
  showScrollProgress?: boolean;
}

const PageLayout = ({
  children,
  className,
  mainClassName,
  showScrollProgress = true,
}: PageLayoutProps) => {
  const scope = useRef<HTMLDivElement | null>(null);
  useScrollReveal(scope);

  const rootClass = className ? `relative min-h-screen bg-background text-foreground ${className}` : "relative min-h-screen bg-background text-foreground";
  const baseMainClass = "pb-24 pt-24";
  const combinedMainClass = mainClassName ? `${baseMainClass} ${mainClassName}` : `${baseMainClass} space-y-24`;

  return (
    <div ref={scope} className={rootClass}>
      {showScrollProgress && <ScrollProgress />}
      <Navigation />
      <main className={combinedMainClass}>{children}</main>
      <Footer />
      <ChatBot />
      <BackToTop />
    </div>
  );
};

export default PageLayout;
