import React, { Component } from 'react';
import { Button } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class ButtonVariationsRounded extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <Button text={'Button'} rounded={false} />
      </DemoScreen>
    );
  }
}

export default ButtonVariationsRounded;
