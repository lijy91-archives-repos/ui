---
title: Button
---
Flat and outline buttons

## Examples

```jsx
<Button text={'Button'} />
```

## Types

### Flat

```jsx
<Button styleName={'flat-primary'} text={'Button'} />
<Button styleName={'flat-accent'} text={'Button'} />
```

### Outline

```jsx
<Button styleName={'outline-primary'} text={'Button'} />
<Button styleName={'outline-accent'} text={'Button'} />
```

## States

### Disabled

```jsx
<Button text={'Button'} disabled />
```

### Loading

```jsx
<Button text={'Button'} loading />
```

## Variations

### Size

```jsx
<Button size={'mini'} text={'MINI'} />
<Button size={'small'} text={'SMALL'} />
<Button size={'medium'} text={'MEDIUM'} />
<Button size={'large'} text={'LARGE'} />
<Button size={'big'} text={'BIG'} />
```

### Rounded

```jsx
<Button text={'Button'} rounded={false} />
```

### Fluid

```jsx
<Button text={'Button'} fluid />
```

## API

### Props

Name | Description | Type | Optional value | Default
--- | --- | --- | --- | ---
`children` | - | string, element | - | -
`text` | - | string | - | Empty string ('')
`disabled` | - | bool | - | `false`
`loading` | - | bool | - | `false`
`size` | - | enum | `mini`, `small`, `medium`, `large`, `big` | `medium`
`rounded` | - | bool | - | `false`
`fluid` | - | bool | - | `false`

### Events

Name | Description
--- | ---
`onPress` | -
