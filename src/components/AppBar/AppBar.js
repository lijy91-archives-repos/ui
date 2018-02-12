import React, { PureComponent } from 'react';
import {
  // Platform,
  SafeAreaView as RNSafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';
import withStyles from '../../withStyles';

import AppBarTitle from './AppBarTitle';
import AppBarButton from './AppBarButton';

const propTypes = {
  LeftComponent: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
  ]),
  TitleComponent: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
  ]),
  RightComponent: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
  ]),
};
const defaultProps = {
  LeftComponent: null,
  TitleComponent: null,
  RightComponent: null,
};

class AppBar extends PureComponent {
  constructor(props) {
    super(props);

    this.navigateBack = this.navigateBack.bind(this);

    this.renderLeftComponent = this.renderLeftComponent.bind(this);
    this.renderTitleComponent = this.renderTitleComponent.bind(this);
    this.renderRightComponent = this.renderRightComponent.bind(this);
  }

  navigateBack() {
    requestAnimationFrame(() => {
      // this.props.navigation.goBack(this.props.scene.route.key);
    });
  }

  renderLeftComponent() {
    return (
      null
    );
  }

  renderTitleComponent() {
    return (
      null
    );
  }

  renderRightComponent() {
    return (
      null
    );
  }

  render() {
    return (
      <RNSafeAreaView
        {...this.props}
      >
        {this.renderLeft}
        {this.render}
      </RNSafeAreaView>
    );
  }
}

AppBar.Title = AppBarTitle;
AppBar.Button = AppBarButton;

AppBar.propTypes = propTypes;
AppBar.defaultProps = defaultProps;

export default withStyles('AppBar')(AppBar);
