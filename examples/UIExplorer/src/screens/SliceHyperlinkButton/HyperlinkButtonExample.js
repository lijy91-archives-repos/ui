import React, { Component } from 'react';
import { HyperlinkButton } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class HyperlinkButtonExample extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    return (
      <SliceScreen>
        <HyperlinkButton text="HyperlinkButton" />
      </SliceScreen>
    );
  }
}

export default HyperlinkButtonExample;
