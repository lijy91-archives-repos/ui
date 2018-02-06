import React, { Component } from 'react';
import {
  Card,
  Text,
  View,
} from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class DemoCard extends Component {
  static navigationOptions = {
    title: 'Card',
  };

  renderHeader() {
    return (
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
    );
  }

  renderContent() {
    return (
      <View>
        <Text>No demos</Text>
      </View>
    );
  }

  render() {
    return (
      <DemoScreen
        HeaderComponent={() => this.renderHeader()}
        ContentComponent={() => this.renderContent()}
      />
    );
  }
}

export default DemoCard;
