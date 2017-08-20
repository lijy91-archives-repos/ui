---
title: RadioButton
---
单选控件

## 示例

```jsx
<RadioButton.Group>
  <RadioButton text={'Option1'} />
  <RadioButton text={'Option2'} />
</RadioButton.Group>
```

## 状态

### 禁用

```jsx
<RadioButton.Group>
  <RadioButton text={'Option1'} disabled />
  <RadioButton text={'Option2'} disabled/>
</RadioButton.Group>
```

### 选中

```jsx
<RadioButton.Group>
  <RadioButton text={'Option1'} checked />
  <RadioButton text={'Option2'} />
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
