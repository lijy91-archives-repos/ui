import React, { Component } from 'react';
import {
  Text,
  View,
} from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class DemoView extends Component {
  static navigationOptions = {
    title: 'View',
  };

  renderHeader() {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 300,
          height: 100,
          backgroundColor: '#ffffff',
        }}
      >
        <Text>View</Text>
      </View>
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

export default DemoView;
