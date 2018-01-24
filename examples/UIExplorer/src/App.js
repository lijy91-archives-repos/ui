import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from '@blankapp/ui';
import AppNavigator from './navigators/AppNavigator';

class App extends Component {
  constructor(props) {
    super(props);
    StatusBar.setBarStyle('light-content');
  }

  render() {
    return (
      <ThemeProvider>
        <AppNavigator
          ref={(nav) => {
            this.navigator = nav;
          }}
        />
      </ThemeProvider>
    );
  }
}

export default App;
