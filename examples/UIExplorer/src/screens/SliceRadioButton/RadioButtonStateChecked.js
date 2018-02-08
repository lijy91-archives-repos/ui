import React, { Component } from 'react';
import { RadioButton } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class RadioButtonStateChecked extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    return (
      <SliceScreen>
        <RadioButton.Group>
          <RadioButton text="Option1" value="1" checked />
          <RadioButton text="Option2" value="2" />
        </RadioButton.Group>
      </SliceScreen>
    );
  }
}

export default RadioButtonStateChecked;
