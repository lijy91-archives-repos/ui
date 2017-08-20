import React, { Component } from 'react';
import { Screen, Card, Text } from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';
import SimplePageBody from '../components/SimplePageBody';

class CardExample extends Component {
  static navigationOptions = {
    title: 'Card',
  };

  render() {
    return (
      <Screen>
        <SimplePageHead>
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
        </SimplePageHead>
        <SimplePageBody>
          <Text>No demos</Text>
        </SimplePageBody>
      </Screen>
    );
  }
}

export default CardExample;
