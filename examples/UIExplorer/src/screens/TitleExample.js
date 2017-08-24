import React, { Component } from 'react';
import { Screen, Title, Text, View } from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';
import SimplePageBody from '../components/SimplePageBody';

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
        <SimplePageBody>
          <Text>No demos</Text>
        </SimplePageBody>
      </Screen>
    );
  }
}

export default TitleExample;
