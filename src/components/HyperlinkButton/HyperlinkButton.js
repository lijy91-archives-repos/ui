import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RNTouchableOpacity from '../RNTouchableOpacity';

import withStyles from '../../withStyles';
import Text from '../Text';

const propTypes = {
  ...RNTouchableOpacity.propTypes,
  text: PropTypes.string,
  size: PropTypes.oneOf(['mini', 'small', 'medium', 'large', 'big']),
};
const defaultProps = {
  text: '',
  size: 'medium',
  loading: false,
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

    if (typeof children === 'string') {
      text = children;
      children = null;
    }

    if (!children) {
      children = (<Text>{text}</Text>);
    }

    return (
      <RNTouchableOpacity
        {...this.props}
      >
        {children}
      </RNTouchableOpacity>
    );
  }
}

HyperlinkButton.propTypes = propTypes;
HyperlinkButton.defaultProps = defaultProps;

export default withStyles('HyperlinkButton', mapStyleToProps)(HyperlinkButton);
