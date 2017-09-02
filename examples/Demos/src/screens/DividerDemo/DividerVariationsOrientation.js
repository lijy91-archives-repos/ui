import React, { Component } from 'react';
import { View, Divider } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class DividerVariationsOrientation extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <View
          style={{
            width: 300,
            height: 200,
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Divider
              orientation={'horizontal'}
              style={{ alignItems: 'center', justifyContent: 'flex-start' }}
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Divider orientation={'vertical'} />
          </View>
        </View>
      </DemoScreen>
    );
  }
}

export default DividerVariationsOrientation;
