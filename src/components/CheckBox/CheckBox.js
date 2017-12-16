import React, { PureComponent } from 'react';
import { StyleSheet, Image as RNImage, Text as RNText } from 'react-native';
import PropTypes from 'prop-types';
import RNTouchableOpacity from '../RNTouchableOpacity';

import withStyles from '../../withStyles';
import Text from '../Text';
import CheckMark from './CheckMark';

import imageIcCheckmarkChecked from '../../resources/images/ic_checkmark_checked.png';

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
const mapStyleToProps = [
  'activeOpacity',
];

class CheckBox extends PureComponent {
  render() {
    let {
      children,
      text,
      textStyle,
      onCheckedChange,
    } = this.props;
    const { checked } = this.props;

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

    const checkMarkImage = <RNImage style={{ width: '100%', height: '100%' }} source={imageIcCheckmarkChecked} />;
    return (
      <RNTouchableOpacity
        {...this.props}
        onPress={() => {
          onCheckedChange(!checked);
        }}
      >
        <CheckMark>
          {checked ? checkMarkImage : null}
        </CheckMark>
        {children}
      </RNTouchableOpacity>
    );
  }
}

CheckBox.propTypes = propTypes;
CheckBox.defaultProps = defaultProps;

CheckBox.CheckMark = CheckMark;

export default withStyles('CheckBox', mapStyleToProps)(CheckBox);
