import React, { Component } from 'react';
import { RadioButton } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class RadioButtonStateDisabled extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    return (
      <SliceScreen>
        <RadioButton.Group>
          <RadioButton text="Option1" value="1" disabled />
          <RadioButton text="Option2" value="2" disabled />
        </RadioButton.Group>
      </SliceScreen>
    );
  }
}

export default RadioButtonStateDisabled;
