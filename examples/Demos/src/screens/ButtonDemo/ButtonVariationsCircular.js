import React, { Component } from 'react';
import { Button } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class ButtonVariationsCircular extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <Button text={'OK'} circular />
      </DemoScreen>
    );
  }
}

export default ButtonVariationsCircular;
