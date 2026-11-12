import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"研报归档","description":"市场研究报告归档 · 图文版（内联 SVG 图表）","frontmatter":{"title":"研报归档","description":"市场研究报告归档 · 图文版（内联 SVG 图表）"},"headers":[],"relativePath":"reports/index.md","filePath":"reports/index.md","lastUpdated":null}');
const _sfc_main = { name: "reports/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="研报归档" tabindex="-1">研报归档 <a class="header-anchor" href="#研报归档" aria-label="Permalink to &quot;研报归档&quot;">​</a></h1><p>本目录存放产出的市场研究报告，均为<strong>图文版 HTML</strong>（内联 SVG 图表，需浏览器打开；可直接下载离线查看）。 源码同步归档于 <code>jihu9001/daily_stock_analysis</code> → <code>docs/analysis/</code>。</p><hr><h2 id="_2026-11-12-·-a股国家队买卖研判" tabindex="-1">2026-11-12 · A股国家队买卖研判 <a class="header-anchor" href="#_2026-11-12-·-a股国家队买卖研判" aria-label="Permalink to &quot;2026-11-12 · A股国家队买卖研判&quot;">​</a></h2><p><strong>核心结论</strong>：近一周国家队是净买入方，但最近两个交易日已转为净卖出。</p><table tabindex="0"><thead><tr><th>指标</th><th>读数</th></tr></thead><tbody><tr><td>累计买入（9/28起）</td><td>股票ETF连续26个交易日净流入约 <strong>+6,215 亿元</strong>（其中宽基约 6,000 亿）</td></tr><tr><td>汇金口径 17 只宽基篮子</td><td>近20日净申购 <strong>+4,299 亿</strong>，近5日 <strong>+458 亿</strong></td></tr><tr><td>最近两日</td><td>11/10 宽基净赎回 <strong>-41.2 亿</strong>、11/11 <strong>-35.8 亿</strong>，终结连续26日净流入</td></tr><tr><td>11/10 单日减仓</td><td>华泰柏瑞沪深300ETF -13.48亿、南方中证500ETF -9.84亿、易方达创业板ETF -9.07亿</td></tr><tr><td>同日加仓</td><td>黄金股ETF永赢 +9.58亿、易方达科创板50ETF +6.46亿、红利低波50ETF +5.82亿</td></tr><tr><td>反弹以来（10/30=100）</td><td>科创50 <strong>+14.1%</strong>、中证1000 +7.3%、中证500 +6.4%；沪深300 仅 +1.9%、上证50 +1.2%</td></tr></tbody></table><p><strong>报告结构（10 章 / 13 张图）</strong>：执行摘要 · 主体与口径 · 时间线 · 标的每日变化（8 大宽基 61 个交易日逐日涨跌）· 买入侧五条证据链 · 卖出侧与反面证据 · 综合判断（三层稳市架构）· 情景推演 · 跟踪清单 · 风险与来源。</p><p><strong>数据源</strong>：交易所行情日线（8 个标的 × 61 个交易日）+ 财联社盯盘 / 中国基金报 / 财新 / 澎湃 / 上证报等公开披露；样本截至 <strong>2026-11-12 13:40 盘中</strong>。</p><div class="info custom-block"><p class="custom-block-title">打开方式</p><p>下方为独立 HTML 图文版，含内联 SVG 图表（站内 Markdown 渲染无法承载图表本身）。在新窗口打开可看到完整图表。</p></div><p><a href="/myblog/reports/2026-11-12-A%E8%82%A1%E5%9B%BD%E5%AE%B6%E9%98%9F%E4%B9%B0%E5%8D%96%E7%A0%94%E5%88%A4.html" target="_blank">📄 打开完整图文报告（独立 HTML，新窗口）</a></p><p><a href="https://github.com/jihu9001/daily_stock_analysis/tree/main/docs/analysis" target="_blank">📂 查看源码归档（GitHub）</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("reports/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
