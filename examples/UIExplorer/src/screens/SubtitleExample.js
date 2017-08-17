import React, { Component } from 'react';
import { Screen, View, Text, Subtitle } from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';

class SubtitleExample extends Component {
  static navigationOptions = {
    title: 'Subtitle',
  };

  render() {
    return (
      <Screen>
        <SimplePageHead>
          <Subtitle>Subtitle</Subtitle>
        </SimplePageHead>
        <View>
          <Text>Come soon</Text>
        </View>
      </Screen>
    );
  }
}

export default SubtitleExample;
