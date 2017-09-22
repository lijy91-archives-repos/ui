---
title: RadioButton
---
单选控件

## 示例

<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/radiobutton-example" scrolling="no" /></div>

```jsx
<RadioButton.Group>
  <RadioButton text={'Option1'} checked />
  <RadioButton text={'Option2'} />
</RadioButton.Group>
```

## 状态

### 禁用

<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/radiobutton-state-disabled" scrolling="no" /></div>

```jsx
<RadioButton.Group>
  <RadioButton text={'Option1'} value={'1'} disabled />
  <RadioButton text={'Option2'} value={'2'} disabled />
</RadioButton.Group>
```

### 选中
<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/radiobutton-state-checked" scrolling="no" /></div>

```jsx
<RadioButton.Group>
  <RadioButton text={'Option1'} value={'1'} checked />
  <RadioButton text={'Option2'} value={'2'} />
</RadioButton.Group>
```

## API

### 属性

名称 | 描述 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
`CircleComponent` | - | element | - | -
`text` | 显示的文本 | string | - | 空字符串 ('')
`value` | - | string | - | -
`disabled` | 是否处于禁用状态 | bool | - | `false`
`checked` | 是否处于选中状态 | bool | - | `false`

### 事件

名称 | 描述
--- | ---
`onCheckedChange` | -
