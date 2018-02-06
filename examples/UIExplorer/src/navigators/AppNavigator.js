import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import BrowserAppContainer from './BrowserAppContainer';

import routeConfigMap from './routeConfigMap';
import stackConfig from './stackConfig';

const DefaultNavigator = StackNavigator(routeConfigMap, stackConfig);
const AppNavigator = Platform.OS === 'web' ? BrowserAppContainer(DefaultNavigator) : DefaultNavigator;

export default AppNavigator;
