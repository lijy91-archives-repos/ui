import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View as RNView,
  Text as RNText,
} from 'react-native';
import PropTypes from 'prop-types';
import withStyles from '../../withStyles';
import DividerLabel from './DividerLabel';
import DividerLine from './DividerLine';

const { propTypes: RNTextProps } = RNText;

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  label: PropTypes.string,
  labelStyle: RNTextProps.style,
};
const defaultProps = {
  children: null,
  orientation: 'horizontal',
  label: null,
  labelStyle: null,
};

class Divider extends PureComponent {
  render() {
    let {
      children,
      label,
      labelStyle,
      ...restProps
    } = this.props;

    if (typeof children === 'string') {
      label = children;
      children = null;
    }

    if (!children && label) {
      if (labelStyle && typeof textStyle === 'number') {
        labelStyle = StyleSheet.flatten(labelStyle);
      }
      children = (
        <DividerLabel
          style={labelStyle}
        >
          {label}
        </DividerLabel>
      );
    }

    return (
      <RNView
        {...restProps}
      >
        <DividerLine />
        {children}
        {children && <DividerLine />}
      </RNView>
    );
  }
}

Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;

export default withStyles('Divider')(Divider);
