import React, { Component } from 'react';
import { Card, Text } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class CardVariationsRounded extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    return (
      <SliceScreen>
        <Card
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 300,
            height: 100,
          }}
          rounded={false}
        >
          <Text>Card</Text>
        </Card>
      </SliceScreen>
    );
  }
}

export default CardVariationsRounded;
