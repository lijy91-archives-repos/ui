import React, { Component } from 'react';
import { Badge } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class BadgeTypesDot extends Component {
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
          type={'dot'}
        />
      </DemoScreen>
    );
  }
}

export default BadgeTypesDot;
