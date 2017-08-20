import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RNTouchableOpacity from '../RNTouchableOpacity';

import withStyles from '../../withStyles';
import Background from './Background';
import Knob from './Knob';

const propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onCheckedChange: PropTypes.func,
};
const defaultProps = {
  disabled: false,
  checked: false,
  onCheckedChange: undefined,
};
const mapStyleToProps = [
  'activeOpacity',
];

class Switch extends PureComponent {
  render() {
    let {
      onCheckedChange,
    } = this.props;
    const { checked } = this.props;

    if (!onCheckedChange) {
      onCheckedChange = () => {};
    }

    return (
      <RNTouchableOpacity
        {...this.props}
        onPress={() => {
          onCheckedChange(!checked);
        }}
      >
        <Background />
        <Knob />
      </RNTouchableOpacity>
    );
  }
}

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

Switch.Background = Background;
Switch.Knob = Knob;

export default withStyles('Switch', mapStyleToProps)(Switch);
