import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export const TextReveal = ({ text, className = "", delay = 0 }: TextRevealProps) => {
  const tokens = text
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  const container = {
    hidden: { opacity: 0 },
    visible: () => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
        staggerDirection: 1,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={`inline-flex flex-wrap ${className}`}
      custom={delay}
    >
      {tokens.map((token, index) => (
        <motion.span
          key={`word-${index}`}
          variants={child}
          className="inline-block"
          style={{ marginRight: index === tokens.length - 1 ? 0 : "0.25em" }}
        >
          {token}
        </motion.span>
      ))}
    </motion.div>
  );
};
