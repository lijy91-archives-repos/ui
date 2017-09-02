import React, { Component } from 'react';
import { HyperlinkButton } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class HyperlinkButtonExample extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <HyperlinkButton text={'HyperlinkButton'} />
      </DemoScreen>
    );
  }
}

export default HyperlinkButtonExample;
