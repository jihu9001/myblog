import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"第一篇文章","description":"","frontmatter":{},"headers":[],"relativePath":"articles/getting-started.md","filePath":"articles/getting-started.md","lastUpdated":1768491943000}');
const _sfc_main = { name: "articles/getting-started.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="第一篇文章" tabindex="-1">第一篇文章 <a class="header-anchor" href="#第一篇文章" aria-label="Permalink to &quot;第一篇文章&quot;">​</a></h1><p>欢迎来到我的博客！这是第一篇文章。</p><h2 id="为什么写博客" tabindex="-1">为什么写博客 <a class="header-anchor" href="#为什么写博客" aria-label="Permalink to &quot;为什么写博客&quot;">​</a></h2><ol><li><strong>巩固知识</strong> - 写作是最好的思考方式</li><li><strong>分享价值</strong> - 帮助他人，也帮助自己</li><li><strong>记录成长</strong> - 回头看时，能看到自己的进步</li></ol><h2 id="内容规划" tabindex="-1">内容规划 <a class="header-anchor" href="#内容规划" aria-label="Permalink to &quot;内容规划&quot;">​</a></h2><ul><li>技术文章：前端、后端、工具使用</li><li>学习笔记：读书笔记、课程总结</li><li>随笔杂谈：生活感悟、行业思考</li></ul><blockquote><p>&quot;写作是思考的结晶，分享是价值的传递。&quot;</p></blockquote><h2 id="开始你的阅读之旅吧" tabindex="-1">开始你的阅读之旅吧！ <a class="header-anchor" href="#开始你的阅读之旅吧" aria-label="Permalink to &quot;开始你的阅读之旅吧！&quot;">​</a></h2><p>点击右上角的<a href="/myblog/articles/getting-started.html">快速开始</a>开始浏览。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("articles/getting-started.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gettingStarted = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gettingStarted as default
};
