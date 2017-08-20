import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Image as RNImage } from 'react-native';
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
  checked: PropTypes.bool,
  onCheckedChange: PropTypes.func,
};
const defaultProps = {
  children: null,
  text: '',
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
      onCheckedChange,
    } = this.props;
    const { checked } = this.props;

    if (typeof children === 'string') {
      text = children;
      children = null;
    }

    if (!children) {
      children = (<Text>{text}</Text>);
    }

    if (!onCheckedChange) {
      onCheckedChange = () => {};
    }

    const checkMarkImage = <RNImage source={imageIcCheckmarkChecked} />;
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
