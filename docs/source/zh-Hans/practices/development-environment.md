---
title: 开发环境（macOS Only）
---

## 目标

- 安装及配置 Node.js 开发环境
- 安装及配置 Android 开发环境
- 安装及配置 iOS / macOS 开发环境
- 安装及配置 React Native 开发环境
- 推荐一些常用的工具软件

## 基础环境

### 安装 [Homebrew](https://brew.sh)

运行下列命令来安装 `Homebrew`：
```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew update
```

### 安装 [Node.js](https://nodejs.org)

运行下列命令来安装 `Node.js`：

```
$ brew install node
```

运行命令来测试 `Node.js` 是否安装：

```bash
$ node -v
```

运行命令来测试 `NPM` 是否安装：
```bash
$ npm -v
```

### 安装 [Yarn](https://yarnpkg.com/zh-Hans/)

运行下列命令来安装 `Yarn`：

```bash
$ curl -o- -L https://yarnpkg.com/install.sh | bash
```

运行命令来测试 `Yarn` 是否安装：

```
$ yarn --version
```

### 安装 [Java](http://www.oracle.com/technetwork/java/javase/overview/index.html)

从 Oracle Java 官方下载页 http://www.oracle.com/technetwork/java/javase/overview/index.html 选择你需要安装的 Java SE 版本，下载安装完成后添加下列配置。

添加 `JAVA_HOME` 环境变量到你的 `Shell` 配置（如：`.bash_profile`、`.zshrc`）

```
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_144.jdk/Contents/Home
```

*注：`jdk1.8.0_144.jdk` 为当前电脑安装版本，请以实际安装版本为准*

运行命令来测试 Java 是否安装：
```
$ java -version
```

## 平台环境

### Android

#### 安装 Android SDK

See: https://developer.android.com/studio/index.html

### iOS

#### 安装 [Xcode](https://itunes.apple.com/cn/app/xcode/id497799835?mt=12)

See: https://developer.apple.com/xcode/

### React Native

运行下列命令来安装 `Node`, `Watchman`：
```bash
$ brew install node # 如已安装请忽略
$ brew install watchman
```

运行下列命令来安装 `React Native CLI`：
```bash
$ npm install -g react-native-cli
```

运行命令来测试 `React Native CLI` 是否安装：
```bash
$ react-native -v
```

## 推荐工具

### 命令行工具

#### Tree

运行下列命令来安装 `Tree`：
```bash
$ brew install tree
```

使用示例：
```bash
$ tree -L 1
.
├── react-native-template-ui-based
├── todo-api-client
├── todo-client
├── todo-server
├── ui
└── ui-experimental

6 directories, 0 files
```

#### [Zsh](http://zsh.org) + [Oh My Zsh](http://ohmyz.sh/)

运行下列命令来安装 `Zsh`：

```bash
$ brew install zsh
```

参考：
- http://zsh.org
- https://github.com/robbyrussell/oh-my-zsh

### 桌面工具

#### Beyond Compare

See: https://www.scootersoftware.com/

#### Dash

See: https://kapeli.com/dash

#### Vysor

See: https://www.vysor.io/

#### GitHub Desktop

See: https://desktop.github.com/

#### VirtualBox VM

See: https://www.virtualbox.org/wiki/Downloads

#### Genymotion

See: https://www.genymotion.com/

#### The Unarchiver

See: https://theunarchiver.com/
