---
title: Button
---
Flat and outline buttons

## Examples

<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/button-example" scrolling="no" /></div>

```jsx
<Button text="Button" />
```

## Types

### Flat

<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/button-types-flat" scrolling="no" /></div>

```jsx
<Button styleName="flat-primary" text="Button" />
<Button styleName="flat-accent" text="Button" />
```

### Outline

<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/button-types-outline" scrolling="no" /></div>

```jsx
<Button styleName="outline-primary" text="Button" />
<Button styleName="outline-accent" text="Button" />
```

## States

### Disabled

<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/button-state-disabled" scrolling="no" /></div>

```jsx
<Button text="Button" disabled />
```

### Loading

<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/button-state-loading" scrolling="no" /></div>

```jsx
<Button text="Button" loading />
```

## Variations

### Size

<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/button-variations-size" scrolling="no" /></div>

```jsx
<Button size="mini" text="MINI" />
<Button size="small" text="SMALL" />
<Button size="medium" text="MEDIUM" />
<Button size="large" text="LARGE" />
<Button size="big" text="BIG" />
```

### Rounded

<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/button-variations-rounded" scrolling="no" /></div>

```jsx
<Button text="Button" rounded={false} />
```

### Circular

<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/button-variations-circular" scrolling="no" /></div>

```jsx
<Button text="OK" circular />
```

### Fluid

<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/button-variations-fluid" scrolling="no" /></div>

```jsx
<Button text="Button" fluid />
```

## API

### Props

Name | Description | Type | Optional value | Default
--- | --- | --- | --- | ---
`children` | - | string, element | - | -
`text` | - | string | - | Empty string ('')
`textStyle` | - | style | - | -
`disabled` | - | bool | - | `false`
`loading` | - | bool | - | `false`
`size` | - | enum | `mini`, `small`, `medium`, `large`, `big` | `medium`
`rounded` | - | bool | - | `false`
`circular` | - | bool | - | `false`
`fluid` | - | bool | - | `false`

### Events

Name | Description
--- | ---
`onPress` | -
