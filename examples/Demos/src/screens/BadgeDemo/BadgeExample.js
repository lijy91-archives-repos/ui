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
        <Badge
          style={{
            alignSelf: 'center',
          }}
          text={'99+'}
        />
      </DemoScreen>
    );
  }
}

export default BadgeExample;
