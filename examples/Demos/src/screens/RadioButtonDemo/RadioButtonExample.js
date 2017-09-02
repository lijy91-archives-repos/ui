import React, { Component } from 'react';
import { RadioButton } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class RadioButtonExample extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  constructor(props) {
    super(props);
    this.state = {
      checkedValue: '1',
    };
  }

  render() {
    return (
      <DemoScreen>
        <RadioButton.Group
          onCheckedChange={(checkedValue) => {
            this.setState({
              checkedValue,
            });
          }}
        >
          <RadioButton
            text={'Option1'}
            value={'1'}
            checked={this.state.checkedValue === '1'}
          />
          <RadioButton
            text={'Option2'}
            value={'2'}
            checked={this.state.checkedValue === '2'}
          />
        </RadioButton.Group>
      </DemoScreen>
    );
  }
}

export default RadioButtonExample;
