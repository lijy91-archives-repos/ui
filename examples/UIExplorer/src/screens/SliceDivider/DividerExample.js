import React, { Component } from 'react';
import { View, Divider } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class DividerExample extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    return (
      <SliceScreen>
        <View
          style={{
            width: 300,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Divider />
        </View>
      </SliceScreen>
    );
  }
}

export default DividerExample;
