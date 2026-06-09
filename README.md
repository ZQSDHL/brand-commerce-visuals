# 林杰镜｜跨境品牌视觉作品集

一个基于 Vite + React 构建的单页个人作品集网站，用于展示品牌视觉、电商视觉、商业影像、三维视觉与跨境平台相关项目。

## 项目特点

- 单页滚动式作品集结构
- 作品分类筛选
- 作品详情弹层展示
- 本地图片接入
- 适合部署到 Netlify / Vercel
- 已补充 SEO 基础信息与 favicon

## 本地运行

先安装依赖：

```bash
npm install
```

启动开发环境：

```bash
npm run dev
```

## 打包

```bash
npm run build
```

打包完成后会生成 `dist` 目录。

## 本地预览打包结果

```bash
npm run preview
```

## 部署

### Netlify

本项目已包含 `netlify.toml` 配置文件。

可选方式：

1. 本地执行 `npm run build`
2. 将生成的 `dist` 文件夹拖到 Netlify 后台部署

或：

1. 将项目推送到 GitHub
2. 在 Netlify 中连接仓库
3. 自动构建发布

### Vercel

本项目已包含 `vercel.json` 配置文件。

可选方式：

1. 将项目推送到 GitHub
2. 在 Vercel 中导入仓库
3. 平台会自动识别并部署

## 项目结构

```text
src/
  App.jsx
  main.jsx
  styles.css
作品图/
favicon.svg
index.html
netlify.toml
vercel.json
```

## 个人信息

- 姓名：林杰镜
- 方向：品牌视觉策划 / 电商视觉设计师
- 邮箱：3439520070@qq.com

## 后续可自行修改内容

你可以继续替换以下内容：

- `src/App.jsx` 中的作品标题、文案、年份、分类
- 本地作品图片
- 联系方式
- 页面品牌名与介绍文案

## License

仅供个人作品集展示使用。
