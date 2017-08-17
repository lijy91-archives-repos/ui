import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RNTouchableOpacity from '../RNTouchableOpacity';

import withStyles from '../../withStyles';
import ActivityIndicator from '../ActivityIndicator';
import Text from '../Text';

const propTypes = {
  ...RNTouchableOpacity.propTypes,
  text: PropTypes.string,
  size: PropTypes.oneOf(['mini', 'small', 'medium', 'large', 'big']),
  rounded: PropTypes.bool,
  fluid: PropTypes.bool,
  loading: PropTypes.bool,
};
const defaultProps = {
  text: '',
  size: 'medium',
  rounded: true,
  fluid: false,
  loading: false,
};
const mapStyleToProps = [
  'activeOpacity',
];

class Button extends PureComponent {
  render() {
    let {
      text,
      children,
    } = this.props;
    const loading = this.props.loading;

    if (typeof children === 'string') {
      text = children;
      children = null;
    }

    if (!children) {
      children = (<Text>{text}</Text>);
    }

    let activityIndicator;
    if (loading) {
      activityIndicator = (
        <ActivityIndicator
          animating
          color={'#ffffff'}
        />
      );
    }

    return (
      <RNTouchableOpacity
        {...this.props}
      >
        {activityIndicator}
        {children}
      </RNTouchableOpacity>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default withStyles('Button', mapStyleToProps)(Button);
