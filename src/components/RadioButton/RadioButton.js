import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RNTouchableOpacity from '../RNTouchableOpacity';

import withStyles from '../../withStyles';
import Text from '../Text';
import Group from './Group';
import OuterCircle from './OuterCircle';
import InnerCircle from './InnerCircle';

const propTypes = {
  CircleComponent: PropTypes.element,
  children: PropTypes.element,
  text: PropTypes.string,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onCheckedChange: PropTypes.func,
};
const defaultProps = {
  CircleComponent: undefined,
  children: null,
  text: '',
  disabled: false,
  checked: false,
  onCheckedChange: undefined,
};
const contextTypes = {
  checkedValue: PropTypes.string,
  onChange: PropTypes.func,
};
const mapStyleToProps = [
  'activeOpacity',
];

class RadioButton extends PureComponent {
  render() {
    const props = this.props;
    let {
      CircleComponent,
      children,
      text,
      checked,
    } = props;
    const {
      value,
      onCheckedChange,
    } = props;

    const {
      checkedValue,
      onChange,
    } = this.context;

    if (!CircleComponent) {
      CircleComponent = (
        <OuterCircle>
          <InnerCircle />
        </OuterCircle>
      );
    }

    if (typeof children === 'string') {
      text = children;
      children = null;
    }

    if (!children) {
      children = (<Text>{text}</Text>);
    }

    if (checkedValue === value) {
      checked = true;
    }

    return (
      <RNTouchableOpacity
        {...props}
        onPress={() => {
          if (onCheckedChange) {
            onCheckedChange(!checked);
          }
          if (onChange) {
            onChange(value);
          }
        }}
      >
        {CircleComponent}
        {children}
      </RNTouchableOpacity>
    );
  }
}

RadioButton.propTypes = propTypes;
RadioButton.defaultProps = defaultProps;
RadioButton.contextTypes = contextTypes;

RadioButton.Group = Group;
RadioButton.OuterCircle = OuterCircle;
RadioButton.InnerCircle = InnerCircle;

export default withStyles('RadioButton', mapStyleToProps)(RadioButton);
