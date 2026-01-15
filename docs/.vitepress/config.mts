import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Blog',
  description: 'Personal blog',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Articles', link: '/articles/' },
      { text: 'About', link: '/about' }
    ],
    sidebar: [
      {
        text: 'Articles',
        items: [
          { text: 'Getting Started', link: '/articles/getting-started' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jihu9001/myblog' }
    ]
  }
})
