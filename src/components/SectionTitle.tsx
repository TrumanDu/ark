import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ title, subtitle, className = "" }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`text-center mb-16 ${className}`}
    >
      <h2 className="font-display text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-500 font-body">
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto w-16 h-0.5 bg-amber rounded-full" />
    </motion.div>
  );
}
