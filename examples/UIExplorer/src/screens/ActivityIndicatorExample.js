import React, { Component } from 'react';
import {
  Screen,
  ActivityIndicator,
  View,
  Text,
} from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';

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
        <View>
          <Text>Come soon</Text>
        </View>
      </Screen>
    );
  }
}

export default ActivityIndicatorExample;
