import comp from "D:/VsCode-Project/blog/src/.vuepress/.temp/pages/intro.html.vue"
const data = JSON.parse("{\"path\":\"/intro.html\",\"title\":\"介绍页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"circle-info\",\"gitInclude\":[],\"description\":\"介绍页 将你的个人介绍和档案放置在此处。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/ZXingNX/intro.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Xing's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"介绍页\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"介绍页 将你的个人介绍和档案放置在此处。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"介绍页\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Xing\\\",\\\"url\\\":\\\"https://github.com/ZXingNX\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":21},\"filePathRelative\":\"intro.md\",\"excerpt\":\"\\n<p>将你的个人介绍和档案放置在此处。</p>\\n\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
