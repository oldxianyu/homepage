# 导航页 (可配置版)

基于 [ZYYO666/homepage](https://github.com/ZYYO666/homepage) 的可配置导航页，增加了后台管理面板。

## 特点

- 🎨 **前端**：与原版完全一致的导航页样式
- ⚙️ **后台**：可视化编辑所有前端配置
- 📦 **纯静态**：无需服务器，可部署到 Cloudflare Pages / Vercel / Netlify
- 🎭 **5套预设主题** + 自定义主题颜色

## 后台能控制的内容

| 模块 | 可配置项 |
|------|---------|
| 基本信息 | 名称、标题、自我介绍(支持HTML)、个性签名、Favicon |
| 位置信息 | 地区、学校/机构 |
| 标签管理 | 增删改标签 |
| 时间线 | 事件文字、日期 |
| 社交链接 | 名称、图标、链接地址、类型(跳转/弹窗) |
| 项目管理 | 分类名称、项目标题/描述/链接/图标、样式(a/b) |
| 技能区 | PC端/移动端图片路径 |
| 图片资源 | Logo、Logo边框、背景图、Favicon |
| 主题样式 | 5套预设 + 14项自定义CSS变量(颜色/模糊/遮罩) |
| 功能开关 | 贪吃蛇、侧边栏、技能区、加载动画、点击气泡、FPS计数器 |
| 页脚信息 | 文字、ICP备案号、ICP链接 |

## 使用方式

### 前端

直接访问即可，前端从 `data.json` 读取所有配置。

### 后台管理

访问 `/admin/` 进入后台管理界面。

1. 编辑各项配置
2. 点击「导出配置」下载 `data.json`
3. 将 `data.json` 替换到项目根目录
4. 重新部署

### Cloudflare Pages 部署

1. 将项目推送到 GitHub
2. 在 Cloudflare Dashboard → Pages → Create a project
3. 连接 GitHub 仓库
4. 构建设置：
   - **Build command**: 留空（纯静态，无需构建）
   - **Build output directory**: `/`（根目录）
5. 部署完成

### Docker 部署

```bash
docker compose up -d
```

## 文件结构

```
├── index.html          # 前端主页
├── data.json           # 配置文件（后台导出替换此文件）
├── admin/
│   └── index.html      # 后台管理界面
├── static/
│   ├── css/
│   │   ├── style.css   # 样式
│   │   └── root.css    # 主题变量
│   ├── js/
│   │   └── app.js      # 前端逻辑
│   ├── img/            # 图片资源
│   ├── svg/            # SVG图标
│   └── fonts/          # 字体文件
├── Dockerfile
├── docker-compose.yaml
└── Caddyfile
```

## 后台账号

默认后台无需登录，直接访问 `/admin/` 即可。

如需加密码保护，可使用 Cloudflare Pages 的 Access 功能或在 Caddy/Nginx 层加 Basic Auth。
