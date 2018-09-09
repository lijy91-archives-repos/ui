import React, { PureComponent } from 'react';
import { Image as RNImage } from 'react-native';
import PropTypes from 'prop-types';
import withStyles from '../../withStyles';

const propTypes = {
  ...RNImage.propTypes,
  size: PropTypes.oneOf(['mini', 'small', 'medium', 'large', 'big']),
};
const defaultProps = {
  ...RNImage.defaultProps,
  size: 'medium',
};

class Avatar extends PureComponent {
  render() {
    return (
      <RNImage
        {...this.props}
      />
    );
  }
}

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default withStyles('Avatar')(Avatar);
