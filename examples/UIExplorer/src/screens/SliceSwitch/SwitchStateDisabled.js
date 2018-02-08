import React, { Component } from 'react';
import { Switch } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class SwitchStateDisabled extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    return (
      <SliceScreen>
        <Switch disabled />
        <Switch disabled checked />
      </SliceScreen>
    );
  }
}

export default SwitchStateDisabled;
