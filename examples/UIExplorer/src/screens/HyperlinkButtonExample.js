import React, { Component } from 'react';
import { Screen, Title, Subtitle, View, HyperlinkButton } from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';
import SimplePageBody from '../components/SimplePageBody';

class HyperlinkButtonExample extends Component {
  static navigationOptions = {
    title: 'HyperlinkButton',
  };

  render() {
    return (
      <Screen>
        <SimplePageHead>
          <HyperlinkButton text={'HyperlinkButton'} />
        </SimplePageHead>
        <SimplePageBody>
          <Title>States</Title>
          <View>
            <Subtitle>Disabled</Subtitle>
            <View
              style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
              }}
            >
              <HyperlinkButton text={'HyperlinkButton'} disabled />
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
              <HyperlinkButton style={{ marginRight: 8 }} text={'MINI'} size={'mini'} />
              <HyperlinkButton style={{ marginRight: 8 }} text={'SMALL'} size={'small'} />
              <HyperlinkButton style={{ marginRight: 8 }} text={'MEDIUM'} size={'medium'} />
              <HyperlinkButton style={{ marginRight: 8 }} text={'LARGE'} size={'large'} />
              <HyperlinkButton style={{ marginRight: 8 }} text={'BIG'} size={'big'} />
            </View>
          </View>
        </SimplePageBody>
      </Screen>
    );
  }
}

export default HyperlinkButtonExample;
