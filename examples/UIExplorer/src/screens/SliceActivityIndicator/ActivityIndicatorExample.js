import React, { Component } from 'react';
import { ActivityIndicator } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class ActivityIndicatorExample extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    return (
      <SliceScreen>
        <ActivityIndicator />
      </SliceScreen>
    );
  }
}

export default ActivityIndicatorExample;
