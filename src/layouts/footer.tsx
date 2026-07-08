import React from "react";
import { Link } from "umi";
import { useLanguage } from "../i18n/context";
import { t } from "../i18n/translations";

export default function Footer() {
  const year = new Date().getFullYear();
  const { lang } = useLanguage();

  return (
    <footer className="border-t border-slate-200 bg-white/50">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-sm text-slate-400">
          ©{year}{" "}
          <Link to="/" className="text-slate-500 hover:text-amber transition-colors duration-200">
            TrumanDu
          </Link>
          {" "}{t("footer.rights", lang)}
        </span>
        <a
          href="https://beian.miit.gov.cn"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-sm text-slate-400 hover:text-slate-500 transition-colors duration-200"
        >
          陕ICP备 15011078 号-2
        </a>
      </div>
    </footer>
  );
}
