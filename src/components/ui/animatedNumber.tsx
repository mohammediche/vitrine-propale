"use client";
import { motion, useAnimation, useInView, animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

type AnimatedNumberProps = {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
};

const AnimatedNumber = ({
  value,
  suffix = "",
  className = "text-4xl font-bold text-gradient", // 👈 valeur par défaut
  duration = 2
}: AnimatedNumberProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    const node = ref.current;

    if (isInView && node) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
      });

      const animationControls = animate(0, value, {
        duration,
        onUpdate(latest) {
          const roundedValue = Math.round(latest);
          node.textContent = `${roundedValue}${suffix}`;
        }
      });

      return () => animationControls.stop();
    }
  }, [isInView, value, suffix, duration, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      className={className}
    >
      0{suffix}
    </motion.div>
  );
};

export default AnimatedNumber;
