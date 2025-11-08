import { useMemo } from "react";

interface InitialLoaderProps {
  hidden: boolean;
}

const InitialLoader = ({ hidden }: InitialLoaderProps) => {
  const baseRingClasses = "absolute inset-0 rounded-full border-2";

  const ringStyles = useMemo(
    () => [
      `${baseRingClasses} border-white/15`,
      `${baseRingClasses} border-t-transparent border-r-transparent border-white/60 animate-[spin_2.6s_linear_infinite]`,
      `${baseRingClasses} border-b-transparent border-l-transparent border-secondary/70 animate-[spin_2.2s_linear_infinite_reverse]`,
      `${baseRingClasses} border-t-primary border-b-accent animate-[spin_1.8s_linear_infinite]`,
    ],
    [],
  );

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading DiaspoCare experience"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0b1530] via-[#13264f] to-[#0d1d3c] text-white transition-opacity duration-500 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex h-32 w-32 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_25%_25%,rgba(88,140,255,0.25),transparent_60%)] blur-2xl opacity-80" />
        <span className="absolute h-28 w-28 rounded-full border border-white/10 shadow-[0_0_50px_rgba(30,100,255,0.35)]" />
        <span className="absolute h-24 w-24 rounded-full bg-gradient-to-br from-primary/35 via-secondary/30 to-accent/35 blur-xl animate-pulse" />
        <span className="absolute h-20 w-20 rounded-full border border-white/20 bg-white/5 animate-ping" />
        {ringStyles.map((cls, index) => (
          <span key={`ring-${index}`} className={cls} />
        ))}
        <img src="/images/dc-loader.png" alt="DiaspoCare logo" className="relative h-16 w-16 object-contain" />
      </div>
      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.45em] text-white/75">
        preparing care
        <span className="ml-2 inline-block h-1 w-6 rounded-full bg-gradient-to-r from-primary to-accent align-middle animate-pulse" />
      </p>
      <span className="sr-only">Loading DiaspoCare experience</span>
    </div>
  );
};

export default InitialLoader;
