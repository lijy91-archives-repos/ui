import React, { Component } from 'react';
import {
  HyperlinkButton,
  Title,
  Subtitle,
  View,
} from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class DemoHyperlinkButton extends Component {
  static navigationOptions = {
    title: 'HyperlinkButton',
  };

  renderHeader() {
    return (
      <HyperlinkButton text="HyperlinkButton" />
    );
  }

  renderContent() {
    return (
      <View>
        <Title>States</Title>
        <View>
          <Subtitle>Disabled</Subtitle>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}
          >
            <HyperlinkButton text="HyperlinkButton" disabled />
          </View>
        </View>
        <Title>Variations</Title>
        <View>
          <Subtitle>Size</Subtitle>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <HyperlinkButton style={{ marginRight: 8 }} text="MINI" size="mini" />
            <HyperlinkButton style={{ marginRight: 8 }} text="SMALL" size="small" />
            <HyperlinkButton style={{ marginRight: 8 }} text="MEDIUM" size="medium" />
            <HyperlinkButton style={{ marginRight: 8 }} text="LARGE" size="large" />
            <HyperlinkButton style={{ marginRight: 8 }} text="BIG" size="big" />
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <DemoScreen
        HeaderComponent={() => this.renderHeader()}
        ContentComponent={() => this.renderContent()}
      />
    );
  }
}

export default DemoHyperlinkButton;
