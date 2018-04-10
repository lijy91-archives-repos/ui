import React, { PureComponent } from 'react';
import { StyleSheet, Text as RNText } from 'react-native';
import PropTypes from 'prop-types';
import RNTouchableOpacity from '../RNTouchableOpacity';

import withStyles from '../../withStyles';
import Text from '../Text';

const propTypes = {
  ...RNTouchableOpacity.propTypes,
  text: PropTypes.string,
  textStyle: RNText.propTypes.style,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['mini', 'small', 'medium', 'large', 'big']),
};
const defaultProps = {
  text: '',
  textStyle: undefined,
  disabled: false,
  size: 'medium',
};
const mapStyleToProps = [
  'activeOpacity',
];

class HyperlinkButton extends PureComponent {
  render() {
    let {
      children,
      text,
      textStyle,
      ...restProps
    } = this.props;

    if (typeof children === 'string') {
      text = children;
      children = null;
    }

    if (!children) {
      if (textStyle && typeof textStyle === 'number') {
        textStyle = StyleSheet.flatten(textStyle);
      }
      children = (<Text style={textStyle} >{text}</Text>);
    }

    return (
      <RNTouchableOpacity
        {...restProps}
      >
        {children}
      </RNTouchableOpacity>
    );
  }
}

HyperlinkButton.propTypes = propTypes;
HyperlinkButton.defaultProps = defaultProps;

export default withStyles('HyperlinkButton', mapStyleToProps)(HyperlinkButton);
