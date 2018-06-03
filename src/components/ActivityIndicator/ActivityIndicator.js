import React, { PureComponent } from 'react';
import { ActivityIndicator as RNActivityIndicator } from 'react-native';
// import PropTypes from 'prop-types';
import withStyles from '../../withStyles';

const propTypes = {
};
const defaultProps = {
};
const mapPropToStyles = [
  'size',
  'color',
];

class ActivityIndicator extends PureComponent {
  render() {
    let {
      ...restProps
    } = this.props;

    return (
      <RNActivityIndicator
        {...restProps}
      />
    );
  }
}

ActivityIndicator.propTypes = propTypes;
ActivityIndicator.defaultProps = defaultProps;

export default withStyles('ActivityIndicator', mapPropToStyles)(ActivityIndicator);
