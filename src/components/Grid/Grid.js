import React, { Component } from 'react';
import { View as RNView } from 'react-native';
import PropTypes from 'prop-types';
import withStyles from '../../withStyles';
import GridColumn from './GridColumn';
import GridRow from './GridRow';

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

class Grid extends Component {
  static childContextTypes = {
    columns: PropTypes.number,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  getChildContext() {
    const { columns } = this.props;
    return { columns };
  }

  render() {
    const {
      children,
      style,
      ...restProps
    } = this.props;

    let gridStyle;
    let firstElement = children;
    if (Array.isArray(children)) {
      firstElement = children[0];
    }

    if (firstElement.type.displayName === 'StyledGridColumn') {
      gridStyle = {
        flexDirection: 'row',
        flexWrap: 'wrap',
      };
    }

    return (
      <RNView
        {...restProps}
        style={[
          gridStyle,
          style,
        ]}
      >
        {children}
      </RNView>
    );
  }
}


Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;
Grid.childContextTypes = childContextTypes;

Grid.Column = GridColumn;
Grid.Row = GridRow;

export default withStyles('Grid')(Grid);
