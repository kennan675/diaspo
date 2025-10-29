import { AnimatedBackground } from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="text-center animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-6">
            DiaspoCare
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-4 font-medium">
            Connecting the diaspora to quality healthcare
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Because the health of your loved ones matters most
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
