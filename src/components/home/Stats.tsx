"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
}

function AnimatedStat({ value, label, suffix = "" }: StatProps) {
  const { ref, isInView } = useInView({ threshold: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / 2000, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setDisplayValue(Math.round(easeOutQuart * value));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-5xl md:text-6xl font-bold text-nature-pine mb-2">
        {displayValue}
        {suffix}
      </div>
      <div className="text-lg text-muted-foreground">{label}</div>
    </motion.div>
  );
}

export default function Stats() {
  const stats = [
    { value: 50, label: "Luxury Lodges", suffix: "+" },
    { value: 5000, label: "Happy Guests", suffix: "+" },
    { value: 98, label: "Satisfaction Rate", suffix: "%" },
    { value: 15, label: "Years Experience", suffix: "+" },
  ];

  return (
    <section className="py-24 bg-nature-pine/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}