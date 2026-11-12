import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"欢迎来到","text":"jihu9001 的博客","tagline":"记录学习 · 分享思考 · 持续成长","actions":[{"theme":"brand","text":"🚀 开始阅读","link":"/articles/getting-started"},{"theme":"alt","text":"📖 了解更多","link":"/about"}]},"features":[{"title":"💻 技术笔记","details":"记录编程学习过程中的知识点与心得体会，包括前端、后端、数据库等技术栈","link":"/articles/","linkText":"浏览文章 →"},{"title":"✍️ 文章随笔","details":"分享生活感悟与思考，建立个人知识库，记录成长足迹","link":"/about","linkText":"关于我 →"},{"title":"🚀 持续更新","details":"定期更新，保持学习与成长的节奏，不断探索新技术","link":"https://github.com/jihu9001/myblog","linkText":"查看源码 →"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1768491943000}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="home-container"><div class="recent-posts"><div class="section-header"><h2>📝 最新文章</h2><a href="/articles/" class="view-all">查看全部 →</a></div><div class="posts-grid"><a href="/articles/getting-started" class="post-card"><div class="card-header"><span class="tag tag-guide">指南</span><span class="date">2025-01-15</span></div><h3>快速开始</h3><p>了解如何快速上手使用本博客系统，从零开始构建你的知识库</p><div class="card-footer"><span class="read-time">5 分钟阅读</span></div></a><a href="/articles/guide" class="post-card"><div class="card-header"><span class="tag tag-guide">指南</span><span class="date">2025-01-15</span></div><h3>使用指南</h3><p>详细的使用说明和功能介绍，掌握所有博客写作技巧</p><div class="card-footer"><span class="read-time">8 分钟阅读</span></div></a><a href="/reports/" class="post-card"><div class="card-header"><span class="tag tag-report">研报</span><span class="date">2026-11-12</span></div><h3>A股国家队买卖研判</h3><p>近一周国家队 ETF 买卖行为：连续26个交易日净流入约6,215亿元后，连续两日转为净赎回；含8大宽基标的逐日涨跌与指数—资金背离</p><div class="card-footer"><span class="read-time">25 分钟阅读 · 13 张图</span></div></a></div></div><div class="stats-section"><div class="stat-card"><div class="stat-number">3</div><div class="stat-label">篇文章</div></div><div class="stat-card"><div class="stat-number">2</div><div class="stat-label">个分类</div></div><div class="stat-card"><div class="stat-number">~38</div><div class="stat-label">分钟阅读</div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
