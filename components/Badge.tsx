import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: {
    duration: 0.7,
    delay,
    ease: [0.16, 1, 0.3, 1] as const,
  },
});

const Badge = ({title, className}: {title: string; className?: string}) => {
  return (
    <motion.div
      {...fadeUp(0.3)}
      className={cn(`mb-8 inline-flex items-center gap-2 rounded-full border border-green-900 bg-green-900/10 px-4 py-1 font-mono text-xs uppercase tracking-widest backdrop-blur-sm text-green-900`, className)}
    >
      <motion.span
        className="h-1.5 w-1.5 rounded-full bg-green-600"
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(82,183,136,0.5)",
            "0 0 0 6px rgba(82,183,136,0)",
            "0 0 0 0 rgba(82,183,136,0.5)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {title}
    </motion.div>
  );
};

export default Badge;
