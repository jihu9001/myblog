---
layout: home

hero:
  name: "欢迎来到"
  text: "jihu9001 的博客"
  tagline: 记录学习 · 分享思考 · 持续成长
  image:
    src: /favicon.ico
    alt: Blog Logo
  actions:
    - theme: brand
      text: 🚀 开始阅读
      link: /articles/getting-started
    - theme: alt
      text: 📖 了解更多
      link: /about

features:
  - title: 💻 技术笔记
    details: 记录编程学习过程中的知识点与心得体会，包括前端、后端、数据库等技术栈
    link: /articles/
    linkText: 浏览文章 →
  - title: ✍️ 文章随笔
    details: 分享生活感悟与思考，建立个人知识库，记录成长足迹
    link: /about
    linkText: 关于我 →
  - title: 🚀 持续更新
    details: 定期更新，保持学习与成长的节奏，不断探索新技术
    link: https://github.com/jihu9001/myblog
    linkText: 查看源码 →

---

<div class="home-container">
  <div class="recent-posts">
    <h2>📝 最新文章</h2>
    <div class="posts-grid">
      <a href="/articles/getting-started" class="post-card">
        <h3>快速开始</h3>
        <p>了解如何快速上手使用本博客系统</p>
        <span class="date">2025-01-15</span>
      </a>
      <a href="/articles/guide" class="post-card">
        <h3>使用指南</h3>
        <p>详细的使用说明和功能介绍</p>
        <span class="date">2025-01-15</span>
      </a>
    </div>
  </div>
</div>

<style>
.home-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 2rem 4rem;
}

.recent-posts {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

.recent-posts h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-1);
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.post-card {
  padding: 1.25rem;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
  text-decoration: none;
}

.post-card:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-2px);
  box-shadow: var(--vp-shadow-lg);
}

.post-card h3 {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
}

.post-card p {
  margin: 0 0 0.75rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.post-card .date {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
}
</style>
