import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RNTouchableOpacity from '../RNTouchableOpacity';

import withStyles from '../../withStyles';
import Knob from './Knob';

const propTypes = {
  checked: PropTypes.bool,
  onCheckedChange: PropTypes.func,
};
const defaultProps = {
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
        <Knob />
      </RNTouchableOpacity>
    );
  }
}

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default withStyles('Switch', mapStyleToProps)(Switch);
