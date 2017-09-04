import React, { Component } from 'react';
import { Screen, Text, Subtitle } from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';
import SimplePageBody from '../components/SimplePageBody';

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
        <SimplePageBody>
          <Text>No demos</Text>
        </SimplePageBody>
      </Screen>
    );
  }
}

export default SubtitleExample;
