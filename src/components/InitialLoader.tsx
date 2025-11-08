import { useMemo } from "react";

interface InitialLoaderProps {
  hidden: boolean;
}

const InitialLoader = ({ hidden }: InitialLoaderProps) => {
  const baseRingClasses = "absolute inset-0 rounded-full border-2";

  const ringStyles = useMemo(
    () => [
      `${baseRingClasses} border-white/10`,
      `${baseRingClasses} border-t-transparent border-r-transparent border-white/50 animate-[spin_2.6s_linear_infinite]`,
      `${baseRingClasses} border-b-transparent border-l-transparent border-secondary/60 animate-[spin_2.2s_linear_infinite_reverse]`,
      `${baseRingClasses} border-t-primary border-b-accent/70 animate-[spin_1.8s_linear_infinite]`,
    ],
    [],
  );

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0b1530] via-[#13264f] to-[#0d1d3c] text-white transition-opacity duration-500 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex h-28 w-28 items-center justify-center">
        {ringStyles.map((cls, index) => (
          <span key={index} className={cls} />
        ))}
        <span className="relative text-xl font-semibold tracking-[0.35em]">DC</span>
      </div>
      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.4em] text-white/70">preparing care</p>
    </div>
  );
};

export default InitialLoader;
