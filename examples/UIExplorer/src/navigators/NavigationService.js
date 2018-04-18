import { NavigationActions } from 'react-navigation';

let topLevelNavigator;

const setTopLevelNavigator = (navigatorRef) => {
  topLevelNavigator = navigatorRef;
};

const navigate = (routeName, params) => {
  const options = NavigationActions.navigate({
    type: NavigationActions.NAVIGATE,
    routeName,
    params,
  });
  topLevelNavigator.dispatch(options);
};

export default {
  navigate,
  setTopLevelNavigator,
};
