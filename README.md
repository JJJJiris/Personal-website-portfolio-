# Personal website portfolio

极简浅色个人站：简历、作品（平面 / 产品 / 空间）、中英切换、简历导出 PDF。静态 HTML/CSS/JS。

## 在线地址

**https://jjjjiris.github.io/Personal-website-portfolio-/**

若打不开，请到仓库 **Settings → Pages**，把 **Build and deployment → Source** 改成 **GitHub Actions**（不要选 “Deploy from a branch”），保存后打开 **Actions** 等上一次部署变绿。

## 本地预览

入口为 **`index.html`（欢迎页，选中语言后进入 `home.html`）**。也可在项目目录执行 `python3 -m http.server 8080` 后访问 <http://localhost:8080>。

## Pages 说明

本仓库用 **GitHub Actions**（`.github/workflows/pages.yml`）发布静态文件。推送至 `main` 会自动部署。

- 仓库：<https://github.com/JJJJiris/Personal-website-portfolio->
- **不要**只访问 `https://jjjjiris.github.io`（根域名对应的是 `用户名.github.io` 这个专用仓库，不是本项目）
