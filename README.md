# RichFia

一个可运行的「RichFia 情侣有趣产品灵感收集网页」静态版本，用于收集适合情侣账号、短视频选题和自有品牌参考的产品灵感。

## 已实现

- 产品灵感卡片：图片、名称、简短亮点、来源链接、标签。
- 分类筛选：情侣互动、搞笑礼物、奇怪但有用、适合拍视频、可做自有品牌参考。
- 关键词搜索：支持按名称、分类、亮点和标签搜索。
- 一键收藏：收藏状态保存在当前浏览器的 `localStorage`。
- 灵感备注：可为每个产品记录视频拍法或品牌化改造想法，内容同样保存在 `localStorage`。
- 自动搜集预留结构：页面底部展示了可接入后端/第三方搜索 API 的 product schema。

## 本地运行

这是一个无构建依赖的静态页面，可任选一种方式运行：

```bash
python3 -m http.server 4173
```

然后打开 <http://localhost:4173>。

也可以直接在浏览器打开 `index.html`。


## GitHub Pages 预览部署

本仓库已加入 GitHub Pages Actions 工作流：`.github/workflows/pages.yml`。推送到 GitHub 后，最少需要：

1. 打开 GitHub 仓库的 **Settings → Pages**。
2. 在 **Build and deployment → Source** 里选择 **GitHub Actions**。
3. 回到 **Actions**，运行或等待 `Deploy RichFia static site to GitHub Pages` 完成。
4. 打开该 workflow 生成的 `github-pages` 链接预览网站。

## 后续接入自动搜集/搜索建议

当前版本先用内置示例数据跑通页面和交互。要接入真实互联网产品数据，建议：

1. 新增后端 API，例如 `GET /api/products?keyword=情侣礼物&category=搞笑礼物`。
2. 后端定时调用商品搜索 API、联盟 API、内容平台 API，或合规爬虫服务。
3. 将外部数据统一转换为前端使用的结构：

```js
{
  id: "unique-product-id",
  name: "产品名称",
  category: "情侣互动",
  imageUrl: "https://...",
  highlight: "一句话亮点",
  sourceName: "来源站点",
  sourceUrl: "https://...",
  tags: ["拍视频", "礼物", "反差感"]
}
```

4. 前端把 `app.js` 中的 `products` 常量替换为 `fetch('/api/products')` 的返回结果即可。

请注意：真实抓取应遵守目标网站 robots.txt、服务条款、版权要求和当地法律法规。
