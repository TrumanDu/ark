import { useState } from "react";
import { useLocation, Link } from "umi";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../components/Logo";
import LanguageToggle from "../components/LanguageToggle";
import { useLanguage } from "../i18n/context";
import { t } from "../i18n/translations";
import React from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { lang } = useLanguage();

  const navItems = [
    { label: t("nav.home", lang), href: "/" },
    { label: t("nav.about", lang), href: "/about" },
    { label: t("nav.project", lang), href: "/project" },
    { label: t("nav.blog", lang), href: "https://blog.trumandu.top/", external: true },
    { label: t("nav.book", lang), href: "https://book.trumandu.top/", external: true },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/85 backdrop-blur-lg border-b border-slate-200/60">
      <nav className="flex items-center justify-between mx-auto max-w-6xl px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <Logo size={32} />
          <span className="font-display text-lg font-semibold text-slate-800 group-hover:text-amber transition-colors duration-200">
            TrumanDu
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative px-4 py-2 text-sm font-display font-medium rounded-lg transition-all duration-200 text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.href}
                  className={`
                    relative px-4 py-2 text-sm font-display font-medium rounded-lg transition-all duration-200
                    ${
                      isActive(item.href)
                        ? "text-amber-dark bg-amber/10"
                        : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                    }
                  `}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-amber"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )}
            </li>
          ))}
          <li className="ml-2">
            <LanguageToggle />
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-slate-200/60 bg-[#FAF8F5]"
          >
            <ul className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-2.5 text-sm font-display font-medium rounded-lg transition-all duration-200 text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`
                        block px-4 py-2.5 text-sm font-display font-medium rounded-lg transition-all duration-200
                        ${
                          isActive(item.href)
                            ? "text-amber-dark bg-amber/10"
                            : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
