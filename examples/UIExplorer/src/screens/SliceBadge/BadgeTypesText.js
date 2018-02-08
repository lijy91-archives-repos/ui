import React, { Component } from 'react';
import { Badge } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class BadgeTypesText extends Component {
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
          type="text"
          text="99+"
        />
      </SliceScreen>
    );
  }
}

export default BadgeTypesText;
