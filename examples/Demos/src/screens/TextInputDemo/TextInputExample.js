import React, { Component } from 'react';
import { TextInput } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class TextInputExample extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <TextInput
          style={{
            width: 300,
          }}
          placeholder="TextInput"
        />
      </DemoScreen>
    );
  }
}

export default TextInputExample;
