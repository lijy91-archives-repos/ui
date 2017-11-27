import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View as RNView } from 'react-native';

import withStyles from '../../withStyles';

const propTypes = {
  checkedValue: PropTypes.string,
  onChange: PropTypes.func,
};
const defaultProps = {
  checkedValue: undefined,
  onChange: () => {},
};
const childContextTypes = {
  checkedValue: PropTypes.string,
  onChange: PropTypes.func,
};

class Group extends PureComponent {
  getChildContext() {
    const { checkedValue, onChange } = this.props;
    return {
      checkedValue,
      onChange,
    };
  }

  render() {
    return (
      <RNView
        {...this.props}
      />
    );
  }
}

Group.propTypes = propTypes;
Group.defaultProps = defaultProps;
Group.childContextTypes = childContextTypes;

export default withStyles('Group')(Group);
