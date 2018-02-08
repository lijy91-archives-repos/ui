import React, { Component } from 'react';
import { View, Text } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class ViewExample extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    return (
      <SliceScreen>
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
      </SliceScreen>
    );
  }
}

export default ViewExample;
