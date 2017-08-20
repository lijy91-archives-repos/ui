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
            <Subtitle>Loading</Subtitle>
            <View
              style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
              }}
            >
              <HyperlinkButton text={'HyperlinkButton'} loading />
            </View>
          </View>
          <Title>Variations</Title>
          <View>
            <Subtitle>Size</Subtitle>
            <View
              style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
              }}
            >
              <HyperlinkButton text={'MINI'} size={'mini'} />
              <HyperlinkButton text={'SMALL'} size={'small'} />
              <HyperlinkButton text={'MEDIUM'} size={'medium'} />
              <HyperlinkButton text={'LARGE'} size={'large'} />
              <HyperlinkButton text={'BIG'} size={'big'} />
            </View>
          </View>
        </SimplePageBody>
      </Screen>
    );
  }
}

export default HyperlinkButtonExample;
