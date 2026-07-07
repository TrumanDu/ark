import React from "react";
import { motion } from "framer-motion";
import SocialLinks from "../components/SocialLinks";
import SectionTitle from "../components/SectionTitle";
import BookCard from "../components/BookCard";
import { useLanguage } from "../i18n/context";
import { t } from "../i18n/translations";

import b1 from "../assets/20230315230945.png";
import book2 from "../assets/java20230315231340.png";
import book3 from "../assets/mongo20230315231615.png";
import book4 from "../assets/es20230315231815.png";
import kibana from "../assets/kibana20230315232024.png";
import language from "../assets/language.png";

const books = [
  {
    title: { en: "Message Queue Handbook", zh: "消息队列入门与最佳实践" },
    description: { en: "Kafka, RocketMQ, Pulsar — from basics to best practices", zh: "Kafka、RocketMQ、Pulsar 入门与最佳实践" },
    cover: b1,
    href: "http://book.trumandu.top/mq/%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97%E5%85%A5%E9%97%A8%E4%B8%8E%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5",
  },
  {
    title: { en: "Java Architect Series", zh: "Java 初级架构师入阶系列" },
    description: { en: "Java fundamentals and architecture patterns, organized as a study path", zh: "Java 基础知识、架构方面的现阶段理解整理" },
    cover: book2,
    href: "http://book.trumandu.top/java-architect-tutorial/java-architect-tutorial",
  },
  {
    title: { en: "MongoDB Guide", zh: "MongoDB 指南" },
    description: { en: "Get up to speed with MongoDB, fast", zh: "从速了解 MongoDB 那些事" },
    cover: book3,
    href: "http://book.trumandu.top/mongodb",
  },
  {
    title: { en: "Elasticsearch Quick Notes", zh: "Elasticsearch 速览学习笔记" },
    description: { en: "A hands-on notebook covering the Elasticsearch essentials", zh: "一本简单上手的 Elasticsearch 速览学习笔记" },
    cover: book4,
    href: "http://book.trumandu.top/elasticsearch",
  },
  {
    title: { en: "Kibana Plugin Dev Guide", zh: "Kibana 插件开发指南" },
    description: { en: "Plugin development tutorial for Kibana 5.x–6.x", zh: "Kibana 插件开发教程，针对 5.x-6.x" },
    cover: kibana,
    href: "https://trumandu.gitbook.io/kibana-plugin-development-tutorial/",
  },
  {
    title: { en: "Language Study Notes", zh: "编程语言学习笔记系列" },
    description: { en: "Notes from learning various programming languages", zh: "记录编程语言学习笔记" },
    cover: language,
    href: "https://book.trumandu.top/language/go/go%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0",
  },
];

export default function HomePage() {
  const { lang } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6">
        {/* Background accent */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-amber/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-amber tracking-widest uppercase mb-6"
          >
            Xi'an, China
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-800"
          >
            {t("hero.title.line1", lang)}
            <br />
            <span className="text-amber">{t("hero.title.line2", lang)}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="mt-8 text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-body"
          >
            {t("hero.subtitle", lang)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex justify-center"
          >
            <SocialLinks />
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-20 animate-bounce-slow"
          >
            <svg
              className="mx-auto w-5 h-5 text-slate-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Books Section */}
      <section className="px-6 py-24 bg-white/50">
        <div className="max-w-5xl mx-auto">
          <SectionTitle title={t("books.title", lang)} subtitle={t("books.subtitle", lang)} />

          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {books.map((book, i) => (
              <BookCard
                key={book.href}
                title={book.title[lang]}
                description={book.description[lang]}
                cover={book.cover}
                href={book.href}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
