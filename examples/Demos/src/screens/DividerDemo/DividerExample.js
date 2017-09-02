import React, { Component } from 'react';
import { View, Divider } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class DividerExample extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  constructor(props) {
    super(props);
    this.state = {
      checkBox: false,
    };
  }

  render() {
    return (
      <DemoScreen>
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
      </DemoScreen>
    );
  }
}

export default DividerExample;
