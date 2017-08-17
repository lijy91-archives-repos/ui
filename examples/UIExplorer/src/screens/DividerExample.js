import React, { Component } from 'react';
import { Screen, View, Divider, Text } from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';

class DividerExample extends Component {
  static navigationOptions = {
    title: 'Divider',
  };

  render() {
    return (
      <Screen>
        <SimplePageHead>
          <Divider
            style={{
              width: 300,
            }}
          />
        </SimplePageHead>
        <View>
          <Text>Come soon</Text>
        </View>
      </Screen>
    );
  }
}

export default DividerExample;
