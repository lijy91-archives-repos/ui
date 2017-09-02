import React, { Component } from 'react';
import { Button } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class ButtonTypesOutline extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <Button styleName={'outline-primary'} text={'Button'} />
        <Button styleName={'outline-accent'} text={'Button'} />
      </DemoScreen>
    );
  }
}

export default ButtonTypesOutline;
