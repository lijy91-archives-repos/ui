import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { HyperlinkButton } from '@blankapp/ui';
import {
  STATUSBAR_HEIGHT,
  APPBAR_HEIGHT,
} from '../utilities/Constants';
import imageIcMenuBack from '../resources/images/ic_menu_back.png';

import HomeScreen from '../screens/Home';
import ActivityIndicatorExampleScreen from '../screens/ActivityIndicatorExample';
import BadgeExampleScreen from '../screens/BadgeExample';
import ButtonExampleScreen from '../screens/ButtonExample';
import CardExampleScreen from '../screens/CardExample';
import CheckBoxExampleScreen from '../screens/CheckBoxExample';
import DividerExampleScreen from '../screens/DividerExample';
import HyperlinkButtonExampleScreen from '../screens/HyperlinkButtonExample';
import RadioButtonExampleScreen from '../screens/RadioButtonExample';
import SubtitleExampleScreen from '../screens/SubtitleExample';
import SwitchExampleScreen from '../screens/SwitchExample';
import TextExampleScreen from '../screens/TextExample';
import TextInputExampleScreen from '../screens/TextInputExample';
import TitleExampleScreen from '../screens/TitleExample';
import ViewExampleScreen from '../screens/ViewExample';

const routeConfigs = {
  Home: {
    screen: HomeScreen,
  },
  ActivityIndicatorExample: {
    screen: ActivityIndicatorExampleScreen,
  },
  BadgeExample: {
    screen: BadgeExampleScreen,
  },
  ButtonExample: {
    screen: ButtonExampleScreen,
  },
  CardExample: {
    screen: CardExampleScreen,
  },
  CheckBoxExample: {
    screen: CheckBoxExampleScreen,
  },
  DividerExample: {
    screen: DividerExampleScreen,
  },
  HyperlinkButtonExample: {
    screen: HyperlinkButtonExampleScreen,
  },
  RadioButtonExample: {
    screen: RadioButtonExampleScreen,
  },
  SubtitleExample: {
    screen: SubtitleExampleScreen,
  },
  SwitchExample: {
    screen: SwitchExampleScreen,
  },
  TextExample: {
    screen: TextExampleScreen,
  },
  TextInputExample: {
    screen: TextInputExampleScreen,
  },
  TitleExample: {
    screen: TitleExampleScreen,
  },
  ViewExample: {
    screen: ViewExampleScreen,
  },
};
const stackNavigatorConfig = {
  initialRouteName: 'Home',
  headerMode: 'screen',
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
      backgroundColor: 'rgb(33, 33, 33)',
      paddingTop: STATUSBAR_HEIGHT,
      height: APPBAR_HEIGHT + STATUSBAR_HEIGHT,
    },
    headerTitleStyle: {
      color: '#ffffff',
    },
    headerLeft: (
      <HyperlinkButton
        style={{ paddingLeft: 0, paddingRight: 0 }}
        onPress={() => {
          setTimeout(() => {
            navigation.goBack();
          }, 10);
        }}
      >
        <Image
          style={{ width: 40, height: 40 }}
          source={imageIcMenuBack}
        />
      </HyperlinkButton>
    ),
  }),
};

const AppNavigator = StackNavigator(routeConfigs, stackNavigatorConfig);

export default AppNavigator;
