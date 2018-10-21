---
title: Avatar
---
Avatar controls

## Examples

<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/avatar-example" scrolling="no" /></div>

```jsx
<Avatar
  source={{ uri: '...' }}
/>
```

## Variations

### Size

<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/avatar-variations-size" scrolling="no" /></div>

```jsx
<Avatar source={{ uri: '...' }} size="mini" />
<Avatar source={{ uri: '...' }} size="small" />
<Avatar source={{ uri: '...' }} size="medium" />
<Avatar source={{ uri: '...' }} size="large" />
<Avatar source={{ uri: '...' }} size="big" />
```

## API

### Props

Name | Description | Type | Optional value | Default
--- | --- | --- | --- | ---
`size` | - | enum | `mini`, `small`, `medium`, `large`, `big` | `medium`

Based on https://facebook.github.io/react-native/docs/image.html
