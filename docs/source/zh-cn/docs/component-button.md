---
title: Button
---
平面和线框按钮

## 示例

```jsx
<Button text={'Button'} />
```

## 类型

### 平面

```jsx
<Button styleName={'flat-primary'} text={'Button'} />
<Button styleName={'flat-accent'} text={'Button'} />
```

### 线框

```jsx
<Button styleName={'outline-primary'} text={'Button'} />
<Button styleName={'outline-accent'} text={'Button'} />
```

## 状态

### 禁用

```jsx
<Button text={'Button'} disabled />
```

### 加载中

```jsx
<Button text={'Button'} loading />
```

## 变化形式

### 尺寸

```jsx
<Button size={'mini'} text={'MINI'} />
<Button size={'small'} text={'SMALL'} />
<Button size={'medium'} text={'MEDIUM'} />
<Button size={'large'} text={'LARGE'} />
<Button size={'big'} text={'BIG'} />
```

### 圆角

```jsx
<Button text={'Button'} rounded={false} />
```

### 圆形

```jsx
<Button text={'OK'} circular />
```

### 流式布局

```jsx
<Button text={'Button'} fluid />
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
`rounded` | 是否为圆角按钮 | bool | - | `false`
`fluid` | - | bool | - | `false`

### 事件

名称 | 描述
--- | ---
`onPress` | -
