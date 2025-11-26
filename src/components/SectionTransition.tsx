type SectionTransitionProps = {
  variant?: "dark" | "light";
};

const VARIANT_MAP = {
  dark: {
    base: "bg-gradient-to-b from-transparent via-[#0b1b34]/45 to-[#040915]",
    glow: "bg-[radial-gradient(circle_at_center,#4b81ff33,transparent_60%)]",
  },
  light: {
    base: "bg-gradient-to-b from-transparent via-white/70 to-background",
    glow: "bg-[radial-gradient(circle_at_center,#91b4ff33,transparent_65%)]",
  },
};

const SectionTransition = ({ variant = "dark" }: SectionTransitionProps) => {
  const palette = VARIANT_MAP[variant];

  return (
    <div className="relative h-16 w-full overflow-hidden" aria-hidden>
      <div className={`absolute inset-0 ${palette.base}`} />
      <div className={`absolute inset-0 blur-3xl opacity-60 ${palette.glow} animate-[pulse_6s_ease-in-out_infinite]`} />
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </div>
  );
};

export default SectionTransition;
