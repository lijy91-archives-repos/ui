import { TextInput as RNTextInput } from 'react-native';
import withStyles from '../../withStyles';

const mapPropToStyles = [
  'placeholderTextColor',
  'selectionColor',
  'underlineColorAndroid',
];

export default withStyles('TextInput', mapPropToStyles)(RNTextInput);
