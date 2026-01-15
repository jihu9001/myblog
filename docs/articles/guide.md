# 使用指南

## 快速开始

```bash
# 启动本地开发服务器
npm run docs:dev

# 构建静态文件
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 写作规范

### 新建文章

在 `docs/articles/` 目录下新建 `.md` 文件：

```md
---
title: 文章标题
date: 2025-01-15
description: 文章描述
---

# 文章标题

正文内容...
```

### 目录结构

```
docs/
├── articles/
│   ├── article-1.md
│   └── article-2.md
├── about.md
├── index.md
└── .vitepress/
    ├── config.mts
    └── theme/
```

## Markdown 语法

VitePress 支持完整的 Markdown 语法：

- **粗体** `**粗体**`
- *斜体* `*斜体*`
- ~~删除线~~ `~~删除线~~`
- 行内代码 <code>`[链接](url)`</code>
- `行内代码`
- ```代码块```
