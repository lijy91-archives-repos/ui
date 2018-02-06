import React, { Component } from 'react';
import {
  Badge,
  Subtitle,
  Title,
  View,
} from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class DemoBadge extends Component {
  static navigationOptions = {
    title: 'Badge',
  };

  renderHeader() {
    return (
      <Badge
        style={{
          alignSelf: 'center',
        }}
        type="text"
        text="99+"
      />
    );
  }

  renderContent() {
    return (
      <View>
        <Title>Types</Title>
        <View>
          <Subtitle>Dot</Subtitle>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}
          >
            <Badge type="dot" />
          </View>
          <Subtitle>Text</Subtitle>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}
          >
            <Badge type="text" text="99+" />
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

export default DemoBadge;
