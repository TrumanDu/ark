import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath:"./",
  exportStatic: {},
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
