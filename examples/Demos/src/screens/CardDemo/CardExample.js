import React, { Component } from 'react';
import { Card, Text } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class CardExample extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <Card
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 300,
            height: 100,
          }}
        >
          <Text>Card</Text>
        </Card>
      </DemoScreen>
    );
  }
}

export default CardExample;
