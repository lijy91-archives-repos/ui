---
title: RadioButton
---
单选控件

## 示例

<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/radiobutton-example" scrolling="no" /></div>

```jsx
<RadioButton.Group>
  <RadioButton text="Option1" checked />
  <RadioButton text="Option2" />
</RadioButton.Group>
```

## 状态

### 禁用

<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/radiobutton-state-disabled" scrolling="no" /></div>

```jsx
<RadioButton.Group>
  <RadioButton text="Option1" value="1" disabled />
  <RadioButton text="Option2" value="2" disabled />
</RadioButton.Group>
```

### 选中
<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/radiobutton-state-checked" scrolling="no" /></div>

```jsx
<RadioButton.Group>
  <RadioButton text="Option1" value="1" checked />
  <RadioButton text="Option2" value="2" />
</RadioButton.Group>
```

## API

### 属性

名称 | 描述 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
`CircleComponent` | - | element | - | -
`text` | 显示的文本 | string | - | 空字符串 ('')
`textStyle` | 文本的样式 | style | - | -
`value` | - | string | - | -
`disabled` | 是否处于禁用状态 | bool | - | `false`
`checked` | 是否处于选中状态 | bool | - | `false`
`onCheckedChange` | 当选中状态变化时调用处理程序 | function | - | -
