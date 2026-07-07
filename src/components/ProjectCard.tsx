import React from "react";
import { motion } from "framer-motion";
import GitHubIcon from "./GitHubIcon";

type CardVariant = "opensource" | "sideproject";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  variant?: CardVariant;
  index?: number;
  icon?: React.ReactNode;
}

const variantStyles: Record<CardVariant, string> = {
  opensource: "hover:border-amber/40 hover:shadow-amber/5",
  sideproject: "hover:border-orange-300 hover:shadow-orange-100/50",
};

export default function ProjectCard({
  title,
  description,
  href,
  variant = "opensource",
  index = 0,
  icon,
}: ProjectCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -3 }}
      className={`
        group relative flex items-start gap-4 p-6 rounded-xl
        bg-white border border-slate-200
        hover:shadow-md
        transition-all duration-300
        ${variantStyles[variant]}
      `}
    >
      <div className="flex-shrink-0 mt-0.5 text-slate-400 group-hover:text-amber transition-colors duration-300">
        {icon || <GitHubIcon size={28} />}
      </div>
      <div className="min-w-0">
        <h3 className="font-display font-semibold text-slate-800 group-hover:text-amber-dark transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-2 text-sm text-slate-500 leading-relaxed font-body">
          {description}
        </p>
      </div>
      <svg
        className="absolute top-6 right-6 w-4 h-4 text-slate-300 group-hover:text-slate-400 transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </motion.a>
  );
}
