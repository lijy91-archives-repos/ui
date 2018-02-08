import React, { Component } from 'react';
import { CheckBox } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class CheckBoxStateChecked extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    return (
      <SliceScreen>
        <CheckBox text="heckBox" checked />
      </SliceScreen>
    );
  }
}

export default CheckBoxStateChecked;
