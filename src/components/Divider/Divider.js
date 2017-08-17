import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View as RNView } from 'react-native';

import withStyles from '../../withStyles';

const propTypes = {
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
};

const defaultProps = {
  orientation: 'horizontal',
};

class Divider extends PureComponent {
  render() {
    return (
      <RNView
        {...this.props}
      />
    );
  }
}

Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;

export default withStyles('Divider')(Divider);
