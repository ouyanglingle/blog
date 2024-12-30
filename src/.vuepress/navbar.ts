import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "2024二期培训",
        icon: "pen-to-square",
        prefix: "2024二期培训/",
        children: [
          { text: "测试1", icon: "pen-to-square", link: "1" },
          { text: "测试2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "2024一期培训",
        icon: "pen-to-square",
        prefix: "2024一期培训/",
        children: [
          {
            text: "对GPIO的简单操作",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "常见I2C设备 的使用",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
