---
title: HyperlinkButton
---
Like hyperlink buttons

## Examples

```jsx
<HyperlinkButton text={'HyperlinkButton'} />
```

## States

### Disabled

```jsx
<HyperlinkButton text={'HyperlinkButton'} disabled />
```

### Loading

```jsx
<HyperlinkButton text={'HyperlinkButton'} loading />
```

## Variations

### Size

```jsx
<HyperlinkButton text={'MINI'} size={'mini'} />
<HyperlinkButton text={'SMALL'} size={'small'} />
<HyperlinkButton text={'MEDIUM'} size={'medium'} />
<HyperlinkButton text={'LARGE'} size={'large'} />
<HyperlinkButton text={'BIG'} size={'big'} />
```

## API

### Props

Name | Description | Type | Optional value | Default
--- | --- | --- | --- | ---
`children` | - | string, element | - | -
`text` | -| string | - | Empty string ('')
`disabled` | - | bool | - | `false`
`loading` | - | bool | - | `false`
`size` | - | enum | `mini`, </br>`small`, </br>`medium`, </br>`large`, </br>`big` | `medium`

### Event

Name | Description
--- | ---
`onPress` | -
