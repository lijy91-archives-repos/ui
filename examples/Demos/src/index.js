import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@blankapp/ui';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <ThemeProvider>
    <App />
  </ThemeProvider>
), document.getElementById('root'));
registerServiceWorker();
