import React, { Component } from 'react';
import { ActivityIndicator } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class ActivityIndicatorExample extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <ActivityIndicator />
      </DemoScreen>
    );
  }
}

export default ActivityIndicatorExample;
