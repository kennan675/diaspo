import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export const TextReveal = ({ text, className = "", delay = 0 }: TextRevealProps) => {
  // Split text into words and spaces to preserve them
  const words = text.split(/(\s+)/);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.05, 
        delayChildren: delay,
        staggerDirection: 1 
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
      style={{ whiteSpace: 'normal' }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`word-${index}`}
          variants={child}
          className="inline-block"
          style={{ whiteSpace: 'nowrap', marginRight: '0.25em' }}
          whileHover={{
            scale: 1.1,
            color: "hsl(var(--primary))",
            transition: { duration: 0.3 },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
