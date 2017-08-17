import React, { Component } from 'react';
import { Screen, Title, Text, View } from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';

class TitleExample extends Component {
  static navigationOptions = {
    title: 'Title',
  };

  render() {
    return (
      <Screen>
        <SimplePageHead>
          <Title>Title</Title>
        </SimplePageHead>
        <View>
          <Text>Come soon</Text>
        </View>
      </Screen>
    );
  }
}

export default TitleExample;
