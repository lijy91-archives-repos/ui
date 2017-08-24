import React, { PureComponent } from 'react';
import { View } from '@blankapp/ui';

class SimplePageBody extends PureComponent {
  render() {
    return (
      <View
        {...this.props}
        style={{
          padding: 10,
        }}
      />
    );
  }
}

export default SimplePageBody;
