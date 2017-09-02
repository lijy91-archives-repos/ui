import React, { Component } from 'react';
import { Switch } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class SwitchStateDisabled extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <Switch disabled />
        <Switch disabled checked />
      </DemoScreen>
    );
  }
}

export default SwitchStateDisabled;
