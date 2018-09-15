---
title: Avatar
---
头像控件

## 示例

<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/avatar-example" scrolling="no" /></div>

```jsx
<Avatar
  source={{ uri: '...' }}
/>
```

## 变化形式

### 尺寸

<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/avatar-variations-size" scrolling="no" /></div>

```jsx
<Avatar source={{ uri: '...' }} size="mini" />
<Avatar source={{ uri: '...' }} size="small" />
<Avatar source={{ uri: '...' }} size="medium" />
<Avatar source={{ uri: '...' }} size="large" />
<Avatar source={{ uri: '...' }} size="big" />
```

## API

### Props

名称 | 描述 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
`size` | 头像的大小 | enum | `mini`, </br>`small`, </br>`medium`, </br>`large`, </br>`big` | `medium`

Based on https://facebook.github.io/react-native/docs/view.html
