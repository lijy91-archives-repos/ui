import React, { Component } from 'react';
import { Button } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class ButtonVariationsFluid extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <Button text={'Button'} fluid />
      </DemoScreen>
    );
  }
}

export default ButtonVariationsFluid;
