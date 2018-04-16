import { ActivityIndicator as RNActivityIndicator } from 'react-native';
import withStyles from '../../withStyles';

const mapPropToStyles = [
  'color',
];
const ActivityIndicator = withStyles('ActivityIndicator', mapPropToStyles)(RNActivityIndicator);

export default ActivityIndicator;
