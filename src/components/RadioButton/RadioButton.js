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
};
const defaultProps = {
  CircleComponent: undefined,
  children: null,
  text: '',
  disabled: false,
  checked: false,
};
const contextTypes = {
  checkedValue: PropTypes.string,
  onCheckedChange: PropTypes.func,
};
const mapStyleToProps = [
  'activeOpacity',
];

class RadioButton extends PureComponent {
  render() {
    let {
      CircleComponent,
      children,
      text,
    } = this.props;
    const {
      value,
    } = this.props;

    const {
      onCheckedChange,
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

    return (
      <RNTouchableOpacity
        {...this.props}
        onPress={() => {
          onCheckedChange(value);
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
