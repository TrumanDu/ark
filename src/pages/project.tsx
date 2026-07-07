import React from "react";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import GitHubIcon from "../components/GitHubIcon";
import { useLanguage } from "../i18n/context";
import { t } from "../i18n/translations";

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

export default function Project() {
  const { lang } = useLanguage();

  return (
    <div className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Open Source Projects */}
        <section className="mb-24">
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
        </section>

        {/* Side Projects */}
        <section>
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
        </section>
      </div>
    </div>
  );
}
