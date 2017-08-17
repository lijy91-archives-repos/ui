title: 概述
---

欢迎使用 `BlankApp UI Toolkit`，本文档将帮助您快速上手。如果您在使用过程中遇到问题，请查看[问题解答](troubleshooting.html)中的解答，或者在 [GitHub](https://github.com/blankapp/ui/issues) 上提问。

## 简介

一套基于 React Native 的跨平台移动应用组件库，超过 10+ 个常用组件，帮助你快速构建你的应用。


## 快速开始

### 安装
新建一个 [React Native](https://facebook.github.io/react-native/) 项目，在终端中切换到项目根目录后执行以下命令。

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

const defaultTheme = {
  'View': { backgroundColor: 'red' },
  'Text': { color: 'black' }
};

const lightTheme = {
  'View': { backgroundColor: 'green' },
  'Text': { color: 'gray' },
};

const drakTheme = {
  'View': { backgroundColor: 'black' },
  'Text': { color: 'white' },
};

Theme.registerTheme('dark', drakTheme);
Theme.registerTheme('light', lightTheme);
Theme.registerDefaultTheme(defaultTheme);

class Examples extends Component {
  render() {
    return (
      <ThemeProvider theme={'light'}>
        <Screen>
          <Text>Welcome @blankapp/ui</Text>
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

