---
title: Button
---
Flat and outline buttons

## Examples

<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/button-example" scrolling="no" /></div>

```jsx
<Button text="Button" />
```

## Types

### Flat

<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/button-types-flat" scrolling="no" /></div>

```jsx
<Button styleName="flat-primary" text="Button" />
<Button styleName="flat-secondary" text="Button" />
<Button styleName="flat-positive" text="Button" />
<Button styleName="flat-neutral" text="Button" />
<Button styleName="flat-negative" text="Button" />
```

### Outline

<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/button-types-outline" scrolling="no" /></div>

```jsx
<Button styleName="outline-primary" text="Button" />
<Button styleName="outline-secondary" text="Button" />
<Button styleName="outline-positive" text="Button" />
<Button styleName="outline-neutral" text="Button" />
<Button styleName="outline-negative" text="Button" />
```

## States

### Disabled

<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/button-state-disabled" scrolling="no" /></div>

```jsx
<Button text="Button" disabled />
```

### Loading

<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/button-state-loading" scrolling="no" /></div>

```jsx
<Button text="Button" loading />
```

## Variations

### Size

<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/button-variations-size" scrolling="no" /></div>

```jsx
<Button size="mini" text="MINI" />
<Button size="small" text="SMALL" />
<Button size="medium" text="MEDIUM" />
<Button size="large" text="LARGE" />
<Button size="big" text="BIG" />
```

### Fluid

<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/button-variations-fluid" scrolling="no" /></div>

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
`fluid` | - | bool | - | `false`

### Events

Name | Description
--- | ---
`onPress` | -
