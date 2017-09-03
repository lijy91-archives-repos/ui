---
title: Badge
---
Small count controls

## Examples

<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/badge-example" scrolling="no" /></div>

```jsx
<Badge text={'99+'} />
```

## Types

### dot

<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/badge-types-dot" scrolling="no" /></div>

```jsx
<Badge type={'dot'} />
```

### text


<div><iframe style="width: 100%; margin: 0;" src="http://ui-demos.blankapp.org/badge-types-text" scrolling="no" /></div>

```jsx
<Badge type={'text'} text={'99+'} />
```

## API

### Props

Name | Description | Type | Optional value | Default
--- | --- | --- | --- | ---
`children` | - | string, element | - | -
`type` | - | enum | `dot`, `text` | `dot`
`text` | - | string | - | Empty string ('')
