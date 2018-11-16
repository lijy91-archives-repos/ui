# @blankapp/ui

<img width="200" height="200" src="http://blankapp.org/logo.png" alt="@blankapp/ui" align="right">

[![Build Status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]
[![npm][npm-dm-image]][npm-dm-url]
[![Join the chat][telegram-image]][telegram-url]

[npm-image]: https://img.shields.io/npm/v/@blankapp/ui.svg
[npm-url]: https://www.npmjs.com/package/@blankapp/ui
[npm-dm-image]: https://img.shields.io/npm/dm/@blankapp/ui.svg
[npm-dm-url]: https://www.npmjs.com/package/@blankapp/ui
[travis-image]: https://travis-ci.org/blankapp/ui.svg?branch=master
[travis-url]: https://travis-ci.org/blankapp/ui
[telegram-image]:
https://img.shields.io/badge/chat-on%20telegram-blue.svg
[telegram-url]: https://t.me/blankapporg

[English](./README.zh_CN.md) | 简体中文

Table of Contents
=================

  * [简介](#简介)
      * [特性](#特性)
      * [Live Demo](#live-demo)
  * [快速开始](#快速开始)
      * [必备条件](#必备条件)
      * [安装](#安装)
      * [运行程序](#运行程序)
  * [探讨](#探讨)
  * [许可证](#许可证)

Created by [gh-md-toc](https://github.com/ekalinin/github-markdown-toc)

## 简介

*高可定制和主题化的 React Native 组件库*

浏览 [blankapp.org](http://blankapp.org/) 上的文档或者查看[在线演示](live-demo-url)。

### 特性

- 轻依赖，非常少的依赖。
- 全局主题化，多种样式选择器的实现。
- 丰富的基础组件。
- 友好的 API 设计。

### Live Demo

[![Live Demo][live-demo-image]][live-demo-url]

[live-demo-image]: http://blankapp.org/assets/images/live_demo_screenshot.png
[live-demo-url]: http://blankapp.org/docs/#Live-Demo

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

安装 `@blankapp/ui` 到您的项目中：

```bash
$ yarn add @blankapp/ui
```

现在，只需将以下内容复制到 React Native 项目的 `index.js` 文件：

``` js
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Theme, { ThemeProvider, Screen, Text} from '@blankapp/ui';
import defaultTheme from '@blankapp/ui/src/resources/themes/default';

// 注册默认主题
Theme.registerTheme('default', [
  defaultTheme,
]);

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

***P.S. 如是你想快速开始一个项目，可使用我们为你准备的项目模板 [react-native-template-ui-based](https://blankapp.org/zh-Hans/practices/project-template.html)。***

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

## 探讨

如果您对此项目有任何建议或疑问，可以通过 [Telegram](https://t.me/blankapporg) 或我的私人微信进行讨论。

![](http://blankapp.org/assets/images/wechat_qrcode.png)

## 许可证

```
MIT License

Copyright (c) 2018 JianyingLi <lijy91@foxmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
