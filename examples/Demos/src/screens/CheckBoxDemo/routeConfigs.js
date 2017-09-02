import CheckBoxExampleScreen from './CheckBoxExample';
import CheckBoxStateDisabledScreen from './CheckBoxStateDisabled';
import CheckBoxStateCheckedScreen from './CheckBoxStateChecked';

const routeConfigs = {
  CheckBoxExample: {
    screen: CheckBoxExampleScreen,
    path: 'checkbox-example',
  },
  CheckBoxStateDisabled: {
    screen: CheckBoxStateDisabledScreen,
    path: 'checkbox-state-disabled',
  },
  CheckBoxStateChecked: {
    screen: CheckBoxStateCheckedScreen,
    path: 'checkbox-state-checked',
  },
};

export default routeConfigs;
