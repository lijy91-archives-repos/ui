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

const { propTypes: RNViewProps } = RNText;
const { propTypes: RNTextProps } = RNText;

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  lineStyle: RNViewProps.style,
  label: PropTypes.string,
  labelStyle: RNTextProps.style,
};
const defaultProps = {
  children: null,
  orientation: 'horizontal',
  lineStyle: null,
  label: null,
  labelStyle: null,
};

class Divider extends PureComponent {
  render() {
    let {
      children,
      lineStyle,
      label,
      labelStyle,
      ...restProps
    } = this.props;

    if (typeof children === 'string') {
      label = children;
      children = null;
    }

    if (!children && label) {
      if (labelStyle && typeof labelStyle === 'number') {
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

    if (lineStyle && typeof lineStyle === 'number') {
      lineStyle = StyleSheet.flatten(lineStyle);
    }

    return (
      <RNView
        {...restProps}
      >
        <DividerLine style={lineStyle} />
        {children}
        {children && <DividerLine style={lineStyle} />}
      </RNView>
    );
  }
}

Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;

export default withStyles('Divider')(Divider);
