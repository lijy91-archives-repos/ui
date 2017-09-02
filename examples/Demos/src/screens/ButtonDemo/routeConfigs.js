import ButtonExampleScreen from './ButtonExample';
import ButtonTypesFlatScreen from './ButtonTypesFlat';
import ButtonTypesOutlineScreen from './ButtonTypesOutline';
import ButtonStateDisabledScreen from './ButtonStateDisabled';
import ButtonStateLoadingScreen from './ButtonStateLoading';
import ButtonVariationsSizeScreen from './ButtonVariationsSize';
import ButtonVariationsRoundedScreen from './ButtonVariationsRounded';
import ButtonVariationsCircularScreen from './ButtonVariationsCircular';
import ButtonVariationsFluidScreen from './ButtonVariationsFluid';

const routeConfigs = {
  ButtonExample: {
    screen: ButtonExampleScreen,
    path: 'button-example',
  },
  ButtonTypesFlat: {
    screen: ButtonTypesFlatScreen,
    path: 'button-types-flat',
  },
  ButtonTypesOutline: {
    screen: ButtonTypesOutlineScreen,
    path: 'button-types-outline',
  },
  ButtonStateDisabled: {
    screen: ButtonStateDisabledScreen,
    path: 'button-state-disabled',
  },
  ButtonStateLoading: {
    screen: ButtonStateLoadingScreen,
    path: 'button-state-loading',
  },
  ButtonVariationsSize: {
    screen: ButtonVariationsSizeScreen,
    path: 'button-variations-size',
  },
  ButtonVariationsRounded: {
    screen: ButtonVariationsRoundedScreen,
    path: 'button-variations-rounded',
  },
  ButtonVariationsCircular: {
    screen: ButtonVariationsCircularScreen,
    path: 'button-variations-circular',
  },
  ButtonVariationsFluid: {
    screen: ButtonVariationsFluidScreen,
    path: 'button-variations-fluid',
  },
};

export default routeConfigs;
