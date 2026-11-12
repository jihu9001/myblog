import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"文章列表","description":"","frontmatter":{"layout":"page","title":"文章列表"},"headers":[],"relativePath":"articles/index.md","filePath":"articles/index.md","lastUpdated":1768491943000}');
const _sfc_main = { name: "articles/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="articles-container"><div class="page-header"><h1>📚 文章列表</h1><p>记录学习与成长的技术文章和学习笔记</p></div><div class="articles-grid"><a href="/articles/getting-started" class="article-card"><div class="article-icon">🚀</div><div class="article-content"><div class="article-meta"><span class="tag tag-guide">指南</span><span class="date">2025-01-15</span></div><h3>第一篇文章</h3><p>欢迎来到我的博客！这是第一篇文章，介绍了为什么写博客以及内容规划。</p><div class="article-footer"><span class="read-time">5 分钟阅读</span><span class="arrow">→</span></div></div></a><pre><code>&lt;a href=&quot;/articles/guide&quot; class=&quot;article-card&quot;&gt;
  &lt;div class=&quot;article-icon&quot;&gt;📖&lt;/div&gt;
  &lt;div class=&quot;article-content&quot;&gt;
    &lt;div class=&quot;article-meta&quot;&gt;
      &lt;span class=&quot;tag tag-guide&quot;&gt;指南&lt;/span&gt;
      &lt;span class=&quot;date&quot;&gt;2025-01-15&lt;/span&gt;
    &lt;/div&gt;
    &lt;h3&gt;使用指南&lt;/h3&gt;
    &lt;p&gt;详细的使用说明和功能介绍，了解如何写作和构建博客。&lt;/p&gt;
    &lt;div class=&quot;article-footer&quot;&gt;
      &lt;span class=&quot;read-time&quot;&gt;8 分钟阅读&lt;/span&gt;
      &lt;span class=&quot;arrow&quot;&gt;→&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/a&gt;
</code></pre></div><div class="articles-stats"><div class="stat-item"><span class="stat-number">2</span><span class="stat-label">篇文章</span></div><div class="stat-item"><span class="stat-number">2</span><span class="stat-label">个分类</span></div><div class="stat-item"><span class="stat-number">~13</span><span class="stat-label">总阅读时间</span></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("articles/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
