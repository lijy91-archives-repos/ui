import { AppRegistry } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('UIExplorer', () => App);
AppRegistry.runApplication('UIExplorer', {
  rootTag: document.getElementById('react-root'),
});
