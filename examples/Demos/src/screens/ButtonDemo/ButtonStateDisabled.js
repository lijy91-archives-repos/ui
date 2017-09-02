import React, { Component } from 'react';
import { Button } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class ButtonStateDisabled extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <Button text={'Button'} disabled />
      </DemoScreen>
    );
  }
}

export default ButtonStateDisabled;
