import React from 'react';
import { Platform, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { HyperlinkButton } from '@blankapp/ui';
import BrowserAppContainer from './BrowserAppContainer';
import imageIcMenuBack from '../resources/images/ic_menu_back.png';

import Home from '../screens/Home';
import ActivityIndicatorExample from '../screens/ActivityIndicatorExample';
import BadgeExample from '../screens/BadgeExample';
import ButtonExample from '../screens/ButtonExample';
import CardExample from '../screens/CardExample';
import CheckBoxExample from '../screens/CheckBoxExample';
import DividerExample from '../screens/DividerExample';
import HyperlinkButtonExample from '../screens/HyperlinkButtonExample';
import RadioButtonExample from '../screens/RadioButtonExample';
import SubtitleExample from '../screens/SubtitleExample';
import SwitchExample from '../screens/SwitchExample';
import TextExample from '../screens/TextExample';
import TextInputExample from '../screens/TextInputExample';
import TitleExample from '../screens/TitleExample';
import ViewExample from '../screens/ViewExample';

const routeConfigMap = {
  Home: {
    screen: Home,
  },
  ActivityIndicatorExample: {
    screen: ActivityIndicatorExample,
  },
  BadgeExample: {
    screen: BadgeExample,
  },
  ButtonExample: {
    screen: ButtonExample,
  },
  CardExample: {
    screen: CardExample,
  },
  CheckBoxExample: {
    screen: CheckBoxExample,
  },
  DividerExample: {
    screen: DividerExample,
  },
  HyperlinkButtonExample: {
    screen: HyperlinkButtonExample,
  },
  RadioButtonExample: {
    screen: RadioButtonExample,
  },
  SubtitleExample: {
    screen: SubtitleExample,
  },
  SwitchExample: {
    screen: SwitchExample,
  },
  TextExample: {
    screen: TextExample,
  },
  TextInputExample: {
    screen: TextInputExample,
  },
  TitleExample: {
    screen: TitleExample,
  },
  ViewExample: {
    screen: ViewExample,
  },
};
const stackConfig = {
  initialRouteName: 'Home',
  headerMode: 'screen',
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
      backgroundColor: 'rgb(33, 33, 33)',
    },
    headerTitleStyle: {
      color: '#ffffff',
    },
    headerLeft: (
      <HyperlinkButton
        style={{
          paddingLeft: 0,
          paddingRight: 0,
        }}
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

const DefaultNavigator = StackNavigator(routeConfigMap, stackConfig);
const AppNavigator = Platform.OS === 'web' ? BrowserAppContainer(DefaultNavigator) : DefaultNavigator;

export default AppNavigator;
