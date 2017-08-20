import React, { Component } from 'react';
import { Screen, View, Text } from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';
import SimplePageBody from '../components/SimplePageBody';

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
            <Text>View</Text>
          </View>
        </SimplePageHead>
        <SimplePageBody>
          <Text>No demos</Text>
        </SimplePageBody>
      </Screen>
    );
  }
}

export default ViewExample;
