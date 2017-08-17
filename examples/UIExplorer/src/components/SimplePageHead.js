import React, { PureComponent } from 'react';
import { View } from '@blankapp/ui';

class SimplePageHead extends PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <View
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          height: 160,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </View>
    );
  }
}

export default SimplePageHead;
