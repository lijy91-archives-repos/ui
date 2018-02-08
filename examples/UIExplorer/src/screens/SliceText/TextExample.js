import React, { Component } from 'react';
import { Text } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class TextExample extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    return (
      <SliceScreen>
        <Text>Text</Text>
      </SliceScreen>
    );
  }
}

export default TextExample;
