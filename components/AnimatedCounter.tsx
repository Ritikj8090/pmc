"use client";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  target: string;
  suffix?: string;
  className?: string;
};

const AnimatedCounter = ({ target, suffix = "", className = "" }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const num = parseInt(target.replace(/\D/g, ""), 10);
    if (!num) return;

    const duration = 1600;
    let animationFrame = 0;
    const startTime = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(eased * num);

      setCount(value);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(num);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target]);

  const hasDollar = target.startsWith("$");
  const hasPlus = target.includes("+");
  const hasPercent = target.includes("%");

  const display = hasDollar
    ? `$${count}${suffix}`
    : hasPercent
      ? `${count}${suffix}%`
      : `${count}${hasPlus ? "+" : ""}${suffix}`;

  return (
    <span
      ref={ref}
      className={cn(`mb-2 block text-5xl font-spartan font-extrabold leading-none text-green-600`, className)}
    >
      {isInView ? display : "0"}
    </span>
  );
};

export default AnimatedCounter;
