import React, { Component } from 'react';
import { View as RNView } from 'react-native';
import PropTypes from 'prop-types';
import withStyles from '../../withStyles';

const propTypes = {
  children: PropTypes.node,
};
const defaultProps = {
  children: null,
};
const contextTypes = {
  columns: PropTypes.number,
};

class GridColumn extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    const {
      children,
      style,
      ...restProps
    } = this.props;
    const {
      columns,
    } = this.context;

    let columnStyle = {
      width: `${(100 / columns).toFixed(2)}%`,
    };

    return (
      <RNView
        {...restProps}
        style={[
          columnStyle,
          style,
        ]}
      >
        {children}
      </RNView>
    );
  }
}


GridColumn.propTypes = propTypes;
GridColumn.defaultProps = defaultProps;
GridColumn.contextTypes = contextTypes;

export default withStyles('GridColumn')(GridColumn);
