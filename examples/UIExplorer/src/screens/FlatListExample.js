import React, { Component } from 'react';
import { Screen, View, Text } from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';

class FlatListExample extends Component {
  static navigationOptions = {
    title: 'FlatList',
  };

  render() {
    return (
      <Screen>
        <SimplePageHead>
          <Text>Come soon</Text>
        </SimplePageHead>
        <View>
          <Text>Come soon</Text>
        </View>
      </Screen>
    );
  }
}

export default FlatListExample;
