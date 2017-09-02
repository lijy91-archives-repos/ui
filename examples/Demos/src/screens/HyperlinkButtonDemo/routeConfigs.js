import HyperlinkButtonExampleScreen from './HyperlinkButtonExample';
import HyperlinkButtonStateDisabledScreen from './HyperlinkButtonStateDisabled';
import HyperlinkButtonStateLoadingScreen from './HyperlinkButtonStateLoading';
import HyperlinkButtonVariationsSizeScreen from './HyperlinkButtonVariationsSize';

const routeConfigs = {
  HyperlinkButtonExample: {
    screen: HyperlinkButtonExampleScreen,
    path: 'hyperlinkbutton-example',
  },
  HyperlinkButtonStateDisabled: {
    screen: HyperlinkButtonStateDisabledScreen,
    path: 'hyperlinkbutton-state-disabled',
  },
  HyperlinkButtonStateLoading: {
    screen: HyperlinkButtonStateLoadingScreen,
    path: 'hyperlinkbutton-state-loading',
  },
  HyperlinkButtonVariationsSize: {
    screen: HyperlinkButtonVariationsSizeScreen,
    path: 'hyperlinkbutton-variations-size',
  },
};

export default routeConfigs;
