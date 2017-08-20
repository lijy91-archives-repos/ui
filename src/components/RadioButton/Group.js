import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View as RNView } from 'react-native';

import withStyles from '../../withStyles';

const propTypes = {
  onCheckedChange: PropTypes.func,
};
const defaultProps = {
  onCheckedChange: () => {},
};
const childContextTypes = {
  checkedValue: PropTypes.string,
  onCheckedChange: PropTypes.func,
};

class Group extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      checkedValue: undefined,
    };
  }

  getChildContext() {
    return {
      checkedValue: this.state.checkedValue,
      onCheckedChange: (checkedValue) => {
        this.setState({
          checkedValue,
        });
        this.props.onCheckedChange(checkedValue);
      },
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
