---
title: Switch
---
开关控件

## 示例

<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/switch-example" scrolling="no" /></div>

```jsx
<Switch />
```

## 状态

### 禁用

<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/switch-state-disabled" scrolling="no" /></div>

```jsx
<Switch disabled />
<Switch disabled checked />
```

### 选中

<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/switch-state-checked" scrolling="no" /></div>

```jsx
<Switch checked />
```

## API

### 属性

名称 | 描述 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
`disabled` | 是否处于禁用状态 | bool | - | `false`
`checked` | 是否处于选中状态 | bool | - | `false`
`onCheckedChange` | 当选中状态变化时调用处理程序 | function | - | -
