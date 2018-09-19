import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, View as RNView } from 'react-native';

import withStyles from '../../withStyles';

const propTypes = {
  barStyle: PropTypes.string,
};

const defaultProps = {
  barStyle: 'dark-content',
};

class Screen extends PureComponent {
  render() {
    const {
      barStyle,
      children,
    } = this.props;
    return (
      <RNView
        {...this.props}
      >
        <StatusBar barStyle={barStyle} />
        {children}
      </RNView>
    );
  }
}

Screen.propTypes = propTypes;
Screen.defaultProps = defaultProps;

export default withStyles('Screen')(Screen);
