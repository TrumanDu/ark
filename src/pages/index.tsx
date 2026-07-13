import React from "react";
import { motion } from "framer-motion";
import SocialLinks from "../components/SocialLinks";
import SectionTitle from "../components/SectionTitle";
import BookCard from "../components/BookCard";
import ProjectCard from "../components/ProjectCard";
import GitHubIcon from "../components/GitHubIcon";
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

const openSourceProjects = [
  {
    title: "KafkaCenter",
    description: {
      en: "All-in-one platform for Kafka cluster management, monitoring, and ecosystem tools",
      zh: "Kafka 集群管理和维护，生产/消费监控，生态组件使用的一站式平台",
    },
    href: "https://github.com/xaecbd/KCenter",
  },
  {
    title: "redis-manager",
    description: {
      en: "Full-stack Redis management platform — monitoring, provisioning, alerting",
      zh: "Redis 一站式管理平台，支持集群的监控、安装、管理、告警等功能",
    },
    href: "https://github.com/ngbdf/redis-manager",
  },
  {
    title: "RCT",
    description: {
      en: "Analyze Redis memory structures by parsing RDB files",
      zh: "通过解析 rdb 文件对 Redis 内存结构分析的一站式平台",
    },
    href: "https://github.com/xaecbd/RCT",
  },
  {
    title: "indices_view",
    description: {
      en: "A Kibana plugin for viewing Elasticsearch indices",
      zh: "An awesome Kibana plugin for viewing indices!",
    },
    href: "https://github.com/TrumanDu/indices_view",
  },
  {
    title: "autocomplate-shell",
    description: {
      en: "VS Code extension for shell script autocompletion — 51k+ installs",
      zh: "下载量超 51k 的 VS Code 插件，支持 shell 代码补全",
    },
    href: "https://github.com/TrumanDu/autocomplate-shell",
  },
  {
    title: "MyBoot",
    description: {
      en: "A Python web framework inspired by Spring Boot — auto-configuration, DI, REST decorators, and scheduled tasks built on FastAPI",
      zh: "受 Spring Boot 启发的 Python Web 框架，基于 FastAPI，支持自动配置、依赖注入、REST 装饰器和定时任务",
    },
    href: "https://github.com/TrumanDu/myboot",
  },
];

const sideProjects = [
  {
    title: { en: "Photo Master", zh: "修图大师" },
    description: {
      en: "Online image editor with AI enhancement, ID photos, watermarks, and compression",
      zh: "一款简单易用的在线图片编辑工具，支持 AI 修图，证件照，水印与压缩等功能",
    },
    href: "https://xiutu.trumandu.top",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
      </svg>
    ),
  },
  {
    title: { en: "Toolkit", zh: "Toolkit" },
    description: {
      en: "A minimalist, plugin-based utility collection designed for developers",
      zh: "一个专为程序员设计的极简、插件化的工具集",
    },
    href: "https://toolkit.trumandu.top/",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L21 3m0 0h-5.25M21 3v5.25m-5.25 6.58L3 21m0 0h5.25M3 21v-5.25" />
      </svg>
    ),
  },
  {
    title: { en: "Finance Assistant", zh: "家庭理财助手" },
    description: {
      en: "Track household assets and analyze returns across financial products",
      zh: "能够记录家庭财产，汇总分析不同产品收益情况的家庭理财助手",
    },
    href: "https://github.com/TrumanDu/financial-assistant",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: { en: "Blog Year-End Roundup", zh: "独立博客年终总结随机浏览" },
    description: {
      en: "Discover indie blog year-end reviews at random — find warmth in others' words",
      zh: "年度独立博客年终总结随机浏览网站——发现他人的精彩，在文字中感受温度",
    },
    href: "https://trumandu.top/2024-summary",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
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

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent" />
      </div>

      {/* Open Source Projects */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            title={t("projects.oss.title", lang)}
            subtitle={t("projects.oss.subtitle", lang)}
          />
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
            {openSourceProjects.map((project, i) => (
              <ProjectCard
                key={project.href}
                title={project.title}
                description={project.description[lang]}
                href={project.href}
                variant="opensource"
                index={i}
                icon={<GitHubIcon size={28} />}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent" />
      </div>

      {/* Side Projects */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            title={t("projects.side.title", lang)}
            subtitle={t("projects.side.subtitle", lang)}
          />
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
            {sideProjects.map((project, i) => (
              <ProjectCard
                key={project.href}
                title={project.title[lang]}
                description={project.description[lang]}
                href={project.href}
                variant="sideproject"
                index={i}
                icon={project.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
