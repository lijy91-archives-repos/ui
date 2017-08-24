import React, { Component } from 'react';
import { Screen, Text, View } from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';
import SimplePageBody from '../components/SimplePageBody';

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
        <SimplePageBody>
          <Text>No demos</Text>
        </SimplePageBody>
      </Screen>
    );
  }
}

export default TextExample;
