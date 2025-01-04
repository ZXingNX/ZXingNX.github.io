export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/intro.html", { loader: () => import(/* webpackChunkName: "intro.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/intro.html.js"), meta: {"e":"\n<p>将你的个人介绍和档案放置在此处。</p>\n","r":{"minutes":0.07,"words":21},"t":"介绍页","i":"circle-info","y":"a"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"Home","i":"home"} }],
  ["/java/1.html", { loader: () => import(/* webpackChunkName: "java_1.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/java/1.html.js"), meta: {"e":"\n<h2>Java</h2>\n","r":{"minutes":0.01,"words":3},"t":"测试","y":"a"} }],
  ["/methodology/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.html", { loader: () => import(/* webpackChunkName: "methodology_单例模式.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/methodology/单例模式.html.js"), meta: {"e":"\n<p>这里是单例模式</p>\n","r":{"minutes":0.04,"words":11},"t":"单例模式","y":"a"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/java/", { loader: () => import(/* webpackChunkName: "java_index.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/java/index.html.js"), meta: {"t":"Java"} }],
  ["/methodology/", { loader: () => import(/* webpackChunkName: "methodology_index.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/methodology/index.html.js"), meta: {"t":"Methodology"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"t":"分类","I":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"D:/VsCode-Project/blog/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"t":"标签","I":false} }],
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
