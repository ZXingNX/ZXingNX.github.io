import comp from "D:/my-docs/src/.vuepress/.temp/pages/designPattern/单例模式.html.vue"
const data = JSON.parse("{\"path\":\"/designPattern/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.html\",\"title\":\"单例模式\",\"lang\":\"zh-CN\",\"frontmatter\":{\"gitInclude\":[],\"description\":\"单例模式 这里是单例模式\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/designPattern/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Xing's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"单例模式\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"单例模式 这里是单例模式\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"单例模式\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Xing\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":11},\"filePathRelative\":\"designPattern/单例模式.md\",\"excerpt\":\"\\n<p>这里是单例模式</p>\\n\",\"autoDesc\":true}")
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
