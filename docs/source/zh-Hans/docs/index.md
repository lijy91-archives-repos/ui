---
title: 概述
---
欢迎使用 `@blankapp/ui`，本文档将帮助您快速上手。如果您在使用过程中遇到问题，请查看[问题解答](troubleshooting.html)中的解答，或者在 [GitHub](https://github.com/blankapp/ui/issues) 上提问。

## 简介

高可定制和主题化的 React Native 组件库， 在[这里](/examples/UIExplorer/index.html)查看在线演示。

### 特性

- 轻依赖，非常少的依赖。
- 全局主题化，多种样式选择器的实现。
- 丰富的基础组件。
- 友好的 API 设计。

### Live Demo

<div style="width: 400px; height: 795px; transform: scale(0.75); transform-origin: 0 0;">
  <img style="width: 400px; height: 795px;" src="/assets/images/nexus5_black.png" />
  <iframe
    style="position: absolute; overflow: hidden; z-index: 1000; background-color: rgb(0, 0, 0); width: 360px; height: 640px; top: 67px; left: 20px;"
    src="/examples/UIExplorer/index.html"
    width="300px"
    height="597px"
    frameborder="0"
    scrolling="no"
  />
</div>

## 快速开始

### 必备条件

开始之前确保你已安装：

- 已安装 [Yarn](https://yarnpkg.com/)
- 已安装 [React Native](https://facebook.github.io/react-native/)

### 安装

创建一个新的 React Native 项目：

```bash
$ react-native init HelloWorld
$ cd HelloWorld
```

安装 `@blankapp/ui` 并链接到您的项目中：

```bash
$ yarn add @blankapp/ui
```

现在，只需将以下内容复制到 React Native 项目的index.ios.js文件：

``` js
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {
  ThemeProvider,
  Screen,
  Text,
} from '@blankapp/ui';

class Examples extends Component {
  render() {
    return (
      <ThemeProvider>
        <Screen>
          <Text>Hello World</Text>
        </Screen>
      </ThemeProvider>
    );
  }
}

AppRegistry.registerComponent('Examples', () => Examples);
```

***P.S. 如是你想快速开始一个项目，可使用我们为你准备的项目模板 [react-native-template-ui-based](/zh-Hans/practices/project-template.html)。***

### 运行程序

- 在 Android 上运行：

```bash
$ react-native run-android
$ adb reverse tcp:8081 tcp:8081   # required to ensure the Android app can
```

- 在 iOS 上运行：

```bash
$ react-native run-ios
```
