import React, { Component } from 'react';
import { RadioButton } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class RadioButtonStateDisabled extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <RadioButton.Group>
          <RadioButton text={'Option1'} value={'1'} disabled />
          <RadioButton text={'Option2'} value={'2'} disabled />
        </RadioButton.Group>
      </DemoScreen>
    );
  }
}

export default RadioButtonStateDisabled;
