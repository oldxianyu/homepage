# 导航页 (可配置版)

基于 [ZYYO666/homepage](https://github.com/ZYYO666/homepage) 的可配置导航页，增加了后台管理面板。

**在线预览：** https://homepage-2dy.pages.dev

## 特点

- 🎨 **前端**：与原版完全一致的导航页样式
- ⚙️ **后台**：可视化编辑所有前端配置，修改即时生效
- 📦 **纯静态**：部署在 Cloudflare Pages，配置存储在 KV
- 🎭 **5套预设主题** + 自定义主题颜色
- 🔗 **前后端联动**：后台保存配置 → 前端实时更新，无需重新部署

## 功能架构

```
浏览器 → Cloudflare Pages (静态页面)
         ↕
         Cloudflare Functions (/api/config)
         ↕
         Cloudflare KV (配置存储)
```

- **前端**：每次访问通过 `/api/config` 从 KV 读取最新配置
- **后台**：修改配置后通过 `/api/config-save` 写入 KV，前端即时生效
- **密码保护**：写入操作需要输入管理密码

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

### 后台管理

访问 https://homepage-2dy.pages.dev/admin/ 进入后台管理界面。

1. 编辑各项配置
2. 点击「🚀 保存到服务器」
3. 输入管理密码（默认：`xianyu`）
4. 前端即时生效，刷新首页即可看到变化

也可以「📥 导出配置」下载 `data.json` 文件作为备份。

## Cloudflare Pages 部署

### 前置条件

- Cloudflare 账号
- 已安装 `wrangler` CLI

### 步骤

1. **创建 KV 命名空间**
   ```bash
   curl -X POST \
     -H "Authorization: Bearer YOUR_API_TOKEN" \
     -H "Content-Type: application/json" \
     "https://api.cloudflare.com/client/v4/accounts/YOUR_ACCOUNT_ID/storage/kv/namespaces" \
     -d '{"title":"homepage_config"}'
   ```

2. **绑定 KV 到 Pages 项目**
   ```bash
   curl -X PATCH \
     -H "Authorization: Bearer YOUR_API_TOKEN" \
     -H "Content-Type: application/json" \
     "https://api.cloudflare.com/client/v4/accounts/YOUR_ACCOUNT_ID/pages/projects/homepage" \
     -d '{
       "deployment_configs": {
         "production": {
           "kv_namespaces": {
             "CONFIG": {"namespace_id": "YOUR_KV_NAMESPACE_ID"}
           }
         }
       }
     }'
   ```

3. **修改管理密码**
   编辑 `functions/api/config-save.js`，替换 `xianyu` 为你的密码。

4. **部署**
   ```bash
   CLOUDFLARE_ACCOUNT_ID=YOUR_ACCOUNT_ID \
   CLOUDFLARE_API_TOKEN=YOUR_API_TOKEN \
   npx wrangler pages deploy . --project-name=homepage --branch=main
   ```

### Docker 部署（无 KV 功能）

```bash
docker compose up -d
```

Docker 部署仅支持静态配置，需手动编辑 `data.json` 后重新构建。

## 文件结构

```
├── index.html              # 前端主页
├── data.json               # 默认配置（KV 为空时的 fallback）
├── admin/
│   └── index.html          # 后台管理界面
├── functions/
│   └── api/
│       ├── config.js       # GET /api/config（读取配置）
│       └── config-save.js  # PUT /api/config-save（保存配置）
├── static/
│   ├── css/
│   │   ├── style.css       # 样式
│   │   └── root.css        # 主题变量
│   ├── js/
│   │   └── app.js          # 前端逻辑
│   ├── img/                # 图片资源
│   ├── svg/                # SVG 图标
│   └── fonts/              # 字体文件
├── Dockerfile
├── docker-compose.yaml
└── Caddyfile
```

## 图片资源说明

| 路径 | 说明 |
|------|------|
| `./static/img/logo.png` | 左侧栏头像 |
| `./static/img/logokuang.png` | 头像边框（叠加在 logo 上方） |
| `./static/img/background.jpg` | 页面背景图 |
| `./static/img/favicon.ico` | 浏览器标签页图标 |
| `./static/img/i1.png` ~ `i6.png` | 项目/站点卡片图标 |

## License

MIT
