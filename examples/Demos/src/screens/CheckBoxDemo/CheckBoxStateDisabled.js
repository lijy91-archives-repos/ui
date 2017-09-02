import React, { Component } from 'react';
import { CheckBox } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class CheckBoxStateDisabled extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <CheckBox text={'CheckBox'} disabled />
      </DemoScreen>
    );
  }
}

export default CheckBoxStateDisabled;
