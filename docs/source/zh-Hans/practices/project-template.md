---
title: 项目模板
---

## 介绍

*[react-native-template-ui-based](https://github.com/blankapp/react-native-template-ui-based) 是一个与 [@blankapp/ui](https://github.com/blankapp/ui) 一起使用的 React Native 模板。*

### 特性

- 轻依赖，少量且无原生组件依赖。
- 项目结构清晰。
- 多语言支持。
- 更多...

### 依赖

- [@blankapp/ui](https://github.com/blankapp/ui)
- [lodash](https://github.com/lodash/lodash)
- [mobx](https://github.com/mobxjs/mobx)
- [mobx-react](https://github.com/mobxjs/mobx-react)
- [react](https://github.com/facebook/react)
- [react-native](https://github.com/facebook/react-native)
- [react-navigation](https://github.com/react-community/react-navigation)

## 快速开始

### 必备条件

开始之前确保你已安装：

- 已安装 [Yarn](https://yarnpkg.com/)
- 已安装 [React Native](https://facebook.github.io/react-native/)

### 用法

创建一个新的 React Native 项目：

```bash
$ react-native init MyApp --template ui-based
$ cd MyApp
$ scripts/init # 请务必执行以完成项目初始化
```

### 运行程序

- 在 Android 上运行：

```bash
$ react-native run-android
$ adb reverse tcp:8081 tcp:8081  # required to ensure the Android app can
```

- 在 iOS 上运行：

```bash
$ react-native run-ios
```

## 项目结构

| 名称 | 描述 |
|---|---|
| `App.js` | 主应用组件 |
| `app.json` | - |
| `index.js` | 应用入口文件 |
| `package.json` | 构建脚本配置和依赖 |
| `src/components` | 公共 UI 组件 |
| `src/models` | - |
| `src/modules` | JS 模块或原生模块 |
| `src/navigators` | 导航配置 |
| `src/resources` | 资源目录（语言包、图片、主题等） |
| `src/screens` | 页面目录 |
| `src/screens/Home` | 首页示例模板 |
| `src/screens/Initialize` | 初始化页示例模板 |
| `src/services/API` | API 示例模板 |
| `src/stores` | - |
| `src/utilities` | 工具类目录 |

### 示例
```
.
├── __tests__
│   └── index.js
├── App.js                              # 主应用组件
├── app.json
├── index.js
├── jest-setup.js
├── package.json
├── src
│   ├── components                      # 公共 UI 组件
│   │   └── ...
│   ├── models
│   │   └── ...
│   ├── navigators                      # 导航配置
│   │   └── AppNavigator.js
│   ├── resources                       # 资源
│   │   ├── images                      # 图片
│   │   ├── locales                     # 语言包
│   │   └── themes                      # 主题
│   ├── screens
│   │   ├── Home                        # 首页示例模板
│   │   └── Initialize                  # 初始化页示例模板
│   ├── services
│   │   └── API                         # API 示例模板
│   ├── stores
│   │   ├── HomeScreenStore.js
│   │   └── InitializeScreenStore.js
│   └── utilities                       # 工具类目录
│       ├── Constants.js
│       └── Lang.js
└── yarn.lock
```

## 代码检查

此模板使用 ESLint 作为 Linter，并使用 [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
 预设与一些小的定制。

如果您对默认的 Linting 规则不满意，您可以选择几种方法进行更改：

- 覆盖 `.eslintrc.js` 中的各个规则。例如，您可以添加以下规则强制要求分号：
```
// .eslintrc.js
"semi": [2, "always"]
```

- 使用不同的 `ESLint` 预设，如 [Standard](https://github.com/standard/standard)。

```bash
$ eslint --init
```

- 当你不想使用代码检查功能时（不建议），你可以把相应的依赖及配置文件删除。
