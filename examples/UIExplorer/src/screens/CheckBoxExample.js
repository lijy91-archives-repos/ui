import React, { Component } from 'react';
import { Screen, View, Title, Subtitle, CheckBox } from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';
import SimplePageBody from '../components/SimplePageBody';

class CheckBoxExample extends Component {
  static navigationOptions = {
    title: 'CheckBox',
  };

  constructor(props) {
    super(props);

    this.state = {
      checkBox1: true,
    };
  }

  render() {
    return (
      <Screen>
        <SimplePageHead>
          <CheckBox
            text="CheckBox"
            checked={this.state.checkBox1}
            onCheckedChange={checked => this.setState({ checkBox1: checked })}
          />
        </SimplePageHead>
        <SimplePageBody>
          <Title>States</Title>
          <View>
            <Subtitle>Disabled</Subtitle>
            <View
              style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
              }}
            >
              <CheckBox text="CheckBox" disabled />
            </View>
            <Subtitle>Checked</Subtitle>
            <View
              style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
              }}
            >
              <CheckBox text="CheckBox" checked />
            </View>
          </View>
        </SimplePageBody>
      </Screen>
    );
  }
}

export default CheckBoxExample;
