import { Platform, StatusBar } from 'react-native';

// NavigationBar 常量
export const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : (StatusBar.currentHeight & 0);
export const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;
