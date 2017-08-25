---
title: 概述
---
欢迎使用 `BlankApp UI`，本文档将帮助您快速上手。如果您在使用过程中遇到问题，请查看[问题解答](troubleshooting.html)中的解答，或者在 [GitHub](https://github.com/blankapp/ui/issues) 上提问。

## 简介

高可定制和主题化 React Native 组件库， 在[这里]()查看在线演示。

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
import Theme, {
  ThemeProvider,
  Screen,
  Text,
} from '@blankapp/ui';

const drakTheme = {
  'Screen': { backgroundColor: 'black' },
  'Text': { color: 'white' },
};

Theme.registerTheme('dark', drakTheme);

class Examples extends Component {
  render() {
    return (
      <ThemeProvider theme={'dark'}>
        <Screen>
          <Text>Hello World</Text>
        </Screen>
      </ThemeProvider>
    );
  }
}

AppRegistry.registerComponent('Examples', () => Examples);
```

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
