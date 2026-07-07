import React from "react";
import { useLanguage } from "../i18n/context";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="px-3 py-1.5 text-sm font-semibold rounded-lg border border-slate-200 text-slate-500 hover:text-amber-600 hover:border-amber-300 transition-all duration-200"
      aria-label="Toggle language"
    >
      {lang === "en" ? "中文" : "EN"}
    </button>
  );
}
