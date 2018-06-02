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

  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  renderHeader() {
    return (
      <TextInput
        style={{
          width: 300,
        }}
        onChangeText={text => this.setState({ text })}
        placeholder="TextInput"
        value={this.state.text}
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
