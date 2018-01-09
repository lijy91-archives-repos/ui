import { AppRegistry, Platform } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('UIExplorer', () => App);
if (Platform.OS === 'web') {
  AppRegistry.runApplication('UIExplorer', {
    rootTag: document.getElementById('root'),
  });
}
