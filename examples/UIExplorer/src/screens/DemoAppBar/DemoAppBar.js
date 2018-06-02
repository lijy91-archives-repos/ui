import React, { Component } from 'react';
import { Text, View } from '@blankapp/ui';
// import { AppBar } from '@blankapp/ui-pro';
import DemoScreen from '../../components/DemoScreen';

class DemoAppBar extends Component {
  static navigationOptions = {
    title: 'AppBar',
  };

  renderHeader() {
    return (
      <Text>Coming soon</Text>
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

export default DemoAppBar;
