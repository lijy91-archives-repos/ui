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

English | [简体中文](./README.zh_CN.md)

Table of Contents
=================

  * [Introduction](#introduction)
      * [Features](#features)
  * [Quick Start](#quick-start)
      * [Prerequisites](#prerequisites)
      * [Installation](#installation)
      * [Run the new app](#run-the-new-app)
  * [Discussion](#discussion)
  * [License](#license)

Created by [gh-md-toc](https://github.com/ekalinin/github-markdown-toc)

## Introduction

*Highly customizable and theming components for React Native*

Browse the docs on [blankapp.org](http://blankapp.org/) or try it out on our [live demo][live-demo-url].

### Features

- Lightly dependency, very little dependency
- Global theming, a variety of style selector implementation
- Rich base components
- Friendly API design

### Live Demo

[![Live Demo][live-demo-image]][live-demo-url]

[live-demo-image]: http://blankapp.org/assets/images/live_demo_screenshot.png
[live-demo-url]: http://blankapp.org/docs/#Live-Demo

## Quick Start

### Prerequisites

Before starting make sure you have:

- Installed [Yarn](https://yarnpkg.com/)
- Installed [React Native](https://facebook.github.io/react-native/)

### Installation

Create a new React Native App:

```bash
$ react-native init HelloWorld
$ cd HelloWorld
```

Install `@blankapp/ui` to your project:

```bash
$ yarn add @blankapp/ui
```

Now, simply copy the following to your `index.js` file of React Native project:

``` js
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Theme, { ThemeProvider, Screen, Text} from '@blankapp/ui';
import defaultTheme from '@blankapp/ui/src/resources/themes/default';

// Register a default theme
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

***P.S. If you want to start a project quickly, you can use the project template that we prepared for you [react-native-template-ui-based](https://blankapp.org/practices/project-template.html).***

### Run the new app

- Running on Android:

```bash
$ react-native run-android
$ adb reverse tcp:8081 tcp:8081   # required to ensure the Android app can
```

- Running on iOS:

```bash
$ react-native run-ios
```

## Discussion

If you have any suggestions or questions about this project, you can discuss it by [Telegram](https://t.me/blankapporg) or my private wechat.

![](http://blankapp.org/assets/images/wechat_qrcode.png)

## License

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
