---
title: RadioButton
---
Single selection controls

## Examples

```jsx
<RadioButton.Group>
  <RadioButton text={'RadioButton'} value={'1'} checked />
  <RadioButton text={'RadioButton'} value={'2'} />
</RadioButton.Group>
```

## States

### Disabled

```jsx
<RadioButton.Group>
  <RadioButton text={'RadioButton'} value={'1'} disabled />
  <RadioButton text={'RadioButton'} value={'2'} disabled />
</RadioButton.Group>
```

### Checked

```jsx
<RadioButton.Group>
  <RadioButton text={'RadioButton'} value={'1'} checked />
  <RadioButton text={'RadioButton'} value={'2'} />
</RadioButton.Group>
```

## API

### Props

Name | Description | Type | Optional value | Default
--- | --- | --- | --- | ---
`CircleComponent` | - | element | - | -
`text` | - | string | - | Empty string ('')
`value` | - | string | - | -
`disabled` | - | bool | - | `false`
`checked` | - | bool | - | `false`

### Events

Name | Description
--- | ---
`onCheckedChange` | -
