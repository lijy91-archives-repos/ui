import React, { Component } from 'react';
import { Text } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class NoDemo extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };


  render() {
    return (
      <SliceScreen>
        <Text>No demo</Text>
      </SliceScreen>
    );
  }
}

export default NoDemo;
