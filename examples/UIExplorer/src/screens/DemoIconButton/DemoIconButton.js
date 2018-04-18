import React, { Component } from 'react';
import { Text, View } from '@blankapp/ui';
import { IconButton } from '@blankapp/ui-pro';
import DemoScreen from '../../components/DemoScreen';

class DemoIconButton extends Component {
  static navigationOptions = {
    title: 'IconButton',
  };

  renderHeader() {
    return (
      <IconButton iconName="thumb-up" />
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

export default DemoIconButton;
