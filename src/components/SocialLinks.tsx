import React from "react";
import { motion } from "framer-motion";
import GitHubIcon from "./GitHubIcon";

interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const links: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/TrumanDu",
    icon: <GitHubIcon size={20} />,
  },
  {
    label: "Blog",
    href: "https://blog.trumandu.top/",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M5 16a3 3 0 1 0 0 6a3 3 0 0 0 0-6ZM5 1c9.925 0 18 8.075 18 18m-5 0c0-7.168-5.832-13-13-13m8 13c0-4.411-3.589-8-8-8m-3 0v8" />
      </svg>
    ),
  },
  {
    label: "Book",
    href: "https://book.trumandu.top/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM4 18V6h7v12H4zm9 0V6h7v12h-7z" />
      </svg>
    ),
  },
  {
    label: "WeChat",
    href: "http://static.trumandu.top/trumandu_wechat_2022.png",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M15.85 8.14c.39 0 .77.03 1.14.08C16.31 5.25 13.19 3 9.44 3c-4.25 0-7.7 2.88-7.7 6.43c0 2.05 1.15 3.86 2.94 5.04L3.67 16.5l2.76-1.19c.59.21 1.21.38 1.87.47c-.09-.39-.14-.79-.14-1.21c-.01-3.54 3.44-6.43 7.69-6.43z" />
        <path d="M22.26 14.57c0-2.84-2.87-5.14-6.41-5.14s-6.41 2.3-6.41 5.14s2.87 5.14 6.41 5.14c.58 0 1.14-.08 1.67-.2L20.98 21l-1.2-2.4c1.5-.94 2.48-2.38 2.48-4.03z" />
      </svg>
    ),
  },
];

interface SocialLinksProps {
  variant?: "horizontal" | "vertical";
  className?: string;
}

export default function SocialLinks({
  variant = "horizontal",
  className = "",
}: SocialLinksProps) {
  const containerClass =
    variant === "horizontal"
      ? "flex items-center gap-3"
      : "flex flex-col gap-3";

  return (
    <div className={`${containerClass} ${className}`}>
      {links.map((link, i) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          title={link.label}
          aria-label={link.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: i * 0.08 }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 p-2.5 rounded-xl text-slate-400 hover:text-amber hover:bg-amber/5 transition-colors duration-200"
        >
          {link.icon}
          {variant === "vertical" && (
            <span className="text-sm font-display font-medium">
              {link.label}
            </span>
          )}
        </motion.a>
      ))}
    </div>
  );
}
