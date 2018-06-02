import CheckBoxExample from './CheckBoxExample';
import CheckBoxStateDisabled from './CheckBoxStateDisabled';
import CheckBoxStateChecked from './CheckBoxStateChecked';

const routeConfigMap = {
  CheckBoxExample: {
    screen: CheckBoxExample,
    path: 'slices/checkbox-example',
  },
  CheckBoxStateDisabled: {
    screen: CheckBoxStateDisabled,
    path: 'slices/checkbox-state-disabled',
  },
  CheckBoxStateChecked: {
    screen: CheckBoxStateChecked,
    path: 'slices/checkbox-state-checked',
  },
};

export default routeConfigMap;
