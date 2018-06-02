import React, { Component } from 'react';
import { TextInput } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class TextInputExample extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    return (
      <SliceScreen>
        <TextInput
          style={{
            width: 300,
          }}
          placeholder="TextInput"
        />
      </SliceScreen>
    );
  }
}

export default TextInputExample;
