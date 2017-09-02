import React, { Component } from 'react';
import { Switch } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class SwitchStateChecked extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <Switch checked />
      </DemoScreen>
    );
  }
}

export default SwitchStateChecked;
