import React, { Component } from 'react';
import { View as RNView } from 'react-native';
import PropTypes from 'prop-types';
import withStyles from '../../withStyles';

const propTypes = {
  children: PropTypes.node,
  columns: PropTypes.number,
};
const defaultProps = {
  children: null,
  columns: 4,
};
const childContextTypes = {
  columns: PropTypes.number,
};
const contextTypes = {
  columns: PropTypes.number,
};

class GridRow extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  getChildContext() {
    const { columns: propColumns } = this.props;
    const { columns: contextColumns } = this.context;
    return { columns: propColumns || contextColumns };
  }

  render() {
    const {
      children,
      style,
      ...restProps
    } = this.props;

    let rowStyle;
    let firstElement = children;
    if (Array.isArray(children)) {
      firstElement = children[0];
    }

    if (firstElement.type.displayName === 'StyledGridColumn') {
      rowStyle = {
        flexDirection: 'row',
        flexWrap: 'wrap',
      };
    }

    return (
      <RNView
        {...restProps}
        style={[
          rowStyle,
          style,
        ]}
      >
        {children}
      </RNView>
    );
  }
}


GridRow.propTypes = propTypes;
GridRow.defaultProps = defaultProps;
GridRow.childContextTypes = childContextTypes;
GridRow.contextTypes = contextTypes;

export default withStyles('GridRow')(GridRow);
