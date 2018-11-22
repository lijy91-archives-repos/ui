import React, { Component } from 'react';
import {
  StyleSheet,
  Text as RNText,
  View as RNView,
} from 'react-native';
import PropTypes from 'prop-types';
import withStyles from '../../withStyles';
import ListSectionTitle from './ListSectionTitle';

const { propTypes: RNTextProps } = RNText;

const propTypes = {
  title: PropTypes.string,
  titleStyle: RNTextProps.style,
};
const defaultProps = {
  title: '',
  titleStyle: null,
};

class ListSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let {
      title,
      titleStyle,
      ...restProps
    } = this.props;

    let titleView;
    if (title) {
      if (titleStyle && typeof titleStyle === 'number') {
        titleStyle = StyleSheet.flatten(titleStyle);
      }
      titleView = (
        <ListSectionTitle style={titleStyle}>
          {title}
        </ListSectionTitle>
      );
    }

    return (
      <RNView
        {...restProps}
      >
        {titleView}
      </RNView>
    );
  }
}

ListSection.propTypes = propTypes;
ListSection.defaultProps = defaultProps;

ListSection.Title = ListSectionTitle;

export default withStyles('ListSection')(ListSection);
