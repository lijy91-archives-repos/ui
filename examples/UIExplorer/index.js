import { AppRegistry, Platform } from 'react-native';
import iconFont from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';
import App from './src/App';

AppRegistry.registerComponent('UIExplorer', () => App);
if (Platform.OS === 'web') {
  const iconFontStyles = `@font-face {
    src: url(${iconFont});
    font-family: 'Material Icons';
  }`;

  // Create stylesheet
  const style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = iconFontStyles;
  } else {
    style.appendChild(document.createTextNode(iconFontStyles));
  }

  // Inject stylesheet
  document.head.appendChild(style);
  AppRegistry.runApplication('UIExplorer', {
    rootTag: document.getElementById('root'),
  });
}
