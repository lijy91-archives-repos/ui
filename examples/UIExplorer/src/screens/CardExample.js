import React, { Component } from 'react';
import { Screen, Card, View, Text } from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';

class CardExample extends Component {
  static navigationOptions = {
    title: 'Card',
  };

  render() {
    return (
      <Screen>
        <SimplePageHead>
          <Card>
            <Text style={{ height: 100, width: 300 }}>Card</Text>
          </Card>
        </SimplePageHead>
        <View>
          <Text>Come soon</Text>
        </View>
      </Screen>
    );
  }
}

export default CardExample;
