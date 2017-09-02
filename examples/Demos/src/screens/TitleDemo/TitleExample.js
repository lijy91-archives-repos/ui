import React, { Component } from 'react';
import { Title } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class TitleExample extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <Title>Title</Title>
      </DemoScreen>
    );
  }
}

export default TitleExample;
