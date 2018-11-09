---
title: Grid
---
Grid controls

## Examples

<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/grid-example" scrolling="no" /></div>

```jsx
<Card>
  ...
</Card>
```

## Context

### Rows

<div><iframe style="width: 100%; height: 400px; margin: 0;" src="https://uiexplorer.blankapp.org/slices/grid-content-rows" scrolling="no" /></div>

```jsx
<Grid columns={2}>
  <Grid.Row columns={3}>
    <Grid.Column
      style={{ padding: 6 }}
    >
      <Image
        resizeMode="contain"
        source={...}
      />
    </Grid.Column>
    ...
  </Grid.Row>
  <Grid.Row columns={3}>
    <Grid.Column
      style={{ padding: 6 }}
    >
      <Image
        resizeMode="contain"
        source={...}
      />
    </Grid.Column>
    ...
  </Grid.Row>
</Grid>
```

### Columns

<div><iframe style="width: 100%; height: 300px; margin: 0;" src="https://uiexplorer.blankapp.org/slices/grid-content-columns" scrolling="no" /></div>

```jsx
<Grid columns={2}>
  <Grid.Column
    style={{ padding: 6 }}
  >
    <Image
      resizeMode="contain"
      source={...}
    />
  </Grid.Column>
  ...
</Grid>
```
