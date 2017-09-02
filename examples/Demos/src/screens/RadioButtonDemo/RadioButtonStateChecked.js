import React, { Component } from 'react';
import { RadioButton } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class RadioButtonStateChecked extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <RadioButton.Group>
          <RadioButton text={'Option1'} value={'1'} checked />
          <RadioButton text={'Option2'} value={'2'} />
        </RadioButton.Group>
      </DemoScreen>
    );
  }
}

export default RadioButtonStateChecked;
