import React, { Component } from 'react';
import { RadioButton } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class RadioButtonExample extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      checkedValue: '1',
    };
  }

  render() {
    return (
      <SliceScreen>
        <RadioButton.Group
          onCheckedChange={(checkedValue) => {
            this.setState({
              checkedValue,
            });
          }}
        >
          <RadioButton
            text="Option1"
            value="1"
            checked={this.state.checkedValue === '1'}
          />
          <RadioButton
            text="Option2"
            value="2"
            checked={this.state.checkedValue === '2'}
          />
        </RadioButton.Group>
      </SliceScreen>
    );
  }
}

export default RadioButtonExample;
