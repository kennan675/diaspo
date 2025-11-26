import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

const HomeBuiltByDiaspora = () => {
  return (
    <section id="built-by-diaspora" className="relative overflow-hidden py-28" data-animate="fade-up">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,#0b1f42,transparent_58%),radial-gradient(circle_at_bottom_right,#132448,transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#020817] via-[#0b1b34] to-[#0b355a] opacity-90" />
      <div className="absolute -left-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#1d9bf0]/15 blur-[140px]" />
      <div className="absolute -right-16 top-12 h-[360px] w-[360px] rounded-full bg-[#7f5dff]/25 blur-[160px]" />

      <div className="container relative mx-auto max-w-5xl px-4 text-center text-white sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-white/80">
          🌍 Built by the Diaspora, for the Diaspora
        </span>
        <h2 className="mt-8 font-display text-4xl font-semibold leading-[1.15] sm:text-5xl">
          Every founder, advisor, and clinical partner has lived this reality
        </h2>
        <div className="mt-8 space-y-5 text-lg leading-8 text-white/85 sm:text-xl">
          <p>The guilt. The pressure. The fear. The uncertainty. The frustration of not knowing the truth.</p>
          <p>
            DiaspoCare changes that — with <span className="text-white">verified care</span>, <span className="text-white">transparent billing</span>, and
            <span className="text-white"> modern clinics powered by diaspora love and expertise.</span>
          </p>
        </div>

        <Button asChild variant="hero" size="lg" className="mt-10 inline-flex items-center gap-2">
          <Link to="/join">
            Join DiaspoCare Today
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HomeBuiltByDiaspora;
