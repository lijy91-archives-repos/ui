import React, { Component } from 'react';
import { Button } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class ButtonExample extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <Button text={'Button'} />
      </DemoScreen>
    );
  }
}

export default ButtonExample;
