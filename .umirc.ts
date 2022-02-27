import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  analytics: {
    baidu: '650d6d332fde7d8d1c2da71da2c598b5',
  },
  publicPath: './',
  exportStatic: {},
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
