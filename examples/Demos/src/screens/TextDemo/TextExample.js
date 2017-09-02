import React, { Component } from 'react';
import { Text } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class TextExample extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <Text>Text</Text>
      </DemoScreen>
    );
  }
}

export default TextExample;
