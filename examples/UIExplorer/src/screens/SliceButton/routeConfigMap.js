import ButtonExample from './ButtonExample';
import ButtonTypesFlat from './ButtonTypesFlat';
import ButtonTypesOutline from './ButtonTypesOutline';
import ButtonStateDisabled from './ButtonStateDisabled';
import ButtonStateLoading from './ButtonStateLoading';
import ButtonVariationsSize from './ButtonVariationsSize';
import ButtonVariationsFluid from './ButtonVariationsFluid';

const routeConfigMap = {
  ButtonExample: {
    screen: ButtonExample,
    path: 'slices/button-example',
  },
  ButtonTypesFlat: {
    screen: ButtonTypesFlat,
    path: 'slices/button-types-flat',
  },
  ButtonTypesOutline: {
    screen: ButtonTypesOutline,
    path: 'slices/button-types-outline',
  },
  ButtonStateDisabled: {
    screen: ButtonStateDisabled,
    path: 'slices/button-state-disabled',
  },
  ButtonStateLoading: {
    screen: ButtonStateLoading,
    path: 'slices/button-state-loading',
  },
  ButtonVariationsSize: {
    screen: ButtonVariationsSize,
    path: 'slices/button-variations-size',
  },
  ButtonVariationsFluid: {
    screen: ButtonVariationsFluid,
    path: 'slices/button-variations-fluid',
  },
};

export default routeConfigMap;
