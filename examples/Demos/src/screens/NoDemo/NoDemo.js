import React, { Component } from 'react';
import { Text } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class NoDemo extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <Text>No demo</Text>
      </DemoScreen>
    );
  }
}

export default NoDemo;
