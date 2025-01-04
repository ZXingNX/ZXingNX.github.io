import CodeDemo from "D:/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.64_markdown-it@14.1.0_sass-embedded@1.83.0_sass-loader@16_ya6l55rgy3zj45l4r2mkvzoilu/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.64_markdown-it@14.1.0_sass-embedded@1.83.0_sass-loader@16_ya6l55rgy3zj45l4r2mkvzoilu/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
