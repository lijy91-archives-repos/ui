import React, { Component } from 'react';
import { Badge } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class BadgeExample extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    return (
      <SliceScreen>
        <Badge
          style={{
            alignSelf: 'center',
          }}
          text="99+"
        />
      </SliceScreen>
    );
  }
}

export default BadgeExample;
