import React, { Component } from 'react';
import { Screen, Title, Subtitle, RadioButton, View } from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';
import SimplePageBody from '../components/SimplePageBody';

class RadioButtonExample extends Component {
  static navigationOptions = {
    title: 'RadioButton',
  };

  constructor(props) {
    super(props);
    this.state = {
      checkedValue: '1',
    };
  }

  render() {
    return (
      <Screen>
        <SimplePageHead>
          <RadioButton.Group
            onCheckedChange={(checkedValue) => {
              this.setState({
                checkedValue,
              });
            }}
          >
            <RadioButton
              text="RadioButton"
              value="1"
              checked={this.state.checkedValue === '1'}
            />
            <RadioButton
              text="RadioButton"
              value="2"
              checked={this.state.checkedValue === '2'}
            />
          </RadioButton.Group>

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
              <RadioButton.Group>
                <RadioButton text="RadioButton" value="1" disabled />
                <RadioButton text="RadioButton" value="2" disabled />
              </RadioButton.Group>
            </View>
            <Subtitle>Checked</Subtitle>
            <View
              style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
              }}
            >
              <RadioButton.Group>
                <RadioButton text="RadioButton" value="1" checked />
                <RadioButton text="RadioButton" value="2" />
              </RadioButton.Group>
            </View>
          </View>
        </SimplePageBody>
      </Screen>
    );
  }
}

export default RadioButtonExample;
