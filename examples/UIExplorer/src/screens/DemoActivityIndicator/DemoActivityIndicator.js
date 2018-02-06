import React, { Component } from 'react';
import {
  ActivityIndicator,
  Text,
  View,
} from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class DemoActivityIndicator extends Component {
  static navigationOptions = {
    title: 'ActivityIndicator',
  };

  renderHeader() {
    return (
      <ActivityIndicator />
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

export default DemoActivityIndicator;
