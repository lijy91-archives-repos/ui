import React, { Component } from 'react';
import { CheckBox } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class CheckBoxStateChecked extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <CheckBox text={'CheckBox'} checked />
      </DemoScreen>
    );
  }
}

export default CheckBoxStateChecked;
