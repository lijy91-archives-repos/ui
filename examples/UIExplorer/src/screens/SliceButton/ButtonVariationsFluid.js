import React, { Component } from 'react';
import { Button } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class ButtonVariationsFluid extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    return (
      <SliceScreen>
        <Button text="Button" fluid />
      </SliceScreen>
    );
  }
}

export default ButtonVariationsFluid;
