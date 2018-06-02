import React, { Component } from 'react';
import { Button } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class ButtonStateLoading extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    return (
      <SliceScreen>
        <Button text="Button" loading />
      </SliceScreen>
    );
  }
}

export default ButtonStateLoading;
