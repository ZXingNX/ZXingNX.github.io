import comp from "D:/VsCode-Project/blog/src/.vuepress/.temp/pages/java/1.html.vue"
const data = JSON.parse("{\"path\":\"/java/1.html\",\"title\":\"测试\",\"lang\":\"zh-CN\",\"frontmatter\":{\"gitInclude\":[],\"description\":\"测试 Java\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/AHawthorn/java/1.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Xing's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"测试\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"测试 Java\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"测试\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Xing\\\",\\\"url\\\":\\\"https://github.com/AHawthorn\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Java\",\"slug\":\"java\",\"link\":\"#java\",\"children\":[]}],\"readingTime\":{\"minutes\":0.01,\"words\":3},\"filePathRelative\":\"java/1.md\",\"excerpt\":\"\\n<h2>Java</h2>\\n\",\"autoDesc\":true}")
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
