import { useId } from "react";

type SectionTransitionProps = {
  variant?: "dark" | "light";
};

const PALETTES = {
  dark: {
    base: "bg-gradient-to-b from-transparent via-[#061534]/15 to-transparent",
    glow: "bg-[#3c82ff]/15",
    stroke: "from-white/10 via-white/35 to-white/10",
  },
  light: {
    base: "bg-gradient-to-b from-transparent via-white/50 to-transparent",
    glow: "bg-[#7f5dff]/10",
    stroke: "from-[#0b1a39]/5 via-[#0b1a39]/20 to-[#0b1a39]/5",
  },
};

const SectionTransition = ({ variant = "dark" }: SectionTransitionProps) => {
  const palette = PALETTES[variant];
  const gradientId = useId();

  return (
    <div className="relative h-24 w-full overflow-hidden" aria-hidden>
      <div className={`absolute inset-0 ${palette.base}`} />
      <div className={`absolute inset-0 blur-3xl opacity-60 ${palette.glow} animate-[pulse_8s_ease-in-out_infinite]`} />

      <svg
        className="absolute inset-0 h-full w-full opacity-60"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <defs>
          <linearGradient id={`${gradientId}-wave`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.35)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#${gradientId}-wave)`}
          d="M0,160 C160,120 320,200 480,170 C640,140 800,40 960,58 C1120,75 1280,165 1440,160 L1440,320 L0,320 Z"
        />
      </svg>

      <div className={`absolute inset-x-0 top-1/2 h-px bg-gradient-to-r ${palette.stroke}`} />
    </div>
  );
};

export default SectionTransition;
