---
title: HyperlinkButton
---
超链接按钮

## 示例

<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/hyperlinkbutton-example" scrolling="no" /></div>

```jsx
<HyperlinkButton text="HyperlinkButton" />
```

## 状态

### 禁用

<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/hyperlinkbutton-state-disabled" scrolling="no" /></div>

```jsx
<HyperlinkButton text="HyperlinkButton" disabled />
```

## 变化形式

### 尺寸

<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/hyperlinkbutton-variations-size" scrolling="no" /></div>

```jsx
<HyperlinkButton text="MINI" size="mini" />
<HyperlinkButton text="SMALL" size="small" />
<HyperlinkButton text="MEDIUM" size="medium" />
<HyperlinkButton text="LARGE" size="large" />
<HyperlinkButton text="BIG" size="big" />
```

## API

### 属性

名称 | 描述 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
`children` | - | string, element | - | -
`text` | 显示的文本 | string | - | 空字符串 ('')
`textStyle` | 文本的样式 | style | - | -
`disabled` | 是否处于禁用状态 | bool | - | `false`
`loading` | 是否处于加载中状态 | bool | - | `false`
`size` | 按钮的大小 | enum | `mini`, </br>`small`, </br>`medium`, </br>`large`, </br>`big` | `medium`

### 事件

名称 | 描述
--- | ---
`onPress` | -
