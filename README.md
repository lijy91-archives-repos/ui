# @blankapp/ui

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

## License
```
MIT License

Copyright (c) 2017 JianyingLi

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
