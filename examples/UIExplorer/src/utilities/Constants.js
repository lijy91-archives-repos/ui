import { Platform, StatusBar } from 'react-native';

if (!StatusBar.currentHeight) {
  StatusBar.currentHeight = 0;
}

// NavigationBar 常量
export const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
export const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;
