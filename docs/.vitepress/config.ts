import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Battery Hub Docs',
  description: 'Battery Hub 项目文档中心',

  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    siteTitle: 'Battery Hub',

    nav: [
      { text: '首页', link: '/' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '文档首页', link: '/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/你的用户名/你的仓库名' }
    ],

    footer: {
      message: 'Battery Hub Documentation',
      copyright: 'Copyright © 2026'
    },

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    lastUpdated: {
      text: '最后更新于'
    }
  }
})