import { HopeIcon, Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "D:/VsCode-Project/blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.66_markdown-it@14.1.0_sass-embedded@1.83.0_sass-loader@16.0.4_sa_uoyl66idbfuooiy7hz2mq2whx4/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "D:/VsCode-Project/blog/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.67_vuepress@2.0.0-rc.19_@vuepress+bundler-webpack@2.0.0-rc.19_vue@3.5.13_/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { BlogCategory, BlogHome, BlogType, BloggerInfo, SocialMedias, Timeline, setupBlog } from "D:/VsCode-Project/blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.66_markdown-it@14.1.0_sass-embedded@1.83.0_sass-loader@16.0.4_sa_uoyl66idbfuooiy7hz2mq2whx4/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/export.js";
import "D:/VsCode-Project/blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.66_markdown-it@14.1.0_sass-embedded@1.83.0_sass-loader@16.0.4_sa_uoyl66idbfuooiy7hz2mq2whx4/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/styles/all.scss";
import { GlobalEncrypt, LocalEncrypt } from "D:/VsCode-Project/blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.66_markdown-it@14.1.0_sass-embedded@1.83.0_sass-loader@16.0.4_sa_uoyl66idbfuooiy7hz2mq2whx4/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "D:/VsCode-Project/blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.66_markdown-it@14.1.0_sass-embedded@1.83.0_sass-loader@16.0.4_sa_uoyl66idbfuooiy7hz2mq2whx4/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "D:/VsCode-Project/blog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.66_vuepress@2.0.0-rc.19_@vuepress+bundler-webpack@2.0.0-rc.19_vue@3.5.13_/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "D:/VsCode-Project/blog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.66_vuepress@2.0.0-rc.19_@vuepress+bundler-webpack@2.0.0-rc.19_vue@3.5.13_/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "D:/VsCode-Project/blog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.66_vuepress@2.0.0-rc.19_@vuepress+bundler-webpack@2.0.0-rc.19_vue@3.5.13_/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "D:/VsCode-Project/blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.66_markdown-it@14.1.0_sass-embedded@1.83.0_sass-loader@16.0.4_sa_uoyl66idbfuooiy7hz2mq2whx4/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
  }
};
