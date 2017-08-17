import React, { Component } from 'react';
import { Screen, TextInput, View, Text } from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';

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
        <View>
          <Text>Come soon</Text>
        </View>
      </Screen>
    );
  }
}

export default TextInputExample;
