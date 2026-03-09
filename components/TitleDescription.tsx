'use client";';
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

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const childFade = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
  },
};

const TitleDescription = ({
  header,
  title,
  description,
  children,
  headerClassName,
  titleClassName,
  descriptionClassName,
}: {
  header: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  headerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) => {
  return (
    <>
      <motion.h1
        variants={stagger}
        initial="initial"
        animate="animate"
        className={cn(
          "mb-6 space-x-3 text-[clamp(2.8rem,6vw,5.5rem)] font-black leading-none tracking-tight",
          headerClassName,
        )}
      >
        <motion.span variants={childFade}>{header}</motion.span>

        <motion.span
          variants={childFade}
          className={cn("relative inline-block text-green-600", titleClassName)}
        >
          {title}
          <motion.span
            className="absolute bottom-1 left-0 h-0.75 rounded-sm bg-linear-to-r from-green-600 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 0.8,
              delay: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        </motion.span>
        {children}
      </motion.h1>
      <motion.p
        {...fadeUp(0.4)}
        className={cn(
          "relative mx-auto max-w-150 text-[1.05rem] leading-[1.8] text-muted-foreground",
          descriptionClassName,
        )}
      >
        {description}
      </motion.p>
    </>
  );
};

export default TitleDescription;
