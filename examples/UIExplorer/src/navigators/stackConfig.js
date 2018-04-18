import React from 'react';
import { AppBar } from '@blankapp/ui-pro';

const stackConfig = {
  initialRouteName: 'Home',
  headerMode: 'screen',
  navigationOptions: {
    header: props => <AppBar {...props} />,
  },
};

export default stackConfig;
