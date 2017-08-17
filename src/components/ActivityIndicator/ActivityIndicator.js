import { ActivityIndicator as RNActivityIndicator } from 'react-native';
import withStyles from '../../withStyles';

const mapStyleToProps = [
  'color',
];
const ActivityIndicator = withStyles('ActivityIndicator', mapStyleToProps)(RNActivityIndicator);

export default ActivityIndicator;
