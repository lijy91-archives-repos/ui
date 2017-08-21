import React, { PureComponent } from 'react';
import { View as RNView } from 'react-native';
import PropTypes from 'prop-types';

import withStyles from '../../withStyles';

const propTypes = {
  rounded: PropTypes.bool,
};
const defaultProps = {
  rounded: true,
};

class Card extends PureComponent {
  render() {
    return (
      <RNView
        {...this.props}
      />
    );
  }
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default withStyles('Card')(Card);
