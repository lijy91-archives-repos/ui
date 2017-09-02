import React, { Component } from 'react';
import { HyperlinkButton } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class HyperlinkButtonVariationsSize extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <HyperlinkButton size={'mini'} text={'MINI'} />
        <HyperlinkButton size={'small'} text={'SMALL'} />
        <HyperlinkButton size={'medium'} text={'MEDIUM'} />
        <HyperlinkButton size={'large'} text={'LARGE'} />
        <HyperlinkButton size={'big'} text={'BIG'} />
      </DemoScreen>
    );
  }
}

export default HyperlinkButtonVariationsSize;
