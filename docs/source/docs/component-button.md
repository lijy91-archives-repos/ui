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
<Button text={'Button'} size={'mini'} />
<Button text={'Button'} size={'small'} />
<Button text={'Button'} size={'medium'} />
<Button text={'Button'} size={'large'} />
<Button text={'Button'} size={'big'} />
```

### Rounded

```jsx
<Button text={'Button'} rounded />
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
