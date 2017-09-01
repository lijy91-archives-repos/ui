import { AppRegistry } from 'react-native';
import UIExplorer from './src/App';

AppRegistry.registerComponent('UIExplorer', () => UIExplorer);
AppRegistry.runApplication('UIExplorer', {
  rootTag: document.getElementById('react-root'),
});
