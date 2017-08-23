---
title: CheckBox
---
复选控件

## 示例

```jsx
<CheckBox text={'CheckBox'} />
```

## 状态

### 禁用

```jsx
<CheckBox text={'CheckBox'} disabled />
```

### 选中

```jsx
<CheckBox text={'CheckBox'} checked />
```

## API

### 属性

名称 | 描述 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
`children` | - | string, element | - | -
`text` | 显示的文本 | string | - | 空字符串 ('')
`disabled` | 是否处于禁用状态 | bool | - | `false`
`checked` | 是否处于选中状态 | bool | - | `false`

### 事件

名称 | 描述
--- | ---
`onCheckedChange` | -
