import React, { Component } from 'react';
import { HyperlinkButton } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class HyperlinkButtonVariationsSize extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    return (
      <SliceScreen>
        <HyperlinkButton style={{ marginRight: 8 }} size="mini" text="MINI" />
        <HyperlinkButton style={{ marginRight: 8 }} size="small" text="SMALL" />
        <HyperlinkButton style={{ marginRight: 8 }} size="medium" text="MEDIUM" />
        <HyperlinkButton style={{ marginRight: 8 }} size="large" text="LARGE" />
        <HyperlinkButton style={{ marginRight: 8 }} size="big" text="BIG" />
      </SliceScreen>
    );
  }
}

export default HyperlinkButtonVariationsSize;
