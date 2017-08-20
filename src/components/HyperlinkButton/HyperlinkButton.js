import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RNTouchableOpacity from '../RNTouchableOpacity';

import withStyles from '../../withStyles';
import ActivityIndicator from '../ActivityIndicator';
import Text from '../Text';

const propTypes = {
  ...RNTouchableOpacity.propTypes,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(['mini', 'small', 'medium', 'large', 'big']),
};
const defaultProps = {
  text: '',
  disabled: false,
  loading: false,
  size: 'medium',
};
const mapStyleToProps = [
  'activeOpacity',
];

class HyperlinkButton extends PureComponent {
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

HyperlinkButton.propTypes = propTypes;
HyperlinkButton.defaultProps = defaultProps;

export default withStyles('HyperlinkButton', mapStyleToProps)(HyperlinkButton);
