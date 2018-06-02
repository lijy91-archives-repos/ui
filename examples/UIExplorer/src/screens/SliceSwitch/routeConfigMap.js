import SwitchExample from './SwitchExample';
import SwitchStateDisabled from './SwitchStateDisabled';
import SwitchStateChecked from './SwitchStateChecked';

const routeConfigMap = {
  SwitchExample: {
    screen: SwitchExample,
    path: 'slices/switch-example',
  },
  SwitchStateDisabled: {
    screen: SwitchStateDisabled,
    path: 'slices/switch-state-disabled',
  },
  SwitchStateChecked: {
    screen: SwitchStateChecked,
    path: 'slices/switch-state-checked',
  },
};

export default routeConfigMap;
