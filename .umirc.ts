import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/about", component: "about" },
    { path: "/project", component: "project" },
  ],
  hash: true,
  exportStatic: {},
  npmClient: "pnpm",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
  headScripts: [
    `(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?650d6d332fde7d8d1c2da71da2c598b5";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();`,
  ],
});
