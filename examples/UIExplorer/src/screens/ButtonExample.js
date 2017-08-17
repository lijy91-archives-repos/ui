import React, { Component } from 'react';
import {
  Screen,
  View,
  Button,
  Text,
} from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';

class ButtonExample extends Component {
  static navigationOptions = {
    title: 'Button',
  };

  render() {
    return (
      <Screen>
        <SimplePageHead>
          <Button
            styleName={'flat-primary'}
            text="Button"
          />
        </SimplePageHead>
        <View>
          <Text>Come soon</Text>
        </View>
      </Screen>
    );
  }
}

export default ButtonExample;
