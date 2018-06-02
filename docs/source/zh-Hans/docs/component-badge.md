---
title: Badge
---
小计数控件

## 示例

<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/badge-example" scrolling="no" /></div>

```jsx
<Badge text="99+" />
```

## 类型

### 点

<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/badge-types-dot" scrolling="no" /></div>

```jsx
<Badge type="dot" />
```

### 文本

<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/badge-types-text" scrolling="no" /></div>

```jsx
<Badge type="text" text="99+" />
```

## API

### 属性

名称 | 描述 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
`children` | - | string, element | - | -
`type` | 徽章的类型 | enum | `dot`, `text` | `dot`
`text` | 显示的文本 | string | - | 空字符串 ('')
