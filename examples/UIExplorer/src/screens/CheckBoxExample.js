import React, { Component } from 'react';
import { Screen, View, Text, CheckBox } from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';

class CheckBoxExample extends Component {
  static navigationOptions = {
    title: 'CheckBox',
  };

  constructor(props) {
    super(props);

    this.state = {
      checkBox1: true,
      checkBox2: false,
      checkBox3: true,
      checkBox4: false,
    };
  }

  render() {
    return (
      <Screen>
        <SimplePageHead>
          <CheckBox
            text={'CheckBox'}
            checked={this.state.checkBox1}
            onCheckedChange={checked => this.setState({ checkBox1: checked })}
          />
        </SimplePageHead>
        <View>
          <Text>Come soon</Text>
        </View>
      </Screen>
    );
  }
}

export default CheckBoxExample;
