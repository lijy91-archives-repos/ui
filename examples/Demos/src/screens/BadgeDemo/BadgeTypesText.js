import React, { Component } from 'react';
import { Badge } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class BadgeTypesText extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <Badge type={'text'} text={'99+'} />
      </DemoScreen>
    );
  }
}

export default BadgeTypesText;
