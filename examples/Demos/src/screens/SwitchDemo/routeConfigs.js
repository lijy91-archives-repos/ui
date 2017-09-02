import SwitchExampleScreen from './SwitchExample';
import SwitchStateDisabledScreen from './SwitchStateDisabled';
import SwitchStateCheckedScreen from './SwitchStateChecked';

const routeConfigs = {
  SwitchExample: {
    screen: SwitchExampleScreen,
    path: 'switch-example',
  },
  SwitchStateDisabled: {
    screen: SwitchStateDisabledScreen,
    path: 'switch-state-disabled',
  },
  SwitchStateChecked: {
    screen: SwitchStateCheckedScreen,
    path: 'switch-state-checked',
  },
};

export default routeConfigs;
