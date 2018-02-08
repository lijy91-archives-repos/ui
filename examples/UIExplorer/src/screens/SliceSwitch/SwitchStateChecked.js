import React, { Component } from 'react';
import { Switch } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class SwitchStateChecked extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    return (
      <SliceScreen>
        <Switch checked />
      </SliceScreen>
    );
  }
}

export default SwitchStateChecked;
