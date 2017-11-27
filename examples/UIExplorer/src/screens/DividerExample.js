import React, { Component } from 'react';
import { Screen, View, Divider, Title, Subtitle } from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';
import SimplePageBody from '../components/SimplePageBody';

class DividerExample extends Component {
  static navigationOptions = {
    title: 'Divider',
  };

  render() {
    return (
      <Screen>
        <SimplePageHead>
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
        </SimplePageHead>
        <SimplePageBody>
          <Title>Variations</Title>
          <View>
            <Subtitle>Orientation</Subtitle>
            <View
              style={{
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
                <Divider orientation="horizontal" style={{ alignItems: 'center', justifyContent: 'flex-start' }} />
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Divider orientation="vertical" />
              </View>
            </View>
          </View>
        </SimplePageBody>
      </Screen>
    );
  }
}

export default DividerExample;
