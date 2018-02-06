import React, { Component } from 'react';
import {
  Text,
  View,
} from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class DemoText extends Component {
  static navigationOptions = {
    title: 'Text',
  };

  renderHeader() {
    return (
      <Text>Text</Text>
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

export default DemoText;
