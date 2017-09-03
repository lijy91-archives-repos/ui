---
title: CheckBox
---
Multi-selection controls

## Examples

<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/checkbox-example" scrolling="no" /></div>

```jsx
<CheckBox text={'CheckBox'} />
```

## States

### Disabled

<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/checkbox-state-disabled" scrolling="no" /></div>

```jsx
<CheckBox text={'CheckBox'} disabled />
```

### Checked

<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/checkbox-state-checked" scrolling="no" /></div>

```jsx
<CheckBox text={'CheckBox'} checked />
```

## API

### Props

Name | Description | Type | Optional value | Default
--- | --- | --- | --- | ---
`children` | - | string, element | - | -
`text` | - | string | - | Empty string ('')
`disabled` | - | bool | - | `false`
`checked` | - | bool | - | `false`

### Events

Name | Description
--- | ---
`onCheckedChange` | -
