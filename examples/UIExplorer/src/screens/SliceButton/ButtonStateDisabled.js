import React, { Component } from 'react';
import { Button } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class ButtonStateDisabled extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    return (
      <SliceScreen>
        <Button text="Button" disabled />
      </SliceScreen>
    );
  }
}

export default ButtonStateDisabled;
