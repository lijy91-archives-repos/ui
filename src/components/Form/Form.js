import { View as RNView } from 'react-native';
import withStyles from '../../withStyles';

import FormField from './FormField';

const Form = withStyles('Form')(RNView);

Form.Field = FormField;

export default Form;
