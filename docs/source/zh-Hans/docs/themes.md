---
title: 主题
---

`@blankapp/ui` 默认提供了一套基础主题，当然你也可以通过自定义样式表对风格进行定制以满足你的业务和品牌上的视觉需求。

## 自定义主题

当你为你的项目定义了一个主题样式表后，你需要使用 `Theme.registerTheme` 方法对主题进行注册，然后在 `ThemeProvider` 使用它。

> 如果你需要构建一个完整的主题，请基于[默认主题](https://github.com/blankapp/ui/tree/develop/src/resources/themes/default)进行定制化。

```javascript
import Theme, { ThemeProvider } from '@blankapp/ui';

// 定义一个样式表
const drakTheme = {
  'Screen': { backgroundColor: 'black' },
  'Text': { color: 'white' },
};

// 注册一个 `dark` 样式
Theme.registerTheme('dark', [
  drakTheme,
]);

// 将 `theme` 属性设为 `dark` 就可以使用该样式了
// 示例：<ThemeProvider theme="dark" />
```

### 样式选择器

通过实现了一些类似于 CSS 的样式选择器，现在我们可以很方便的通过组件的属性来更改组件的样式

#### 组件选择器

> 示例：Button 组件，应用以下样式

```javascript
export default {
  Button: {
    activeOpacity: 0.8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 0,
    paddingBottom: 0,
  },
};
// 示例：<Button text="Button" />
```

#### 属性选择器

> 示例：Button 组件，当属性 `disabled` 为 `true`，应用以下样式

```javascript
export default {
  'Button[disabled=true]': {
    opacity: 0.4,
  },
};
// 示例：<Button text="Button" disabled />
```

#### 层级选择器

> 示例：Button 组件下所有 Text 组件，应用以下样式

```javascript
export default {
  'Button[size=mini]': {
    Text: {
      fontSize: 14,
    },
  },
};
// 示例：<Button text="Button" size="mini" />
```

#### 类选择器（计划中）

```javascript
export default {
  // Come soon
};
```

*PS. 如果您需要更深入的去了解选择器的使用，请查看[默认主题](https://github.com/blankapp/ui/tree/master/src/resources/themes/default)的定义。*


## 自定义组件

很多情况下，我们需要定义一些自己的组件用于满足我们的业务需求，所以您也可以很方便的构建一个自己的组件。

1 首先创建你的样式表文件

```javascript
export default {
  Title: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '500',
    marginBottom: 4,
  },
};
```

2 使用 `withStyles` 函数将样式应用到你的组件

```javascript
import { Text as RNText } from 'react-native';
import { withStyles } from '@blankapp/ui';

// 为了方便，这里直接将 `Text` 组件应用上了 `Title` 样式。
const Title = withStyles('Title')(RNText);

export default Title;
```
