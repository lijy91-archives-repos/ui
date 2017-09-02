import React, { Component } from 'react';
import { Button } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class ButtonTypesFlat extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <Button styleName={'flat-primary'} text={'Button'} />
        <Button styleName={'flat-accent'} text={'Button'} />
      </DemoScreen>
    );
  }
}

export default ButtonTypesFlat;
