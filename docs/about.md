---
layout: page
title: 关于我
---

<div class="about-container">
  <div class="profile-section">
    <div class="profile-card">
      <div class="avatar">
        <img src="/favicon.ico" alt="jihu9001" />
      </div>
      <h1>jihu9001</h1>
      <p class="bio">热爱技术的开发者 | 终身学习者</p>
      <div class="social-links">
        <a href="https://github.com/jihu9001" target="_blank" class="social-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="mailto:jihu9001@example.com" class="social-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </a>
      </div>
    </div>
  </div>

  <div class="content-section">
    <section class="about-intro">
      <h2>👋 你好，我是 jihu9001</h2>
      <p>
        这是一个记录我学习与成长的个人博客。在这里，我会分享技术笔记、编程心得、生活感悟，
        希望能够帮助到同样热爱技术的你。
      </p>
    </section>

    <section class="topics-section">
      <h3>📚 我会分享</h3>
      <div class="topics-grid">
        <div class="topic-card">
          <span class="topic-icon">📚</span>
          <h4>技术学习笔记</h4>
          <p>前端、后端、数据库等各类技术栈的学习记录</p>
        </div>
        <div class="topic-card">
          <span class="topic-icon">💡</span>
          <h4>编程心得与经验</h4>
          <p>开发过程中总结的最佳实践和问题解决方案</p>
        </div>
        <div class="topic-card">
          <span class="topic-icon">🌟</span>
          <h4>有趣的发现与思考</h4>
          <p>行业动态、新工具、新技术的探索与思考</p>
        </div>
        <div class="topic-card">
          <span class="topic-icon">📖</span>
          <h4>读书笔记</h4>
          <p>技术书籍和个人成长类书籍的阅读总结</p>
        </div>
      </div>
    </section>

    <section class="tech-section">
      <h3>🛠️ 技术栈</h3>
      <div class="tech-grid">
        <div class="tech-item">
          <span class="tech-name">Vue.js</span>
          <div class="tech-bar">
            <div class="tech-progress" style="width: 85%"></div>
          </div>
        </div>
        <div class="tech-item">
          <span class="tech-name">TypeScript</span>
          <div class="tech-bar">
            <div class="tech-progress" style="width: 75%"></div>
          </div>
        </div>
        <div class="tech-item">
          <span class="tech-name">Node.js</span>
          <div class="tech-bar">
            <div class="tech-progress" style="width: 70%"></div>
          </div>
        </div>
        <div class="tech-item">
          <span class="tech-name">VitePress</span>
          <div class="tech-bar">
            <div class="tech-progress" style="width: 90%"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="quote-section">
      <blockquote>
        "Keep learning, keep growing."
      </blockquote>
    </section>
  </div>
</div>

<style>
.about-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 2rem 4rem;
}

.profile-section {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
}

.profile-card {
  text-align: center;
  padding: 2.5rem 3rem;
  border-radius: var(--card-radius);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: var(--transition-spring);
}

.profile-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--card-shadow);
  border-color: var(--vp-c-brand);
}

.avatar {
  width: 100px;
  height: 100px;
  margin: 0 auto 1.25rem;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--vp-c-brand);
  padding: 4px;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.profile-card h1 {
  margin: 0 0 0.5rem;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.bio {
  margin: 0 0 1.25rem;
  color: var(--vp-c-text-2);
  font-size: 1rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  transition: var(--transition-quick);
}

.social-link:hover {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
  transform: translateY(-2px);
}

.content-section {
  max-width: 800px;
  margin: 0 auto;
}

.content-section section {
  margin-bottom: 2.5rem;
}

.about-intro h2 {
  margin: 0 0 1rem;
  font-size: 1.5rem;
  color: var(--vp-c-text-1);
}

.about-intro p {
  margin: 0;
  line-height: 1.8;
  color: var(--vp-c-text-2);
  font-size: 1.05rem;
}

.topics-section h3,
.tech-section h3 {
  margin: 0 0 1.25rem;
  font-size: 1.25rem;
  color: var(--vp-c-text-1);
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.25rem;
}

.topic-card {
  padding: 1.5rem;
  border-radius: var(--card-radius);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: var(--transition-spring);
  text-align: center;
}

.topic-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--card-shadow);
  border-color: var(--vp-c-brand);
}

.topic-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.75rem;
}

.topic-card h4 {
  margin: 0 0 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.topic-card p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

.tech-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.tech-name {
  min-width: 100px;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.tech-bar {
  flex: 1;
  height: 8px;
  background: var(--vp-c-bg-alt);
  border-radius: 4px;
  overflow: hidden;
}

.tech-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-3));
  border-radius: 4px;
  transition: width 1s ease;
}

.quote-section {
  text-align: center;
  padding: 2rem;
  margin-top: 3rem;
}

.quote-section blockquote {
  margin: 0;
  font-size: 1.25rem;
  font-style: italic;
  color: var(--vp-c-text-2);
  border: none;
  background: transparent;
}

@media (max-width: 640px) {
  .about-container {
    padding: 1.5rem 1rem 3rem;
  }

  .profile-card {
    padding: 2rem 1.5rem;
  }

  .profile-card h1 {
    font-size: 1.5rem;
  }

  .topics-grid {
    grid-template-columns: 1fr;
  }

  .tech-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .tech-name {
    min-width: unset;
  }
}
</style>
