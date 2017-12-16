---
title: CheckBox
---
复选控件

## 示例

<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/checkbox-example" scrolling="no" /></div>

```jsx
<CheckBox text={'CheckBox'} />
```

## 状态

### 禁用

<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/checkbox-state-disabled" scrolling="no" /></div>

```jsx
<CheckBox text={'CheckBox'} disabled />
```

### 选中

<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/checkbox-state-checked" scrolling="no" /></div>

```jsx
<CheckBox text={'CheckBox'} checked />
```

## API

### 属性

名称 | 描述 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
`children` | - | string, element | - | -
`text` | 显示的文本 | string | - | 空字符串 ('')
`textStyle` | 文本的样式 | style | - | -
`disabled` | 是否处于禁用状态 | bool | - | `false`
`checked` | 是否处于选中状态 | bool | - | `false`

### 事件

名称 | 描述
--- | ---
`onCheckedChange` | -
