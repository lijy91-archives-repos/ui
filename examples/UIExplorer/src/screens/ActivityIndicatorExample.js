import React, { Component } from 'react';
import {
  Screen,
  ActivityIndicator,
  Text,
} from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';
import SimplePageBody from '../components/SimplePageBody';

class ActivityIndicatorExample extends Component {
  static navigationOptions = {
    title: 'ActivityIndicator',
  };

  render() {
    return (
      <Screen>
        <SimplePageHead>
          <ActivityIndicator />
        </SimplePageHead>
        <SimplePageBody>
          <Text>No demos</Text>
        </SimplePageBody>
      </Screen>
    );
  }
}

export default ActivityIndicatorExample;
