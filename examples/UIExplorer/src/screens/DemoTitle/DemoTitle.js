import React, { Component } from 'react';
import {
  Text,
  Title,
  View,
} from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class DemoTitle extends Component {
  static navigationOptions = {
    title: 'Title',
  };

  renderHeader() {
    return (
      <Title>Title</Title>
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

export default DemoTitle;
