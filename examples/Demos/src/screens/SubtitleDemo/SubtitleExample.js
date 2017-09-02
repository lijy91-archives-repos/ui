import React, { Component } from 'react';
import { Subtitle } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class SubtitleDemo extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <Subtitle>Subtitle</Subtitle>
      </DemoScreen>
    );
  }
}

export default SubtitleDemo;
