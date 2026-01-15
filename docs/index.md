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
    <div class="section-header">
      <h2>📝 最新文章</h2>
      <a href="/articles/" class="view-all">查看全部 →</a>
    </div>
    <div class="posts-grid">
      <a href="/articles/getting-started" class="post-card">
        <div class="card-header">
          <span class="tag tag-guide">指南</span>
          <span class="date">2025-01-15</span>
        </div>
        <h3>快速开始</h3>
        <p>了解如何快速上手使用本博客系统，从零开始构建你的知识库</p>
        <div class="card-footer">
          <span class="read-time">5 分钟阅读</span>
        </div>
      </a>
      <a href="/articles/guide" class="post-card">
        <div class="card-header">
          <span class="tag tag-guide">指南</span>
          <span class="date">2025-01-15</span>
        </div>
        <h3>使用指南</h3>
        <p>详细的使用说明和功能介绍，掌握所有博客写作技巧</p>
        <div class="card-footer">
          <span class="read-time">8 分钟阅读</span>
        </div>
      </a>
    </div>
  </div>

  <div class="stats-section">
    <div class="stat-card">
      <div class="stat-number">2</div>
      <div class="stat-label">篇文章</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">2</div>
      <div class="stat-label">个分类</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">~13</div>
      <div class="stat-label">分钟阅读</div>
    </div>
  </div>
</div>

<style>
.home-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 2rem 4rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.section-header h2 {
  font-size: 1.5rem;
  margin: 0;
  color: var(--vp-c-text-1);
}

.view-all {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition-quick);
}

.view-all:hover {
  transform: translateX(4px);
}

.recent-posts {
  margin-top: 1rem;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

.post-card {
  padding: 1.5rem;
  border-radius: var(--card-radius);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: var(--transition-spring);
  text-decoration: none;
  display: flex;
  flex-direction: column;
}

.post-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--card-shadow);
  border-color: var(--vp-c-brand);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.tag {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.tag-guide {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
}

.tag-tech {
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
}

.tag-life {
  background: rgba(236, 72, 153, 0.15);
  color: #ec4899;
}

.post-card .date {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}

.post-card h3 {
  margin: 0 0 0.75rem;
  font-size: 1.2rem;
  color: var(--vp-c-text-1);
}

.post-card p {
  margin: 0 0 1.25rem;
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  flex-grow: 1;
}

.card-footer {
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}

.read-time {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}

.stats-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

.stat-card {
  text-align: center;
  padding: 1.5rem;
  border-radius: var(--card-radius);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: var(--transition-spring);
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--card-shadow);
  border-color: var(--vp-c-brand);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(120deg, var(--vp-c-brand-1), var(--vp-c-brand-3));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  margin-top: 0.5rem;
}

@media (max-width: 640px) {
  .home-container {
    padding: 1.5rem 1rem 3rem;
  }

  .posts-grid {
    grid-template-columns: 1fr;
  }

  .stats-section {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .stat-card {
    padding: 1.25rem;
  }

  .stat-number {
    font-size: 2rem;
  }
}
</style>
