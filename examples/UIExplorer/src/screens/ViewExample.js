import React, { Component } from 'react';
import { Screen, View, Text } from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';

class ViewExample extends Component {
  static navigationOptions = {
    title: 'View',
  };

  render() {
    return (
      <Screen>
        <SimplePageHead>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 300,
              height: 100,
              backgroundColor: '#ffffff',
            }}
          >
            <Text>300 X 100</Text>
          </View>
        </SimplePageHead>
        <View>
          <Text>Come soon</Text>
        </View>
      </Screen>
    );
  }
}

export default ViewExample;
