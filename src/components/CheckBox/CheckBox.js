import React, { PureComponent } from 'react';
import { StyleSheet, Text as RNText } from 'react-native';
import PropTypes from 'prop-types';
import RNTouchableOpacity from '../RNTouchableOpacity';

import withStyles from '../../withStyles';
import Text from '../Text';
import CheckMark from './CheckMark';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
  text: PropTypes.string,
  textStyle: RNText.propTypes.style,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onCheckedChange: PropTypes.func,
};
const defaultProps = {
  children: null,
  text: '',
  textStyle: undefined,
  disabled: false,
  checked: false,
  onCheckedChange: undefined,
};
const mapPropToStyles = [
  'activeOpacity',
];

class CheckBox extends PureComponent {
  render() {
    let {
      children,
      text,
      textStyle,
      checked,
      onCheckedChange,
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
      children = (<Text>{text}</Text>);
    }

    if (!onCheckedChange) {
      onCheckedChange = () => {};
    }

    return (
      <RNTouchableOpacity
        {...restProps}
        onPress={() => {
          onCheckedChange(!checked);
        }}
      >
        <CheckMark checked={checked} />
        {children}
      </RNTouchableOpacity>
    );
  }
}

CheckBox.propTypes = propTypes;
CheckBox.defaultProps = defaultProps;

CheckBox.CheckMark = CheckMark;

export default withStyles('CheckBox', mapPropToStyles)(CheckBox);
