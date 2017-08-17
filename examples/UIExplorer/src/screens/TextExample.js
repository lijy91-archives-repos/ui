import React, { Component } from 'react';
import { Screen, Text, View } from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';

class TextExample extends Component {
  static navigationOptions = {
    title: 'Text',
  };

  render() {
    return (
      <Screen>
        <SimplePageHead>
          <Text>Text</Text>
        </SimplePageHead>
        <View>
          <Text>Come soon</Text>
        </View>
      </Screen>
    );
  }
}

export default TextExample;
