---
title: HyperlinkButton
---
超链接按钮

## 示例

```jsx
<HyperlinkButton text={'HyperlinkButton'} />
```

## 状态

### 禁用

```jsx
<HyperlinkButton text={'HyperlinkButton'} disabled />
```

### 加载中

```jsx
<HyperlinkButton text={'HyperlinkButton'} loading />
```

## 变化形式

### 尺寸

```jsx
<HyperlinkButton text={'HyperlinkButton'} size={'mini'} />
<HyperlinkButton text={'HyperlinkButton'} size={'small'} />
<HyperlinkButton text={'HyperlinkButton'} size={'medium'} />
<HyperlinkButton text={'HyperlinkButton'} size={'large'} />
<HyperlinkButton text={'HyperlinkButton'} size={'big'} />
```

## API

### 属性

名称 | 描述 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
`children` | - | string, element | - | -
`text` | 显示的文本 | string | - | 空字符串 ('')
`disabled` | 是否处于禁用状态 | bool | - | `false`
`loading` | 是否处于加载中状态 | bool | - | `false`
`size` | 按钮的大小 | enum | `mini`, </br>`small`, </br>`medium`, </br>`large`, </br>`big` | `medium`

### 事件

名称 | 描述
--- | ---
`onPress` | -
