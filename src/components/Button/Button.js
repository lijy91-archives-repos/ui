import React, { PureComponent } from 'react';
import { StyleSheet, Text as RNText } from 'react-native';
import PropTypes from 'prop-types';
import RNTouchableOpacity from '../RNTouchableOpacity';

import ActivityIndicator from '../ActivityIndicator';
import Text from '../Text';

const propTypes = {
  ...RNTouchableOpacity.propTypes,
  text: PropTypes.string,
  textStyle: RNText.propTypes.style,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(['mini', 'small', 'medium', 'large', 'big']),
  rounded: PropTypes.bool,
  circular: PropTypes.bool,
  fluid: PropTypes.bool,
};
const defaultProps = {
  text: '',
  textStyle: undefined,
  disabled: false,
  loading: false,
  size: 'medium',
  rounded: false,
  circular: false,
  fluid: false,
};
const mapPropToStyles = [
  'activeOpacity',
];

class Button extends PureComponent {
  render() {
    let {
      children,
      text,
      textStyle,
      loading,
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

    let activityIndicator;
    if (loading) {
      activityIndicator = (
        <ActivityIndicator
          animating
          color="#ffffff"
        />
      );
    }

    return (
      <RNTouchableOpacity
        {...restProps}
      >
        {activityIndicator}
        {children}
      </RNTouchableOpacity>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
Button.mapPropToStyles = mapPropToStyles;

export default Button;
