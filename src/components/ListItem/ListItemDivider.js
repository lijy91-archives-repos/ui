import React, { PureComponent } from 'react';
import { View as RNView } from 'react-native';
import Divider from '../Divider';
import withStyles from '../../withStyles';

// eslint-disable-next-line
class ListItemDivider extends PureComponent {
  render() {
    const { ...restProps } = this.props;
    return (
      <RNView
        {...restProps}
      >
        <Divider />
      </RNView>
    );
  }
}

export default withStyles('ListItemDivider')(ListItemDivider);
