import React, { Component } from 'react';
import { HyperlinkButton } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class HyperlinkButtonStateDisabled extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <HyperlinkButton text={'HyperlinkButton'} disabled />
      </DemoScreen>
    );
  }
}

export default HyperlinkButtonStateDisabled;
