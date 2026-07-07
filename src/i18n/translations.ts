export type Lang = "en" | "zh";

const translations = {
  // Navigation
  "nav.home": { en: "Home", zh: "首页" },
  "nav.about": { en: "About", zh: "关于" },
  "nav.project": { en: "Projects", zh: "项目" },
  "nav.blog": { en: "Blog", zh: "博客" },
  "nav.book": { en: "Books", zh: "书籍" },

  // Hero
  "hero.title.line1": { en: "Software Architect.", zh: "软件架构师。" },
  "hero.title.line2": { en: "Open Source Advocate.", zh: "开源倡导者。" },
  "hero.subtitle": {
    en: "I'm Truman — a software architect based in Xi'an, China. I build tools, write books, and grow the local tech community.",
    zh: "我是 Truman，来自西安的软件架构师。我构建工具、撰写书籍，并推动本地技术社区的发展。",
  },

  // Sections
  "books.title": { en: "Publications", zh: "出版物" },
  "books.subtitle": {
    en: "Open-source books and technical notes I've written along the way.",
    zh: "一路写下来的开源书籍和技术笔记。",
  },

  // About
  "about.greeting": { en: "I'm Truman Du.", zh: "我是 Truman Du。" },
  "about.bio.p1": {
    en: "An architect at Newegg, fluent across the full stack. My current focus spans big data infrastructure and foundational software architecture. I'm also a co-founder of the Xi'an IT Tech Circle, a grassroots community for engineers in the region.",
    zh: "一名来自 Newegg 的架构师，熟悉常用的前后端技术，目前专注于大数据和基础软件架构领域。同时也是西安 IT 技术圈发起人之一。",
  },
  "about.bio.p2": {
    en: "I believe in open source the way some people believe in public education — it's the infrastructure that makes everything else possible. Without it, the modern internet wouldn't exist. I've contributed to several projects I admire:",
    zh: "我相信开源，就像有些人相信公共教育一样 — 它是让一切成为可能的基础设施。没有开源，就没有现代互联网。我曾为一些优秀的项目做过贡献：",
  },
  "about.bio.p3": {
    en: "Beyond contributing, I've led open-source teams as a core member on these projects:",
    zh: "除了参与开源项目，我还作为核心成员主导了以下项目：",
  },
  "about.bio.p4": {
    en: "I'm a frequent speaker at tech meetups and conferences, both inside and outside my company. I write technical articles and curate newsletters. If you're in Xi'an and care about engineering, come say hello.",
    zh: "我经常在公司内外的技术沙龙和会议上做演讲嘉宾，分享经验。同时也撰写技术文章和技术期刊。如果你在西安，欢迎来交流。",
  },
  "about.quote": {
    en: "Time leaves no trace, but writing does. I document what I see so others might see it too.",
    zh: "岁月无痕，流光难驻。用笔印证心灵的虹影，让看过的世界被更多的人知晓。",
  },
  "about.contact": { en: "Get in touch", zh: "联系方式" },

  // Projects
  "projects.oss.title": { en: "Open Source", zh: "开源项目" },
  "projects.oss.subtitle": {
    en: "Tools I built because I needed them. Turns out others did too.",
    zh: "因为自己需要而构建的工具，发现其他人也需要。",
  },
  "projects.side.title": { en: "Side Projects", zh: "副业项目" },
  "projects.side.subtitle": {
    en: "Personal products born from curiosity and weekends.",
    zh: "利用周末时间，从好奇心出发做出的产品。",
  },

  // Footer
  "footer.rights": { en: "All Rights Reserved", zh: "保留所有权利" },

  // Language toggle
  "lang.toggle": { en: "中文", zh: "EN" },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, lang: Lang): string {
  return translations[key][lang];
}
