import comp from "D:/VsCode-Project/blog/src/.vuepress/.temp/pages/methodology/单例模式.html.vue"
const data = JSON.parse("{\"path\":\"/methodology/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.html\",\"title\":\"单例模式\",\"lang\":\"zh-CN\",\"frontmatter\":{\"gitInclude\":[],\"description\":\"单例模式\"},\"headers\":[],\"readingTime\":{\"minutes\":0.01,\"words\":4},\"filePathRelative\":\"methodology/单例模式.md\",\"excerpt\":\"\\n\",\"autoDesc\":true}")
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
