import React, { Component } from 'react';
import { View, Divider } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class DividerVariationsOrientation extends Component {
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
              orientation="orizontal"
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
            <Divider orientation="ertical" />
          </View>
        </View>
      </SliceScreen>
    );
  }
}

export default DividerVariationsOrientation;
