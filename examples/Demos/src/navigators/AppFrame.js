import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';

/* eslint-disable */
class AppFrame extends Component {
  constructor(props) {
    super(props);
    this.state = { isMobileMenuOpen: false };
  }

  render() {
    const { navigation, router } = this.props;
    const childNavigation = addNavigationHelpers({
      ...navigation,
      state: navigation.state.routes[navigation.state.index],
    });
    const { state } = navigation;
    const ScreenView = router.getComponentForRouteName(
      state.routes[state.index].routeName
    );
    const { routes, index } = state;
    const route = routes[index];
    const hasChildNavigation = !!route.routes;
    return (
      <div>
        <ScreenView navigation={childNavigation} />
      </div>
    );
  }
}

export default AppFrame;
/* eslint-enable */
