import React, { Component } from 'react';
import { Screen, TextInput, Text } from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';
import SimplePageBody from '../components/SimplePageBody';

class TextInputExample extends Component {
  static navigationOptions = {
    title: 'TextInput',
  };

  render() {
    return (
      <Screen>
        <SimplePageHead>
          <TextInput
            style={{
              width: 300,
            }}
            placeholder="TextInput"
          />
        </SimplePageHead>
        <SimplePageBody>
          <Text>No demos</Text>
        </SimplePageBody>
      </Screen>
    );
  }
}

export default TextInputExample;
