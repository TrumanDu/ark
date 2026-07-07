import React from "react";
import { motion } from "framer-motion";
import trumanImg from "../assets/trumandu_20230319181007.jpg";
import GitHubIcon from "../components/GitHubIcon";
import { useLanguage } from "../i18n/context";
import { t } from "../i18n/translations";

const contributedProjects = [
  { name: "Kibana", href: "https://github.com/elastic/kibana" },
  { name: "ice.js", href: "https://github.com/alibaba/ice" },
  { name: "apache/rocketmq", href: "https://github.com/apache/rocketmq" },
];

const ownProjects = [
  { name: "KCenter", href: "https://github.com/xaecbd/KCenter" },
  { name: "redis-manager", href: "https://github.com/ngbdf/redis-manager" },
  { name: "RCT", href: "https://github.com/xaecbd/RCT" },
  { name: "hexo-theme-next", href: "https://github.com/next-theme/hexo-theme-next" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/TrumanDu",
    icon: <GitHubIcon size={18} />,
  },
  {
    label: "Newsletter",
    href: "https://trumandu.zhubai.love/",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z" />
        <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z" />
      </svg>
    ),
  },
  {
    label: "WeChat",
    href: "http://static.trumandu.top/trumandu_wechat_2022.png",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M690.1 377.4c5.9 0 11.8 0.2 17.6 0.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6 5.5 3.9 9.1 10.3 9.1 17.6 0 2.4-0.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-0.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-0.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4 0.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-0.1 17.8-0.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8z m-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1z m-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1z" />
        <path d="M866.7 792.7c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-0.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7 2.4 0 4.7-0.9 6.4-2.6 1.7-1.7 2.6-4 2.6-6.4 0-2.2-0.9-4.4-1.4-6.6-0.3-1.2-7.6-28.3-12.2-45.3-0.5-1.9-0.9-3.8-0.9-5.7 0.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9z m179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c-0.1 19.8-16.2 35.9-36 35.9z" />
      </svg>
    ),
  },
  {
    label: "RSS",
    href: "http://blog.trumandu.top/atom.xml",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="6.18" cy="17.82" r="2.18" />
        <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:truman.p.du@qq.com",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
];

export default function About() {
  const { lang } = useLanguage();

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          {/* Left: Photo + Social */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-28">
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-amber/20 blur-sm" />
                <img
                  src={trumanImg}
                  alt="Truman Du"
                  className="relative aspect-square w-full max-w-xs rounded-2xl object-cover rotate-2 shadow-lg"
                />
              </div>

              <div className="mt-8">
                <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
                  {t("about.contact", lang)}
                </h3>
                <ul className="space-y-2">
                  {socialLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-sm text-slate-500 hover:text-amber transition-colors duration-200"
                      >
                        <span className="text-slate-400 group-hover:text-amber transition-colors duration-200">
                          {link.icon}
                        </span>
                        <span className="font-display">{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <h1 className="font-display text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
              {t("about.greeting", lang)}
            </h1>

            <div className="mt-8 space-y-6 text-base text-slate-500 leading-relaxed font-body">
              <p>{t("about.bio.p1", lang)}</p>

              <p>{t("about.bio.p2", lang)}</p>

              <ul className="flex flex-wrap gap-2.5 pl-0">
                {contributedProjects.map((p) => (
                  <li key={p.name}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-display font-medium bg-slate-100 text-slate-600 hover:text-amber-dark hover:bg-amber/10 border border-slate-200 hover:border-amber/30 transition-all duration-200"
                    >
                      <GitHubIcon size={14} />
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>

              <p>{t("about.bio.p3", lang)}</p>

              <ul className="flex flex-wrap gap-2.5 pl-0">
                {ownProjects.map((p) => (
                  <li key={p.name}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-display font-medium bg-slate-100 text-slate-600 hover:text-amber-dark hover:bg-amber/10 border border-slate-200 hover:border-amber/30 transition-all duration-200"
                    >
                      <GitHubIcon size={14} />
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>

              <p>{t("about.bio.p4", lang)}</p>

              <blockquote className="text-slate-400 italic border-l-2 border-amber/40 pl-4 font-body">
                {t("about.quote", lang)}
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
