import React, { Component } from 'react';
import { Button } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class ButtonTypesOutline extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    return (
      <SliceScreen>
        <Button styleName="outline-primary" text="Button" />
        <Button styleName="outline-accent" text="Button" />
      </SliceScreen>
    );
  }
}

export default ButtonTypesOutline;
