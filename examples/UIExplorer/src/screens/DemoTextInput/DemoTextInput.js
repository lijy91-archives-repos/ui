import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
} from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class DemoTextInput extends Component {
  static navigationOptions = {
    title: 'TextInput',
  };

  renderHeader() {
    return (
      <TextInput
        style={{
          width: 300,
        }}
        placeholder="TextInput"
      />
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

export default DemoTextInput;
