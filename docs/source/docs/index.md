---
title: Overview
---
Come soon

## Introduction

Highly customizable and theming components for React Native, A live demo is [here](https://appetize.io/app/q0wwt188mh3pxxxz1rzf1d4pgr).

### Features

- Lightly dependent, very little dependent
- Global theming, a variety of style selector implementation
- Rich base components
- Friendly API design

### Live Demo
<iframe src="https://appetize.io/embed/q0wwt188mh3pxxxz1rzf1d4pgr?device=nexus5&scale=75&autoplay=true&orientation=portrait&deviceColor=black&language=en" width="300px" height="597px" frameborder="0" scrolling="no"></iframe>

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

Install @blankapp/ui and link in your project:

```bash
$ yarn add @blankapp/ui
```

Now, simply copy the following to your index.ios.js file of React Native project:

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

### Run the new app

- Running on Android:

  ```
  $ react-native run-android
  $ adb reverse tcp:8081 tcp:8081   # required to ensure the Android app can
  ```

- Running on iOS:

  ```
  $ react-native run-ios
  ```
