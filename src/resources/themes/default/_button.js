import {
  transparent,
  white,
  themePrimary,
  themeSecondary,
  themePositive,
  themeNeutral,
  themeNegative,
} from './colors';
import { fontSizeButton } from './dimens';

export default {
  Button: {
    borderWidth: 1,
    activeOpacity: 0.8,
    borderColor: themePrimary,
    backgroundColor: themePrimary,
    paddingLeft: 6,
    paddingRight: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ActivityIndicator: {
      marginLeft: 5,
      color: white,
    },
    Text: {
      alignItems: 'stretch',
      fontSize: fontSizeButton,
      fontWeight: '500',
      color: white,
      margin: 5,
    },
  },
  'Button[styleName=flat-primary]': {
    borderColor: themePrimary,
    backgroundColor: themePrimary,
    ActivityIndicator: {
      color: white,
    },
  },
  'Button[styleName=flat-secondary]': {
    borderColor: themeSecondary,
    backgroundColor: themeSecondary,
    ActivityIndicator: {
      color: white,
    },
  },
  'Button[styleName=flat-positive]': {
    borderColor: themePositive,
    backgroundColor: themePositive,
    ActivityIndicator: {
      color: white,
    },
  },
  'Button[styleName=flat-neutral]': {
    borderColor: themeNeutral,
    backgroundColor: themeNeutral,
    ActivityIndicator: {
      color: white,
    },
  },
  'Button[styleName=flat-negative]': {
    borderColor: themeNegative,
    backgroundColor: themeNegative,
    ActivityIndicator: {
      color: white,
    },
  },
  'Button[styleName=outline-primary]': {
    borderColor: themePrimary,
    backgroundColor: transparent,
    ActivityIndicator: {
      color: themePrimary,
    },
    Text: {
      color: themePrimary,
    },
  },
  'Button[styleName=outline-secondary]': {
    borderColor: themeSecondary,
    backgroundColor: transparent,
    ActivityIndicator: {
      color: themeSecondary,
    },
    Text: {
      color: themeSecondary,
    },
  },
  'Button[styleName=outline-positive]': {
    borderColor: themePositive,
    backgroundColor: transparent,
    ActivityIndicator: {
      color: themePositive,
    },
    Text: {
      color: themePositive,
    },
  },
  'Button[styleName=outline-neutral]': {
    borderColor: themeNeutral,
    backgroundColor: transparent,
    ActivityIndicator: {
      color: themeNeutral,
    },
    Text: {
      color: themeNeutral,
    },
  },
  'Button[styleName=outline-negative]': {
    borderColor: themeNegative,
    backgroundColor: transparent,
    ActivityIndicator: {
      color: themeNegative,
    },
    Text: {
      color: themeNegative,
    },
  },
  'Button[disabled=true]': {
    opacity: 0.4,
  },
  'Button[loading=true]': {
    opacity: 0.4,
  },
  'Button[size=mini]': {
    minWidth: 30,
    height: 30,
    Text: {
      fontSize: fontSizeButton - 4,
    },
  },
  'Button[size=small]': {
    minWidth: 36,
    height: 36,
    Text: {
      fontSize: fontSizeButton - 2,
    },
  },
  'Button[size=medium]': {
    minWidth: 42,
    height: 42,
    Text: {
      fontSize: fontSizeButton,
    },
  },
  'Button[size=large]': {
    minWidth: 48,
    height: 48,
    Text: {
      fontSize: fontSizeButton + 2,
    },
  },
  'Button[size=big]': {
    minWidth: 54,
    height: 54,
    Text: {
      fontSize: fontSizeButton + 4,
    },
  },
  'Button[fluid=true]': {
    flex: 1,
    marginLeft: 0,
    marginRight: 0,
  },
};
