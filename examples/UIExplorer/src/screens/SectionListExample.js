import React, { Component } from 'react';
import { Screen, Text, View } from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';

class SectionListExample extends Component {
  static navigationOptions = {
    title: 'SectionList',
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

export default SectionListExample;
