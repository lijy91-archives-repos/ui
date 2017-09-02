import React, { Component } from 'react';
import { Badge } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class BadgeExample extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <Badge text={'99+'} />
      </DemoScreen>
    );
  }
}

export default BadgeExample;
