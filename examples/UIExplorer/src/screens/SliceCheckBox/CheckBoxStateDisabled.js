import React, { Component } from 'react';
import { CheckBox } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class CheckBoxStateDisabled extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    return (
      <SliceScreen>
        <CheckBox text="CheckBox" disabled />
      </SliceScreen>
    );
  }
}

export default CheckBoxStateDisabled;
