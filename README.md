# 导航页 (可配置版)

基于 [ZYYO666/homepage](https://github.com/ZYYO666/homepage) 的可配置导航页，增加了后台管理面板。

**在线预览：** https://homepage-2dy.pages.dev

> 本项目支持 Cloudflare Pages（KV 联动）和 Docker（纯静态）两种部署方式，后台管理面板地址均为 `/admin/`。

## 特点

- 🎨 **前端**：与原版完全一致的导航页样式
- ⚙️ **后台**：可视化编辑所有前端配置，修改即时生效
- 📦 **纯静态**：无需服务器，可部署到 Cloudflare Pages / Vercel / Netlify / Docker
- 🎭 **5套预设主题** + 自定义主题颜色
- 🔗 **前后端联动**：后台保存 → 前端实时更新，无需重新部署

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

---

## 后台管理面板详细说明

访问 `/admin/` 进入后台管理界面。左侧为导航菜单，右侧为编辑区。

### 1️⃣ 基本信息

| 字段 | 说明 | 示例值 |
|------|------|--------|
| 名称 | 页面标题显示的名称 | `Zyyo` |
| 标签页标题 | 浏览器标签页显示的文字 | `Zyyo` |
| 自我介绍 | 首页大标题下方的介绍文字，支持 HTML | `👦 <span class='purpleText'>Full Stack</span> Developer` |
| 个性签名 | 自我介绍下方的签名，支持 HTML | `📝 The only way to do great is to love what you do.` |
| Favicon | 浏览器标签页图标路径 | `./static/img/favicon.ico` |

### 2️⃣ 位置信息

| 字段 | 说明 | 示例值 |
|------|------|--------|
| 地区 | 显示在左侧栏的地区标签 | `China-Henan` |
| 学校/机构 | 显示在左侧栏的机构标签 | `Sias` |

### 3️⃣ 标签管理

- 显示在左侧栏「关于我」下方
- 每个标签显示为一个圆角标签
- 支持增删改，点击 `+ 添加标签` 新增

### 4️⃣ 时间线

- 显示在左侧栏底部
- 每个事件包含：

| 字段 | 说明 |
|------|------|
| 事件文字 | 事件描述 |
| 日期 | 事件发生时间 |
| 活跃状态 | 是否高亮显示（绿色圆点） |

### 5️⃣ 社交链接

- 显示在首页自我介绍下方，为一组图标按钮

| 字段 | 说明 | 可选值 |
|------|------|--------|
| 名称 | 按钮提示文字 | `Github`、`QQ` 等 |
| 链接地址 | 点击跳转的 URL | `https://github.com/xxx` |
| 图标 | 图标类型 | `github`、`mail`、`qq`、`donate` 等 |
| 类型 | 交互方式 | `link`（新窗口跳转）/ `popup`（弹窗显示图片） |

内置图标类型：`github`、`mail`、`qq`、`donate`、`bilibili`、`twitter`、`telegram`、`steam`、`music`

### 6️⃣ 项目管理

- 显示在首页右侧主体区域，按分类分组

| 字段 | 说明 |
|------|------|
| 分类名称 | 项目分组标题（如 `site`、`project`） |
| 项目标题 | 卡片标题 |
| 项目描述 | 卡片副标题 |
| 链接地址 | 点击跳转的 URL |
| 图标路径 | 卡片左侧图标，如 `./static/img/i1.png` |
| 样式 | `a` = 渐变边框样式，`b` = 简洁样式 |

每个分类下可添加多个项目，支持增删分类和项目。

### 7️⃣ 技能区

- 显示在项目区域下方

| 字段 | 说明 | 示例值 |
|------|------|--------|
| PC端图片 | 桌面端显示的技能 SVG | `./static/svg/skillPc.svg` |
| 移动端图片 | 手机端显示的技能 SVG | `./static/svg/skillWap.svg` |

### 8️⃣ 图片资源

| 字段 | 说明 | 位置 |
|------|------|------|
| Logo 路径 | 左侧栏头像图片 | `./static/img/logo.png` |
| Logo边框路径 | 叠加在头像上方的装饰框 | `./static/img/logokuang.png` |
| 背景图路径 | 页面整体背景 | `./static/img/background.jpg` |

### 9️⃣ 主题样式

提供 5 套预设主题 + 14 项自定义 CSS 变量：

**预设主题：**

| 主题名 | 效果 |
|--------|------|
| theme1 (默认) | 深色背景 + 紫蓝渐变 |
| theme2 | 暗色变体 |
| theme3 | 不同配色方案 |
| theme4 | 浅色主题 |
| theme5 | 另一变体 |

**自定义变量（切换到「custom」预设后生效）：**

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `--main_bg_color` | 主背景 | `url(./static/img/background.jpg)` |
| `--main_text_color` | 主文字颜色 | `#eeeeee` |
| `--gradient` | 渐变色 | `linear-gradient(120deg, #bd34fe, #e0321b 30%, #41d1ff 60%)` |
| `--purple_text_color` | 强调色 | `#747bff` |
| `--text_bg_color` | 文字背景遮罩 | `#00000040` |
| `--item_bg_color` | 卡片背景色 | `#00000038` |
| `--item_hover_color` | 卡片悬浮色 | `#33333338` |
| `--item_left_title_color` | 左侧标题色 | `#ffffff` |
| `--item_left_text_color` | 左侧文字色 | `#ffffff` |
| `--footer_text_color` | 页脚文字色 | `#ffffff` |
| `--left_tag_item` | 左侧标签背景 | `rgb(27 42 57 / 20%)` |
| `--card_filter` | 卡片圆角 | `15px` |
| `--back_filter` | 背景遮罩圆角 | `0px` |
| `--back_filter_color` | 背景遮罩颜色 | `#00000030` |
| `--fill` | 填充色 | `#ffffff` |

### 🔟 功能开关

| 开关 | 说明 | 默认 |
|------|------|------|
| 贪吃蛇 | 页面顶部的小蛇游戏 | ✅ 开启 |
| 侧边栏 | 左侧信息栏 | ✅ 开启 |
| 技能区 | 底部技能图片展示 | ✅ 开启 |
| 加载动画 | 页面加载时的动画 | ✅ 开启 |
| 点击气泡 | 点击页面任意位置产生气泡 | ✅ 开启 |
| FPS计数器 | 右下角显示帧率 | ❌ 关闭 |

### 1️⃣1️⃣ 页脚信息

| 字段 | 说明 | 示例值 |
|------|------|--------|
| 页脚文字 | 底部版权信息 | `Zyyo © 2024 \|` |
| ICP备案号 | 备案号文字 | `豫ICP备2023015852号-1` |
| ICP链接 | 点击跳转的备案查询地址 | `https://beian.miit.gov.cn/` |

---

## 使用方式

### 后台管理

1. 访问 `/admin/` 进入后台
2. 左侧菜单选择要编辑的模块
3. 右侧修改配置
4. 点击「🚀 保存」→ 输入密码 → 配置即时生效
5. 刷新首页即可看到变化

> **Cloudflare Pages**：配置保存到 KV，前端实时读取，无需重新部署。
>
> **Docker / 其他静态平台**：自动检测到 API 不可用时，会将配置导出为 `data.json` 文件，手动替换后重启容器。

---

## Cloudflare Pages 部署（推荐）

### 前置条件

- Cloudflare 账号
- 已安装 `wrangler` CLI（`npm install -g wrangler`）

### 步骤

1. **登录 wrangler**
   ```bash
   npx wrangler login
   ```

2. **创建 KV 命名空间**
   ```bash
   curl -X POST \
     -H "Authorization: Bearer YOUR_API_TOKEN" \
     -H "Content-Type: application/json" \
     "https://api.cloudflare.com/client/v4/accounts/YOUR_ACCOUNT_ID/storage/kv/namespaces" \
     -d '{"title":"homepage_config"}'
   ```
   记录返回的 `namespace_id`。

3. **创建 Pages 项目并绑定 KV**
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
         },
         "preview": {
           "kv_namespaces": {
             "CONFIG": {"namespace_id": "YOUR_KV_NAMESPACE_ID"}
           }
         }
       }
     }'
   ```

4. **修改管理密码**（可选）
   编辑 `functions/api/config-save.js`，替换 `xianyu` 为你的密码。

5. **部署**
   ```bash
   CLOUDFLARE_ACCOUNT_ID=YOUR_ACCOUNT_ID \
   CLOUDFLARE_API_TOKEN=YOUR_API_TOKEN \
   npx wrangler pages deploy . --project-name=homepage --branch=main
   ```

6. **初始化 KV 数据**
   ```bash
   curl -X PUT \
     -H "Authorization: Bearer YOUR_API_TOKEN" \
     -H "Content-Type: application/json" \
     "https://api.cloudflare.com/client/v4/accounts/YOUR_ACCOUNT_ID/storage/kv/namespaces/YOUR_KV_NAMESPACE_ID/values/site-config" \
     --data-binary @data.json
   ```

## Docker 部署（纯静态模式）

```bash
docker compose up -d
```

Docker 部署不支持 KV 联动，配置管理方式：
- 通过后台「导出配置」下载 `data.json`
- 替换到项目根目录
- 重启容器 `docker compose restart`

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

| 路径 | 尺寸参考 | 说明 |
|------|---------|------|
| `./static/img/logo.png` | ~50KB | 左侧栏头像 |
| `./static/img/logokuang.png` | ~162KB | 头像边框（叠加在 logo 上方） |
| `./static/img/background.jpg` | ~267KB | 页面背景图（推荐 1920x1080） |
| `./static/img/favicon.ico` | ~56KB | 浏览器标签页图标 |
| `./static/img/i1.png` ~ `i6.png` | ~10KB each | 项目/站点卡片图标 |
| `./static/img/wxzsm.jpg` | ~57KB | 微信赞赏码（弹窗用） |
| `./static/img/qq.jpg` | ~449KB | QQ 二维码（弹窗用） |

## License

MIT
