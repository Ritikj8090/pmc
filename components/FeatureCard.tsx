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
      className="group relative overflow-hidden p-10 text-center cursor-default transition-all duration-300 hover:-translate-y-1.5"
    >
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-green-600 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 250 }}
        className="mx-auto mb-6 flex h-15 w-15 items-center justify-center text-[2rem]"
      >
        {icon}
      </motion.div>

      <h3 className="mb-3 text-[1.1rem] font-semibold text-gray-900">{title}</h3>

      <p className="text-[0.95rem] leading-relaxed text-gray-700">
        {desc}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
