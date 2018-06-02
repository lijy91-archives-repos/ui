import React, { Component } from 'react';
import { Title } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class TitleExample extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    return (
      <SliceScreen>
        <Title>Title</Title>
      </SliceScreen>
    );
  }
}

export default TitleExample;
