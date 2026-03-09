"use client";

import { motion } from "framer-motion";

const FeatureCard = ({
  title,
  desc,
  icon,
  delay,
}: {
  title: string;
  desc: string;
  icon: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative overflow-hidden border rounded-xl p-10 text-center cursor-default transition-all duration-300 hover:-translate-y-1.5 hover:bg-green-900/20 hover:border-green-700"
    >
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-green-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 250 }}
        className="w-15 h-15 bg-green-600/10 group-hover:bg-green-600/30 border border-green-600/30 rounded-xl flex items-center justify-center mx-auto mb-6 text-[1.6rem]"
      >
        {icon}
      </motion.div>

      <h3 className="font-serif font-bold text-[1.1rem] mb-3">{title}</h3>

      <p className="text-[0.85rem] text-muted-foreground leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
