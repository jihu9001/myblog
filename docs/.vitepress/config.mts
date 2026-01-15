import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/myblog/',
  title: 'My Blog',
  description: 'Personal blog -记录学习与成长',
  head: [
    ['meta', { name: 'theme-color', content: '#646cff' }]
  ],
  themeConfig: {
    logo: '/favicon.ico',
    siteTitle: 'My Blog',
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/articles/' },
      { text: '关于', link: '/about' },
      {
        text: '标签',
        items: [
          { text: '技术', link: '/tags/tech' },
          { text: '生活', link: '/tags/life' }
        ]
      }
    ],
    sidebar: [
      {
        text: '📚 文章目录',
        items: [
          { text: '快速开始', link: '/articles/getting-started' },
          { text: '使用指南', link: '/articles/guide' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jihu9001/myblog' },
      { icon: 'twitter', link: 'https://twitter.com/jihu9001' }
    ],
    footer: {
      message: '欢迎来到我的博客',
      copyright: 'Copyright © 2025 jihu9001 | Powered by VitePress'
    },
    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },
    outline: 'deep',
    lastUpdated: true,
    docFooter: {
      prev: '← 上一篇',
      next: '下一篇 →'
    },
    notFound: {
      title: '页面未找到',
      quote: '你访问的页面不存在或已被移动',
      linkText: '返回首页',
      linkLink: '/'
    }
  },
  appearance: 'dark',
  markdown: {
    lineNumbers: true
  }
})
