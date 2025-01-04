import comp from "D:/my-docs/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"icon\":\"home\",\"heroImage\":\"src\\\\.vuepress\\\\public\\\\logo.svg\",\"heroText\":\"Xing's Blog\",\"tagline\":\"天道酬勤，世界上没有真正的运气，所谓的运气就是你付出足够的努力，然后得到回报✨\",\"features\":[{\"title\":\"Java\",\"icon\":\"fa-brands fa-java\",\"details\":\"java新特性、JVM\",\"link\":\"/java/\"},{\"title\":\"Python\",\"icon\":\"fa-brands fa-python\",\"details\":\"python基础、量化\",\"link\":\"/python/\"},{\"title\":\"Go\",\"icon\":\"fa-brands fa-golang\",\"details\":\"go语言基础\",\"link\":\"/go/\"},{\"title\":\"架构\",\"icon\":\"fa-solid fa-pen-ruler\",\"details\":\"理论知识、实战场景\",\"link\":\"/architecture/\"},{\"title\":\"方法论\",\"icon\":\"fa-solid fa-book\",\"details\":\"基本功、通用方法沉淀\",\"link\":\"/methodology/\"},{\"title\":\"数据库\",\"icon\":\"fa-solid fa-database\",\"details\":\"MySQL、Redis\",\"link\":\"/db/\"},{\"title\":\"消息队列\",\"icon\":\"fa-solid fa-rocket\",\"details\":\"Kafka、RocketMQ\",\"link\":\"/mq/\"},{\"title\":\"Spring\",\"icon\":\"fa-solid fa-leaf\",\"details\":\"Spring、Spring Boot、Spring Cloud\",\"link\":\"/spring/\"}],\"copyright\":false,\"footer\":\"MIT Licensed | Copyright © 2025-present Xing\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.74,\"words\":221},\"filePathRelative\":\"README.md\",\"excerpt\":\"<!-- markdownlint-disable -->\"}")
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
