import React, { Component } from 'react';
import { Button } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class ButtonVariationsSize extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    return (
      <SliceScreen>
        <Button size="mini" text="MINI" />
        <Button size="small" text="SMALL" />
        <Button size="medium" text="MEDIUM" />
        <Button size="large" text="LARGE" />
        <Button size="big" text="BIG" />
      </SliceScreen>
    );
  }
}

export default ButtonVariationsSize;
