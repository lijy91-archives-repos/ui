import React, { Component } from 'react';
import { View, Text } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class ViewExample extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
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
      </DemoScreen>
    );
  }
}

export default ViewExample;
