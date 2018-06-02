import React, { Component } from 'react';
import { Subtitle } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class SubtitleDemo extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    return (
      <SliceScreen>
        <Subtitle>Subtitle</Subtitle>
      </SliceScreen>
    );
  }
}

export default SubtitleDemo;
