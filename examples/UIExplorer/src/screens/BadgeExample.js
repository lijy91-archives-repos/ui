import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {
  Screen,
  Badge,
  View,
  Title,
  Subtitle,
} from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';
import SimplePageBody from '../components/SimplePageBody';

class BadgeExample extends Component {
  static navigationOptions = {
    title: 'Badge',
  };

  render() {
    return (
      <Screen>
        <ScrollView>
          <SimplePageHead>
            <Badge
              style={{
                alignSelf: 'center',
              }}
              type="text"
              text="99+"
            />
          </SimplePageHead>
          <SimplePageBody>
            <Title>Types</Title>
            <View>
              <Subtitle>Dot</Subtitle>
              <View
                style={{
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                }}
              >
                <Badge type="dot" />
              </View>
              <Subtitle>Text</Subtitle>
              <View
                style={{
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                }}
              >
                <Badge type="text" text="99+" />
              </View>
            </View>
          </SimplePageBody>
        </ScrollView>
      </Screen>
    );
  }
}

export default BadgeExample;
