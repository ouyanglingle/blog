import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog",

  lang: "zh-CN",
  title: "博客",
  description: "ouyanglingle 的博客",

  theme: plumeTheme({
    markdown: {
      codeTabs: {
        icon: true, // 启用图标功能
      }
    },
  }),

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
