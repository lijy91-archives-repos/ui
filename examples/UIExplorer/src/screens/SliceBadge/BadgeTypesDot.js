import React, { Component } from 'react';
import { Badge } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class BadgeTypesDot extends Component {
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
          type="dot"
        />
      </SliceScreen>
    );
  }
}

export default BadgeTypesDot;
