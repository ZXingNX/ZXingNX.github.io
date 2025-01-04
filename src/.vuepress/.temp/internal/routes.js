export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/intro.html", { loader: () => import(/* webpackChunkName: "intro.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/intro.html.js"), meta: {"e":"\n<p>将你的个人介绍和档案放置在此处。</p>\n","r":{"minutes":0.07,"words":21},"t":"介绍页","i":"circle-info","y":"a"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"Home","i":"home"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "demo_disable.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"c":["使用指南"],"g":["禁用"],"e":"<p>你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。</p>\n","r":{"minutes":0.43,"words":128},"t":"布局与功能禁用","i":"gears","O":4,"y":"a"} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "demo_encrypt.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"c":["使用指南"],"g":["加密"],"n":true,"r":{"minutes":0.51,"words":154},"t":"密码加密的文章","i":"lock","y":"a"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "demo_layout.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"c":["指南"],"g":["布局"],"e":"<p>布局包括:</p>\n<ul>\n<li><a href=\"https://theme-hope.vuejs.press/zh/guide/layout/navbar.html\" target=\"_blank\" rel=\"noopener noreferrer\">导航栏</a></li>\n<li><a href=\"https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html\" target=\"_blank\" rel=\"noopener noreferrer\">侧边栏</a></li>\n<li><a href=\"https://theme-hope.vuejs.press/zh/guide/layout/footer.html\" target=\"_blank\" rel=\"noopener noreferrer\">页脚</a></li>\n</ul>","r":{"minutes":0.53,"words":159},"t":"布局","i":"object-group","O":2,"y":"a"} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "demo_markdown.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"c":["使用指南"],"g":["Markdown"],"e":"<p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>\n<p>你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>\n","r":{"minutes":3.47,"words":1041},"t":"Markdown 展示","i":"fab fa-markdown","O":2,"y":"a"} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "demo_page.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"a":"Ms.Hope","d":1577836800000,"l":"2020年1月1日","c":["使用指南"],"g":["页面配置","使用指南"],"u":true,"v":"/assets/images/cover1.jpg","e":"<p><code>more</code> 注释之前的内容被视为文章摘要。</p>\n","r":{"minutes":1.76,"words":529},"t":"页面配置","i":"file","O":3,"y":"a"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"c":["使用指南"],"r":{"minutes":0.07,"words":22},"t":"主要功能与配置演示","i":"laptop-code","y":"a"} }],
  ["/java/1.html", { loader: () => import(/* webpackChunkName: "java_1.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/java/1.html.js"), meta: {"e":"\n<h2>Java</h2>\n","r":{"minutes":0.01,"words":3},"t":"测试","y":"a"} }],
  ["/methodology/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.html", { loader: () => import(/* webpackChunkName: "methodology_单例模式.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/methodology/单例模式.html.js"), meta: {"e":"\n<p>这里是单例模式</p>\n","r":{"minutes":0.04,"words":11},"t":"单例模式","y":"a"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/java/", { loader: () => import(/* webpackChunkName: "java_index.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/java/index.html.js"), meta: {"t":"Java"} }],
  ["/methodology/", { loader: () => import(/* webpackChunkName: "methodology_index.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/methodology/index.html.js"), meta: {"t":"Methodology"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"t":"分类","I":false} }],
  ["/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "category_使用指南_index.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/category/使用指南/index.html.js"), meta: {"t":"使用指南 分类","I":false} }],
  ["/category/%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "category_指南_index.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/category/指南/index.html.js"), meta: {"t":"指南 分类","I":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"t":"标签","I":false} }],
  ["/tag/%E7%A6%81%E7%94%A8/", { loader: () => import(/* webpackChunkName: "tag_禁用_index.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/tag/禁用/index.html.js"), meta: {"t":"标签: 禁用","I":false} }],
  ["/tag/%E5%8A%A0%E5%AF%86/", { loader: () => import(/* webpackChunkName: "tag_加密_index.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/tag/加密/index.html.js"), meta: {"t":"标签: 加密","I":false} }],
  ["/tag/%E5%B8%83%E5%B1%80/", { loader: () => import(/* webpackChunkName: "tag_布局_index.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/tag/布局/index.html.js"), meta: {"t":"标签: 布局","I":false} }],
  ["/tag/markdown/", { loader: () => import(/* webpackChunkName: "tag_markdown_index.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/tag/markdown/index.html.js"), meta: {"t":"标签: Markdown","I":false} }],
  ["/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/", { loader: () => import(/* webpackChunkName: "tag_页面配置_index.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/tag/页面配置/index.html.js"), meta: {"t":"标签: 页面配置","I":false} }],
  ["/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "tag_使用指南_index.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/tag/使用指南/index.html.js"), meta: {"t":"标签: 使用指南","I":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/article/index.html.js"), meta: {"t":"文章","I":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/star/index.html.js"), meta: {"t":"星标","I":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"t":"时间轴","I":false} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
