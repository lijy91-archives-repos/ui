/* eslint-disable */
import BrowserAppContainer from './navigators/BrowserAppContainer';
/* eslint-enable */
import AppNavigator from './navigators/AppNavigator';

const App = BrowserAppContainer(AppNavigator);

export default App;
