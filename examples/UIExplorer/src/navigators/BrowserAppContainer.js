import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavigationActions, StackActions } from 'react-navigation';

const getAction = (router, path, params) => {
  const action = router.getActionForPathAndParams(path, params);
  if (action) {
    return action;
  }
  return StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Initialize' })],
  });
};

const addListener = () => {};

export default (NavigationAwareView) => {
  const initialAction = getAction(
    NavigationAwareView.router,
    window.location.pathname.substr(1),
  );
  const initialState = NavigationAwareView.router.getStateForAction(initialAction);

  class NavigationContainer extends PureComponent {
    static childContextTypes = {
      getActionForPathAndParams: PropTypes.func.isRequired,
      getURIForAction: PropTypes.func.isRequired,
      dispatch: PropTypes.func.isRequired,
    };
    constructor(props) {
      super(props);

      this.state = initialState;
    }
    getChildContext() {
      return {
        getActionForPathAndParams: this.getActionForPathAndParams,
        getURIForAction: this.getURIForAction,
        dispatch: this.dispatch,
      };
    }
    componentDidMount() {
      const navigation = {
        state: this.state.routes[this.state.index],
        dispatch: this.dispatch,
        addListener,
      };
      const screenOptions = NavigationAwareView.router.getScreenOptions(navigation);
      document.title = screenOptions.title;
      window.onpopstate = (e) => {
        e.preventDefault();
        const action = getAction(
          NavigationAwareView.router,
          window.location.pathname.substr(1),
        );
        if (action) this.dispatch(action);
      };
    }
    componentWillUpdate(props, state) {
      const {
        path,
        params,
      } = NavigationAwareView.router.getPathAndParamsForState(state);
      const maybeHash = params && params.hash ? `#${params.hash}` : '';
      const uri = `/${path}${maybeHash}`;
      if (window.location.pathname !== uri) {
        window.history.pushState({}, state.title, uri);
      }
      const navigation = {
        state: state.routes[state.index],
        dispatch: this.dispatch,
        addListener,
      };
      const screenOptions = NavigationAwareView.router.getScreenOptions(navigation);
      document.title = screenOptions.title;
    }
    componentDidUpdate() {
      const {
        params,
      } = NavigationAwareView.router.getPathAndParamsForState(this.state);
      if (params && params.hash) {
        document.getElementById(params.hash).scrollIntoView();
      }
    }
    getURIForAction(action) {
      const state =
        NavigationAwareView.router.getStateForAction(action, this.state) ||
        this.state;
      const {
        path,
      } = NavigationAwareView.router.getPathAndParamsForState(state);
      return `/${path}`;
    }
    getActionForPathAndParams(path, params) {
      return NavigationAwareView.router.getActionForPathAndParams(path, params);
    }
    dispatch = (action) => {
      const state = NavigationAwareView.router.getStateForAction(
        action,
        this.state,
      );

      if (!state) {
        return true;
      }

      if (state !== this.state) {
        this.setState(state);
        return true;
      }
      return false;
    };
    render() {
      return (
        <NavigationAwareView
          navigation={{
            state: this.state,
            dispatch: this.dispatch,
            addListener,
          }}
        />
      );
    }
  }
  return NavigationContainer;
};
