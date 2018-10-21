---
title: IconButton
---
图标按钮

## 示例

<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/iconbutton-example" scrolling="no" /></div>

```jsx
<Icon name="thumb-up" />
```

## API

### 属性

名称 | 描述 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
`children` | - | string, element | - | -
`iconName` | 显示的图标 | string | - | 空字符串 ('')
`iconStyle` | 图标的样式 | style | - | -
`disabled` | 是否处于禁用状态 | bool | - | `false`
`size` | 按钮的大小 | enum | `mini`, </br>`small`, </br>`medium`, </br>`large`, </br>`big` | `medium`
`onPress` | 当用户点击按钮时调用处理程序 | function | - | -

基于：https://github.com/oblador/react-native-vector-icons/
