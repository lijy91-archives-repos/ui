import React, { PureComponent } from 'react';
import { View } from '@blankapp/ui';

class DemoScreen extends PureComponent {
  render() {
    return (
      <View
        {...this.props}
        style={{
          backgroundColor: '#eee',
          minHeight: 140,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      />
    );
  }
}

export default DemoScreen;
