import React, { Component } from 'react';
import { Screen, Text, RadioButton, View } from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';

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
              text={'RadioButton'}
              value={'1'}
              checked={this.state.checkedValue === '1'}
            />
            <RadioButton
              text={'RadioButton'}
              value={'2'}
              checked={this.state.checkedValue === '2'}
            />
          </RadioButton.Group>

        </SimplePageHead>
        <View>
          <Text>Come soon</Text>
        </View>
      </Screen>
    );
  }
}

export default RadioButtonExample;
