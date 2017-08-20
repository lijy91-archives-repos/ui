import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View as RNView } from 'react-native';

import withStyles from '../../withStyles';
import Text from '../Text';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  type: PropTypes.oneOf(['dot', 'text']),
  text: PropTypes.string,
};
const defaultProps = {
  children: undefined,
  type: 'text',
  text: '',
};

class Badge extends PureComponent {
  render() {
    let {
      text,
      children,
    } = this.props;
    const {
      type,
    } = this.props;

    if (typeof children === 'string') {
      text = children;
      children = null;
    }

    if (!children) {
      children = (<Text>{text}</Text>);
    }

    if (type === 'dot') {
      children = null;
    }

    return (
      <RNView
        {...this.props}
      >
        {children}
      </RNView>
    );
  }
}

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default withStyles('Badge')(Badge);
