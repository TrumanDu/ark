import React from "react";
import { motion } from "framer-motion";

interface BookCardProps {
  title: string;
  description: string;
  cover: string;
  href: string;
  index?: number;
}

export default function BookCard({ title, description, cover, href, index = 0 }: BookCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -3 }}
      className="group flex gap-5 p-5 rounded-xl bg-white border border-slate-200 hover:border-amber/40 hover:shadow-md hover:shadow-amber/5 transition-all duration-300"
    >
      <div className="flex-shrink-0 w-16 h-24 overflow-hidden rounded-lg bg-slate-100">
        <img
          src={cover}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col justify-center min-w-0">
        <h3 className="font-display font-semibold text-slate-800 group-hover:text-amber-dark transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        <p className="mt-1.5 text-sm text-slate-500 line-clamp-2 font-body">
          {description}
        </p>
      </div>
    </motion.a>
  );
}
