import React, { Component } from 'react';
import { Screen, Text, View, HyperlinkButton } from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';

class HyperlinkButtonExample extends Component {
  static navigationOptions = {
    title: 'HyperlinkButton',
  };

  render() {
    return (
      <Screen>
        <SimplePageHead>
          <HyperlinkButton text={'HyperlinkButton'} />
        </SimplePageHead>
        <View>
          <Text>Come soon</Text>
        </View>
      </Screen>
    );
  }
}

export default HyperlinkButtonExample;
