<script setup>
import VPContent from 'vitepress/dist/client/theme-default/VPContent.vue'
import VPFooter from 'vitepress/dist/client/theme-default/VPFooter.vue'
import VPNav from 'vitepress/dist/client/theme-default/VPNav.vue'
import VPSidebar from 'vitepress/dist/client/theme-default/VPSidebar.vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div class="app">
    <VPNav />
    <VPSidebar />
    <VPContent>
      <template #home-hero>
        <div class="hero-section" v-if="frontmatter.home">
          <div class="hero-content">
            <h1 class="hero-title">欢迎来到</h1>
            <h1 class="hero-name">My Blog</h1>
            <p class="hero-description">记录学习 · 分享思考 · 持续成长</p>
            <div class="hero-actions">
              <a href="/articles/" class="hero-btn primary">开始阅读</a>
              <a href="/about" class="hero-btn secondary">了解更多</a>
            </div>
          </div>
          <div class="hero-visual">
            <div class="code-block">
              <div class="code-header">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <pre><code>console.log('Hello, World!');</code></pre>
            </div>
          </div>
        </div>
      </template>
    </VPContent>
    <VPFooter />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
}

.hero-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px;
}

.hero-title {
  font-size: 24px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  margin-bottom: 8px;
}

.hero-name {
  font-size: 64px;
  font-weight: 800;
  background: linear-gradient(120deg, var(--vp-c-brand-1) 30%, var(--vp-c-brand-3));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
  line-height: 1.2;
}

.hero-description {
  font-size: 20px;
  color: var(--vp-c-text-2);
  margin-bottom: 32px;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 16px;
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.hero-btn.primary {
  background: var(--vp-c-brand-1);
  color: white;
}

.hero-btn.primary:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-2px);
}

.hero-btn.secondary {
  border: 2px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
}

.hero-btn.secondary:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.code-block {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  max-width: 480px;
}

.code-header {
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  background: var(--vp-c-bg-alt);
  border-bottom: 1px solid var(--vp-c-divider);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #27ca40; }

.code-block pre {
  margin: 0;
  padding: 24px;
  background: transparent !important;
}

.code-block code {
  color: var(--vp-c-brand-1);
  font-size: 18px;
}

@media (max-width: 768px) {
  .hero-section {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-name {
    font-size: 48px;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-visual {
    order: -1;
  }
}
</style>