import React, { Component } from 'react';
import { Button } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class ButtonTypesFlat extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    return (
      <SliceScreen>
        <Button styleName="flat-primary" text="Button" />
        <Button styleName="flat-accent" text="Button" />
      </SliceScreen>
    );
  }
}

export default ButtonTypesFlat;
