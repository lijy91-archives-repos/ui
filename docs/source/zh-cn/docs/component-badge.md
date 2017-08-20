---
title: Badge
---
小计数控件

## 示例

```jsx
<Badge text={'99+'} />
```

## 类型

### 点

```jsx
<Badge type={'dot'} />
```

### 文本

```jsx
<Badge type={'text'} text={'99+'} />
```

## API

### 属性

名称 | 描述 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
`children` | - | string, element | - | -
`type` | 徽章的类型 | enum | `dot`, `text` | `dot`
`text` | 显示的文本 | string | - | 空字符串 ('')
