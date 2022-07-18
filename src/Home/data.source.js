import React from 'react';
import { FileTextTwoTone, WechatFilled, GithubFilled } from '@ant-design/icons';
import Logo from './logo.png';

export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children: Logo,
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item0',
        className: 'header3-item',
        children: {
          href: '#documents',
          children: [
            {
              children: (
                <span>
                  <span>
                    <p>文章</p>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
          className: 'kmaehwwqsdo-editor_css',
        },
      },
      {
        name: 'item1',
        className: 'header3-item',
        children: {
          href: '#project',
          children: [
            {
              children: (
                <span>
                  <span>
                    <p>开源项目</p>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item2',
        className: 'header3-item',
        children: {
          href: '#product',
          children: [
            {
              children: (
                <span>
                  <p>产品</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item3',
        className: 'header3-item',
        children: {
          href: 'http://blog.trumandu.top/about/',
          children: [
            {
              children: (
                <span>
                  <p>关于</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};
export const Feature70DataSource = {
  wrapper: {
    className: 'home-page-wrapper feature7-wrapper kmc1b81izxh-editor_css',
  },
  page: { className: 'home-page feature7' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'feature7-title-wrapper',
    children: [
      {
        name: 'title',
        className: 'feature7-title-h1',
        children: (
          <span>
            <p>文章</p>
          </span>
        ),
      },
      {
        name: 'content',
        className: 'feature7-title-content',
        children: (
          <span>
            <span>
              <p>博客，教程，专栏等文章库</p>
            </span>
          </span>
        ),
      },
    ],
  },
  blockWrapper: {
    className: 'feature7-block-wrapper',
    gutter: 24,
    children: [
      {
        md: 6,
        xs: 24,
        name: 'block0',
        href: 'http://blog.trumandu.top',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children: (
                <FileTextTwoTone style={{ fontSize: '20px', color: '#08c' }} />
              ),
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: 'Blog',
            },
            {
              name: 'content',

              className: 'feature7-block-content',
              children: '写点技术文章，抒发一下心情，努力改变世界！',
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: 'block1',
        className: 'feature7-block',
        href: 'https://mp.weixin.qq.com/s/3PYnNEf6fZ1mynQ-dYQVKw',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children: (
                <WechatFilled style={{ fontSize: '20px', color: 'green' }} />
              ),
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: '公众号',
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: '随遇而安，表达自己所思所想，星星之火可以燎原！',
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: 'block4',
        className: 'feature7-block',
        href: 'http://book.trumandu.top/',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children: (
                <FileTextTwoTone style={{ fontSize: '20px', color: '#08c' }} />
              ),
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: "TrumanDu's Book",
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children:
                '我的开源书籍网站，包含多个技术教程，不忘初心，为人民服务',
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: 'block2',
        className: 'feature7-block',
        href:
          'https://app.gitbook.com/@trumandu/s/kibana-plugin-development-tutorial/',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children: (
                <FileTextTwoTone style={{ fontSize: '20px', color: '#08c' }} />
              ),
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: 'Kibana插件开发',
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: '这是一本讲述kibana插件开发教程类的书籍，只针对5.x-6.x',
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: 'block3',
        className: 'feature7-block',
        href: 'https://app.gitbook.com/@trumandu/s/java-architect-tutorial/',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children: (
                <FileTextTwoTone style={{ fontSize: '20px', color: '#08c' }} />
              ),
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: 'Java初级架构师入阶系列专栏',
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children:
                '该系列只是对自己在java架构方面的现阶段理解的整理系列。',
            },
          ],
        },
      },
    ],
  },
};
export const Feature71DataSource = {
  wrapper: { className: 'home-page-wrapper feature71-wrapper' },
  page: { className: 'home-page feature71' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'feature7-title-wrapper',
    children: [
      {
        name: 'title',
        className: 'feature7-title-h1',
        children: (
          <span>
            <p>开源项目</p>
          </span>
        ),
      },
      {
        name: 'content',
        className: 'feature7-title-content',
        children: (
          <span>
            <p>热爱开源，希望自己的项目能给你带来帮助</p>
          </span>
        ),
      },
    ],
  },
  blockWrapper: {
    className: 'feature7-block-wrapper',
    gutter: 24,
    children: [
      {
        md: 6,
        xs: 24,
        name: 'block0',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children: <GithubFilled style={{ fontSize: '20px' }} />,
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: 'KafkaCenter',
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children:
                'Kafka集群管理和维护，生产/消费监控，生态组件使用的一站式平台',
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: 'block1',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children: <GithubFilled style={{ fontSize: '20px' }} />,
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: 'redis-manager',
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children:
                'Redis一站式管理平台，支持集群的监控、安装、管理、告警等功能',
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: 'block2',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children: <GithubFilled style={{ fontSize: '20px' }} />,
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: 'RCT',
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: '通过解析rdb文件对redis内存结构分析的一站式平台',
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: 'block3',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children: <GithubFilled style={{ fontSize: '20px' }} />,
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: 'indices_view',
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: 'An awesome kibana plugin for view indies!',
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: 'block4',
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children: <GithubFilled style={{ fontSize: '20px' }} />,
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: 'autocomplate-shell',
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: '下载量超23k的vs code插件，支持shell代码补全',
            },
          ],
        },
      },
    ],
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <span>
              <p>Side Project</p>
            </span>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block kmaesgc69dm-editor_css',
        href: 'https://github.com/TrumanDu/TDA',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text kmaeutilrt-editor_css' },
          title: { className: 'content3-title', children: 'TDA' },
          content: {
            className: 'content3-content',
            children: 'Truman Du Assistant  简称 TDA ,个人助手。',
          },
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <span>
          <a href="https://beian.miit.gov.cn/" target="_blank">
            陕ICP备 15011078 号-2
          </a>
          &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
          <span>
            ©2021 <a href="http://www.trumandu.top">trumandu </a>All Rights
            Reserved
            <br />
          </span>
        </span>
      </span>
    ),
  },
};
