---
title: 概述
---

欢迎使用 `BlankApp UI`，本文档将帮助您快速上手。如果您在使用过程中遇到问题，请查看[问题解答](troubleshooting.html)中的解答，或者在 [GitHub](https://github.com/blankapp/ui/issues) 上提问。

## 简介

基于 React Native 的跨平台移动应用 UI 组件库，使您能够轻松构建专业的 React Native 应用程序。

## 快速开始

### 必备条件
开始之前确保你已安装：

- 已安装 [Yarn](https://yarnpkg.com/) (与 [Node.js](https://nodejs.org/) 一起安装)
- 已安装 [React Native](https://facebook.github.io/react-native/)

### 安装
创建一个新的 React Native 项目：

```bash
$ react-native init HelloWorld
$ cd HelloWorld
```

在您的项目中安装并链接 `@blankapp/ui` ：

``` bash
$ yarn add @blankapp/ui
```

### 设置主题
``` js
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Theme, {
  ThemeProvider,
  Screen,
  Text,
} from '@blankapp/ui';

const drakTheme = {
  'View': { backgroundColor: 'black' },
  'Text': { color: 'white' },
};

Theme.registerTheme('dark', drakTheme);

class Examples extends Component {
  render() {
    return (
      <ThemeProvider theme={'light'}>
        <Screen>
          <Text>Hello World</Text>
        </Screen>
      </ThemeProvider>
    );
  }
}

AppRegistry.registerComponent('Examples', () => Examples);
```

### 启动

1. **Running on Android**:

  ```
  $ react-native run-android
  $ adb reverse tcp:8081 tcp:8081   # required to ensure the Android app can
  ```

2. **Running on iOS:**

  ```
  $ react-native run-ios
  ```
