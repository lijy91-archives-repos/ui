import React, { Component } from 'react';
import {
  Text,
  Subtitle,
  View,
} from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class DemoSubtitle extends Component {
  static navigationOptions = {
    title: 'Subtitle',
  };

  renderHeader() {
    return (
      <Subtitle>Subtitle</Subtitle>
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

export default DemoSubtitle;
