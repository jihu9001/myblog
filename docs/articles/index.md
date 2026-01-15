---
layout: page
title: 文章列表
---

<div class="articles-container">
  <div class="page-header">
    <h1>📚 文章列表</h1>
    <p>记录学习与成长的技术文章和学习笔记</p>
  </div>

  <div class="articles-grid">
    <a href="/articles/getting-started" class="article-card">
      <div class="article-icon">🚀</div>
      <div class="article-content">
        <div class="article-meta">
          <span class="tag tag-guide">指南</span>
          <span class="date">2025-01-15</span>
        </div>
        <h3>第一篇文章</h3>
        <p>欢迎来到我的博客！这是第一篇文章，介绍了为什么写博客以及内容规划。</p>
        <div class="article-footer">
          <span class="read-time">5 分钟阅读</span>
          <span class="arrow">→</span>
        </div>
      </div>
    </a>

    <a href="/articles/guide" class="article-card">
      <div class="article-icon">📖</div>
      <div class="article-content">
        <div class="article-meta">
          <span class="tag tag-guide">指南</span>
          <span class="date">2025-01-15</span>
        </div>
        <h3>使用指南</h3>
        <p>详细的使用说明和功能介绍，了解如何写作和构建博客。</p>
        <div class="article-footer">
          <span class="read-time">8 分钟阅读</span>
          <span class="arrow">→</span>
        </div>
      </div>
    </a>
  </div>

  <div class="articles-stats">
    <div class="stat-item">
      <span class="stat-number">2</span>
      <span class="stat-label">篇文章</span>
    </div>
    <div class="stat-item">
      <span class="stat-number">2</span>
      <span class="stat-label">个分类</span>
    </div>
    <div class="stat-item">
      <span class="stat-number">~13</span>
      <span class="stat-label">总阅读时间</span>
    </div>
  </div>
</div>

<style>
.articles-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 2rem 4rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  margin: 0 0 0.75rem;
  font-size: 2rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.page-header p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 1.1rem;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.article-card {
  display: flex;
  gap: 1.25rem;
  padding: 1.5rem;
  border-radius: var(--card-radius);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: var(--transition-spring);
  text-decoration: none;
}

.article-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--card-shadow);
  border-color: var(--vp-c-brand);
}

.article-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-brand-soft);
  border-radius: 12px;
}

.article-content {
  flex: 1;
  min-width: 0;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
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

.article-content .date {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}

.article-content h3 {
  margin: 0 0 0.5rem;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.article-content p {
  margin: 0 0 1rem;
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.read-time {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}

.arrow {
  color: var(--vp-c-brand);
  font-weight: 600;
  transition: var(--transition-quick);
}

.article-card:hover .arrow {
  transform: translateX(4px);
}

.articles-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

.stat-item {
  text-align: center;
  padding: 1.5rem;
  border-radius: var(--card-radius);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: var(--transition-spring);
}

.stat-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--card-shadow);
  border-color: var(--vp-c-brand);
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(120deg, var(--vp-c-brand-1), var(--vp-c-brand-3));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
}

@media (max-width: 640px) {
  .articles-container {
    padding: 1.5rem 1rem 3rem;
  }

  .page-header h1 {
    font-size: 1.75rem;
  }

  .articles-grid {
    grid-template-columns: 1fr;
  }

  .article-card {
    flex-direction: column;
    gap: 1rem;
  }

  .article-icon {
    width: 100%;
  }

  .articles-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
