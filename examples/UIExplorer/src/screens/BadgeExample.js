import React, { Component } from 'react';
import {
  Screen,
  Badge,
  View,
  Text,
} from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';

class BadgeExample extends Component {
  static navigationOptions = {
    title: 'Badge',
  };

  render() {
    return (
      <Screen>
        <SimplePageHead>
          <Badge
            style={{
              alignSelf: 'center',
            }}
            type={'text'}
            text={'99+'}
          />
        </SimplePageHead>
        <View>
          <Text>Come soon</Text>
        </View>
      </Screen>
    );
  }
}

export default BadgeExample;
