import React, { PureComponent } from 'react';
import { View } from '@blankapp/ui';

class SimplePageHead extends PureComponent {
  render() {
    return (
      <View
        {...this.props}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          height: 160,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    );
  }
}

export default SimplePageHead;
