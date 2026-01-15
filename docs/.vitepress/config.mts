import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Blog',
  description: 'Personal blog -记录学习与成长',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    siteTitle: 'My Blog',
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/articles/' },
      { text: '关于', link: '/about' }
    ],
    sidebar: [
      {
        text: '文章目录',
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
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 jihu9001'
    },
    search: {
      provider: 'local'
    },
    outline: 'deep',
    lastUpdated: true
  },
  appearance: 'dark',
  markdown: {
    lineNumbers: true
  }
})
