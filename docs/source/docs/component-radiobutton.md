---
title: RadioButton
---
Single selection controls

## Examples

<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/radiobutton-example" scrolling="no" /></div>

```jsx
<RadioButton.Group>
  <RadioButton text="Option1" checked />
  <RadioButton text="Option2" />
</RadioButton.Group>
```

## States

### Disabled

<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/radiobutton-state-disabled" scrolling="no" /></div>

```jsx
<RadioButton.Group>
  <RadioButton text="Option1" value="1" disabled />
  <RadioButton text="Option2" value="2" disabled />
</RadioButton.Group>
```

### Checked

<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/radiobutton-state-checked" scrolling="no" /></div>

```jsx
<RadioButton.Group>
  <RadioButton text="Option1" value="1" checked />
  <RadioButton text="Option2" value="2" />
</RadioButton.Group>
```

## API

### Props

Name | Description | Type | Optional value | Default
--- | --- | --- | --- | ---
`CircleComponent` | - | element | - | -
`text` | - | string | - | Empty string ('')
`textStyle` | - | style | - | -
`value` | - | string | - | -
`disabled` | - | bool | - | `false`
`checked` | - | bool | - | `false`

### Events

Name | Description
--- | ---
`onCheckedChange` | -
