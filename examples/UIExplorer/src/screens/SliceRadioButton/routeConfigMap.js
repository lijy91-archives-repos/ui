import RadioButtonExample from './RadioButtonExample';
import RadioButtonStateDisabled from './RadioButtonStateDisabled';
import RadioButtonStateChecked from './RadioButtonStateChecked';

const routeConfigMap = {
  RadioButtonExample: {
    screen: RadioButtonExample,
    path: 'slices/radiobutton-example',
  },
  RadioButtonStateDisabled: {
    screen: RadioButtonStateDisabled,
    path: 'slices/radiobutton-state-disabled',
  },
  RadioButtonStateChecked: {
    screen: RadioButtonStateChecked,
    path: 'slices/radiobutton-state-checked',
  },
};

export default routeConfigMap;
