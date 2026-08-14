<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Platform](https://img.shields.io/badge/platform-Web-brightgreen.svg)
![Dependencies](https://img.shields.io/badge/dependencies-None-lightgrey.svg)

**🎯 为追求极致体验而生的前端智能跳转神器**

_无需后端 ·静态页面· 开箱即用 · 炫酷特效_

[📖 详细教程](https://blog.wufeng.me/archives/tiao-zhuan-ye-mian-xiang-mu) | [💬 交流群](https://t.me/kqxw_chat) | [⭐ Star](https://github.com/aklibk86-dev/jump-page)

</div>

---

## ✨ 核心特性

### 🚀 智能跳转

- **⚡ 多域名测速**：内置测速，自动选择最快的目标站点
- **🎯 精准跳转**：支持 Hash 路径深度跳转，保留完整页面路径
- **🔄 备用机制**：多域名容错，确保跳转成功率

### 🎨 视觉体验

- **✨ 动态粒子背景**：Canvas 粒子飞舞，科技感爆棚
- **🔮 玻璃拟态 UI**：半透明+模糊效果，潮流设计语言
- **📱 响应式布局**：完美适配桌面、平板、手机
- **🎭 多主题支持**：支持5种全新配色方案切换
- **🎨 自定义主题**：支持个性化颜色和样式定制

### 🛡️ 用户体验

- **📱 防红功能**：智能检测微信/QQ，自动引导外部浏览器
- **⏱️ 倒计时显示**：大数字倒计时 + 进度条，紧张感拉满

### 🛠️ 技术优势

- **⚡ 零依赖**：纯原生实现，轻如鸿毛，快如闪电
- **🔧 配置简单**：JSON 配置文件，无需编程基础
- **🌐 部署灵活**：支持本地、服务器、CDN 等多种部署方式

---

## 🚀 快速开始

### 📦 安装部署

1. **下载项目**

   ```bash
   # Git clone
   git clone https://github.com/aklibk86-dev/jump-page.git ./

   # 或下载代码后解压即可
   ```

2. **配置参数**

   编辑 `config.json` 文件 ( [在线 BASE64 编解码](https://www.toolhelper.cn/EncodeDecode/Base64) )：

   ```json
   {
     "domains": ["aHR0cHM6Ly9leGFtcGxlLmNvbQ=="],
     "countdownDuration": 5,
     "logoText": "Jump-page",
     "logoColor": "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
     "pageTitle": "正在跳转...",
     "theme": "default"
   }
   ```

3. **启动使用**

   ```bash
   # 本地使用
   双击 index.html

   # 或借助 Vscode Live Server 插件
   ```

### ⚙️ 配置说明

| 参数                | 类型   | 说明                        | 示例                                                 |
| ------------------- | ------ | --------------------------- | ---------------------------------------------------- |
| `domains`           | Array  | 跳转域名列表（Base64 编码） | `["aHR0cHM6Ly9leGFtcGxlLmNvbQ=="]`                   |
| `countdownDuration` | Number | 倒计时秒数                  | `5`                                                  |
| `pageTitle`         | String | 浏览器标签页标题            | `"正在跳转..."`                                      |
| `theme`             | String | 主题样式（deepsea/sunset/forest/violet/sakura）| `"deepsea"`                                          |
| `footerCode`        | String | 自定义页脚代码              | `"<p>自定义页脚内容</p>"`                            |
| `popup`             | Object | 无可用域名时的弹窗配置      | `{"title": "通知", "content": "内容", "buttonText": "确定", "buttonLink": "https://example.com"}` |

### 🔗 Hash 路径跳转

支持深度链接跳转，保留页面路径信息 ( **注意原始链接的#** )：

```
原始链接：https://jump.page/#/products/details
跳转结果：https://fastest-domain.com/products/details
```

---

## 🎨 主题样式

### 🎭 默认主题
项目默认使用炫酷的科技风格主题，具有动态粒子背景和玻璃拟态UI效果。

### 🌊 深海蓝主题 (deepsea)
采用深邃的蓝色渐变，营造出深海般的神秘感。

![深海蓝主题预览](src/assets/img/deepsea.jpg)

![深海蓝主题细节](src/assets/img/deepsea1.jpg)

要使用深海蓝主题，只需将配置文件中的`theme`值改为`deepsea`：

```json
{
  "theme": "deepsea"
}
```

### 🌅 日落橙主题 (sunset)
采用温暖的橙色和粉色渐变，营造出日落时分的浪漫氛围。

![日落橙主题预览](src/assets/img/sunset.jpg)

![日落橙主题细节](src/assets/img/sunset1.jpg)

要使用日落橙主题，只需将配置文件中的`theme`值改为`sunset`：

```json
{
  "theme": "sunset"
}
```

### 🌲 森林绿主题 (forest)
采用清新的绿色渐变，带来大自然的生机与活力。

![森林绿主题预览](src/assets/img/forest.jpg)

![森林绿主题细节](src/assets/img/forest1.jpg)

要使用森林绿主题，只需将配置文件中的`theme`值改为`forest`：

```json
{
  "theme": "forest"
}
```

### 🌸 紫罗兰主题 (violet)
采用优雅的紫色渐变，营造出神秘而高贵的氛围。

![紫罗兰主题预览](src/assets/img/violet.jpg)

![紫罗兰主题细节](src/assets/img/violet1.jpg)

要使用紫罗兰主题，只需将配置文件中的`theme`值改为`violet`：

```json
{
  "theme": "violet"
}
```

### 🌸 樱花粉主题 (sakura)
采用柔和的粉色渐变，营造出樱花盛开的浪漫氛围。

![樱花粉主题预览](src/assets/img/sakura.jpg)

![樱花粉主题细节](src/assets/img/sakura1.jpg)

要使用樱花粉主题，只需将配置文件中的`theme`值改为`sakura`：

```json
{
  "theme": "sakura"
}

### 🖌️ 自定义主题
项目支持完全自定义主题样式，可以通过以下方式实现：

1. 创建新的CSS样式文件
2. 在`index.html`中添加新的样式表引用
3. 在JavaScript中添加主题切换逻辑
4. 在配置文件中添加新的主题选项

---

## 🎨 个性化定制

### 🎨 样式定制

#### 背景渐变

```css
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

#### 粒子特效

```javascript
// 调整粒子数量和速度
const particleCount = 100;
const particleSpeed = 2;
```

#### 倒计时样式

```css
.countdown {
  font-size: 4rem;
  font-weight: bold;
  color: #ffffff;
}
```

---

## ⭐ 使用小贴士

- 🎯 **微信/QQ 用户**：自动显示引导页，建议使用外部浏览器
- ⚙️ **配置修改**：所有设置都在 `config.json` 中，无需修改代码
- 🔄 **备用域名**：建议配置多个备用域名，提高跳转成功率
- 🎨 **主题切换**：通过修改`theme`配置项轻松切换5种全新配色方案（deepsea/sunset/forest/violet/sakura）
- 🎨 **样式定制**：可根据喜好调整颜色和样式
- 📝 **页脚定制**：通过`footerCode`配置项添加自定义页脚内容

---

## 📝 页脚代码定制

通过`footerCode`配置项，您可以轻松地在页面底部添加自定义内容，例如版权信息、统计代码、联系信息等。

### 使用方法

在`config.json`配置文件中添加`footerCode`字段，填入您想要显示的HTML代码：

```json
{
  "footerCode": "<p style='text-align: center; margin-top: 20px;'>© 2023 My Website. All rights reserved.</p>"
}
```

### 示例

1. **添加版权信息**：
   ```json
   {
     "footerCode": "<p style='text-align: center; margin-top: 20px;'>© 2023 My Website. All rights reserved.</p>"
   }
   ```

2. **添加统计代码**：
   ```json
   {
     "footerCode": "<script>console.log('统计代码加载成功');</script>"
   }
   ```

3. **添加联系信息**：
   ```json
   {
     "footerCode": "<div style='text-align: center; margin-top: 20px;'><p>联系我们：contact@example.com</p></div>"
   }
   ```

### 注意事项
 
- 页脚代码会插入到页面底部，位于默认页脚信息之后
- 如果`footerCode`为空或未设置，则不会显示任何额外内容
- 您可以使用HTML、CSS和JavaScript代码来实现丰富的效果

---

## 📝 弹窗功能定制

当所有域名都无法访问时，系统会在倒计时结束后显示一个弹窗通知，而不是直接跳转。

### 使用方法

在`config.json`配置文件中添加`popup`字段，配置弹窗的标题、内容、按钮文本和按钮链接：

```json
{
  "popup": {
    "title": "重要通知",
    "content": "当前所有域名均无法访问，请稍后再试。",
    "buttonText": "确定",
    "buttonLink": "https://example.com"
  }
}
```

### 配置说明

| 参数        | 类型   | 说明               | 示例                          |
| ----------- | ------ | ------------------ | ----------------------------- |
| `title`     | String | 弹窗标题           | `"重要通知"`                  |
| `content`   | String | 弹窗内容           | `"当前所有域名均无法访问..."` |
| `buttonText`| String | 按钮文本           | `"确定"`                      |
| `buttonLink`| String | 按钮链接（可选）   | `"https://example.com"`       |

### 注意事项

- 如果未配置`popup`字段，则会使用默认的弹窗内容
- 如果配置了`buttonLink`，点击按钮会跳转到指定链接
- 如果未配置`buttonLink`，点击按钮会关闭弹窗

<div align="center">

**🌟 如果这个项目对你有帮助，请给我们一个 Star！**

_这不是普通的跳转页面，这是属于极客的跳转神器！_

</div>
