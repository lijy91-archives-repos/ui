---
title: Form
---

表单控件

## 示例

<div><iframe style="width: 100%; height: 300px; margin: 0;" src="https://uiexplorer.blankapp.org/slices/form-example" scrolling="no" /></div>

```jsx
<Form>
  <Form.Field>
    <TextInput
      placeholder="Email"
      keyboardType="email-address"
    />
  </Form.Field>
  <Form.Field>
    <TextInput
      placeholder="Password"
      maxLength={32}
      secureTextEntry
    />
  </Form.Field>
  <Form.Field>
    <Button
      text="Submit"
    />
  </Form.Field>
</Form>
```
