import {
  TabRouter,
  createNavigator,
} from 'react-navigation';

import AppFrame from './AppFrame';

import NoDemoScreen from '../screens/NoDemo';
import activityIndicatorDemoRouteConfigs from '../screens/ActivityIndicatorDemo/routeConfigs';
import badgeDemoRouteConfigs from '../screens/BadgeDemo/routeConfigs';
import buttonDemoRouteConfigs from '../screens/ButtonDemo/routeConfigs';
import cardDemoRouteConfigs from '../screens/CardDemo/routeConfigs';
import checkBoxDemoRouteConfigs from '../screens/CheckBoxDemo/routeConfigs';
import dividerDemoRouteConfigs from '../screens/DividerDemo/routeConfigs';
import hyperlinkButtonDemoRouteConfigs from '../screens/HyperlinkButtonDemo/routeConfigs';
import radioButtonDemoRouteConfigs from '../screens/RadioButtonDemo/routeConfigs';
import subtitleDemoRouteConfigs from '../screens/SubtitleDemo/routeConfigs';
import switchDemoRouteConfigs from '../screens/SwitchDemo/routeConfigs';
import textDemoRouteConfigs from '../screens/TextDemo/routeConfigs';
import textInputDemoRouteConfigs from '../screens/TextInputDemo/routeConfigs';
import titleDemoRouteConfigs from '../screens/TitleDemo/routeConfigs';
import viewDemoRouteConfigs from '../screens/ViewDemo/routeConfigs';

const routeConfigs = {
  NoDemo: {
    screen: NoDemoScreen,
  },
  ...activityIndicatorDemoRouteConfigs,
  ...badgeDemoRouteConfigs,
  ...buttonDemoRouteConfigs,
  ...cardDemoRouteConfigs,
  ...checkBoxDemoRouteConfigs,
  ...dividerDemoRouteConfigs,
  ...hyperlinkButtonDemoRouteConfigs,
  ...radioButtonDemoRouteConfigs,
  ...subtitleDemoRouteConfigs,
  ...switchDemoRouteConfigs,
  ...textDemoRouteConfigs,
  ...textInputDemoRouteConfigs,
  ...titleDemoRouteConfigs,
  ...viewDemoRouteConfigs,
};

const AppNavigator = createNavigator(TabRouter(routeConfigs))(AppFrame);

export default AppNavigator;
