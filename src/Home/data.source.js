import React from 'react';
import { FileTextTwoTone, WechatFilled, GithubFilled } from '@ant-design/icons';
import Logo from './logo.png'

export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children:
      Logo,
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
        }
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
        href: "http://blog.trumandu.top",
        className: 'feature7-block',
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children:
                <FileTextTwoTone style={{ fontSize: '20px', color: '#08c' }} />,
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
        href: "https://mp.weixin.qq.com/s/3PYnNEf6fZ1mynQ-dYQVKw",
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children:
                <WechatFilled style={{ fontSize: '20px', color: 'green' }} />,
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
        name: 'block2',
        className: 'feature7-block',
        href: "https://app.gitbook.com/@trumandu/s/kibana-plugin-development-tutorial/",
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children:
                <FileTextTwoTone style={{ fontSize: '20px', color: '#08c' }} />,
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
        href: "https://app.gitbook.com/@trumandu/s/java-architect-tutorial/",
        children: {
          className: 'feature7-block-group',
          children: [
            {
              name: 'image',
              className: 'feature7-block-image',
              children:
                <FileTextTwoTone style={{ fontSize: '20px', color: '#08c' }} />,
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: 'Java初级架构师入阶系列专栏',
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: '该系列只是对自己在java架构方面的现阶段理解的整理系列。',
            },
          ],
        },
      },
    ],
  },
};
export const Feature71DataSource = {
  wrapper: { className: 'home-page-wrapper feature7-wrapper' },
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
              children:
                <GithubFilled style={{ fontSize: '20px' }} />,
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: 'KafkaCenter',
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: 'Kafka集群管理和维护，生产/消费监控，生态组件使用的一站式平台',
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
              children:
                <GithubFilled style={{ fontSize: '20px' }} />,
            },
            {
              name: 'title',
              className: 'feature7-block-title',
              children: 'redis-manager',
            },
            {
              name: 'content',
              className: 'feature7-block-content',
              children: 'Redis一站式管理平台，支持集群的监控、安装、管理、告警等功能',
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
              children:
                <GithubFilled style={{ fontSize: '20px' }} />,
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
              children:
                <GithubFilled style={{ fontSize: '20px' }} />,
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
              children:
                <GithubFilled style={{ fontSize: '20px' }} />,
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
              <p>产品与服务</p>
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
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text kmaeutilrt-editor_css' },
          title: { className: 'content3-title', children: '企业资源管理' },
          content: {
            className: 'content3-content',
            children:
              '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block kmaesqbfix-editor_css',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text kmaev070d2t-editor_css' },
          title: { className: 'content3-title', children: '云安全' },
          content: {
            className: 'content3-content',
            children:
              '按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。',
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block kmaesszofbi-editor_css',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text kmaeva3wst-editor_css' },
          title: { className: 'content3-title', children: '云监控' },
          content: {
            className: 'content3-content',
            children:
              '分布式云环境集中监控，统一资源及应用状态视图，智能分析及故障定位。',
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block kmaesx70td-editor_css',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text kmaetw3w4ja-editor_css' },
          title: { className: 'content3-title', children: '移动' },
          content: {
            className: 'content3-content',
            children:
              '一站式移动金融APP开发及全面监控；丰富可用组件，动态发布和故障热修复。',
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text kmaetp3rh7u-editor_css' },
          title: { className: 'content3-title', children: '分布式中间件' },
          content: {
            className: 'content3-content',
            children:
              '金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。',
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text kmaetfp0ocg-editor_css' },
          title: { className: 'content3-title', children: '大数据' },
          content: {
            className: 'content3-content',
            children:
              '一站式、全周期大数据协同工作平台，PB级数据处理、毫秒级数据分析工具。',
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
          <a href="https://beian.miit.gov.cn/" target="_blank">陕ICP备15011078号-2</a>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span>
            ©2021 <a href="http://trumandu.top">trumandu </a>All Rights Reserved<br />
          </span>
        </span>
      </span>
    ),
  },
};
