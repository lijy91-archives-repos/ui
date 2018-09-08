import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View as RNView,
  Text as RNText,
} from 'react-native';
import withStyles from '../../withStyles';
import Text from '../Text';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  type: PropTypes.oneOf(['dot', 'text']),
  text: PropTypes.string,
  textStyle: RNText.propTypes.style,
};
const defaultProps = {
  children: null,
  type: 'text',
  text: '',
  textStyle: null,
};

class Badge extends PureComponent {
  render() {
    let {
      children,
      type,
      text,
      textStyle,
      ...restProps
    } = this.props;

    if (typeof children === 'string') {
      text = children;
      children = null;
    }

    if (!children) {
      if (textStyle && typeof textStyle === 'number') {
        textStyle = StyleSheet.flatten(textStyle);
      }
      children = (
        <Text
          style={textStyle}
        >
          {text}
        </Text>
      );
    }

    if (type === 'dot') {
      children = null;
    }

    return (
      <RNView
        {...restProps}
      >
        {children}
      </RNView>
    );
  }
}

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default withStyles('Badge')(Badge);
