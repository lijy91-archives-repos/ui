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
        <HyperlinkButton style={{ marginRight: 8 }} size={'mini'} text={'MINI'} />
        <HyperlinkButton style={{ marginRight: 8 }} size={'small'} text={'SMALL'} />
        <HyperlinkButton style={{ marginRight: 8 }} size={'medium'} text={'MEDIUM'} />
        <HyperlinkButton style={{ marginRight: 8 }} size={'large'} text={'LARGE'} />
        <HyperlinkButton style={{ marginRight: 8 }} size={'big'} text={'BIG'} />
      </DemoScreen>
    );
  }
}

export default HyperlinkButtonVariationsSize;
