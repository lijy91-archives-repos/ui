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
    activeOpacity: 0.9,
    borderWidth: 1,
    borderColor: themePrimary,
    backgroundColor: themePrimary,
    paddingLeft: 6,
    paddingRight: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ActivityIndicator: {
      marginRight: 3,
      color: white,
    },
    Icon: {
      padding: 0,
      size: 18,
      minWidth: 18,
      minHeight: 18,
      color: white,
      textAlign: 'center',
      marginRight: 3,
    },
    Text: {
      alignItems: 'stretch',
      fontSize: fontSizeButton,
      fontWeight: '500',
      color: white,
      margin: 2,
    },
  },
  'Button[styleName=flat-primary]': {
    borderColor: themePrimary,
    backgroundColor: themePrimary,
    ActivityIndicator: {
      color: white,
    },
    Icon: {
      color: white,
    },
  },
  'Button[styleName=flat-secondary]': {
    borderColor: themeSecondary,
    backgroundColor: themeSecondary,
    ActivityIndicator: {
      color: white,
    },
    Icon: {
      color: white,
    },
  },
  'Button[styleName=flat-positive]': {
    borderColor: themePositive,
    backgroundColor: themePositive,
    ActivityIndicator: {
      color: white,
    },
    Icon: {
      color: white,
    },
  },
  'Button[styleName=flat-neutral]': {
    borderColor: themeNeutral,
    backgroundColor: themeNeutral,
    ActivityIndicator: {
      color: white,
    },
    Icon: {
      color: white,
    },
  },
  'Button[styleName=flat-negative]': {
    borderColor: themeNegative,
    backgroundColor: themeNegative,
    ActivityIndicator: {
      color: white,
    },
    Icon: {
      color: white,
    },
  },
  'Button[styleName=outline-primary]': {
    borderColor: themePrimary,
    backgroundColor: transparent,
    ActivityIndicator: {
      color: themePrimary,
    },
    Icon: {
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
    Icon: {
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
    Icon: {
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
    Icon: {
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
    Icon: {
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
    minWidth: 42 - 16,
    height: 42 - 16,
    Text: {
      fontSize: fontSizeButton - 2,
    },
  },
  'Button[size=small]': {
    minWidth: 42 - 8,
    height: 42 - 8,
    Icon: {
      size: 16,
      minWidth: 16,
      minHeight: 16,
    },
    Text: {
      fontSize: fontSizeButton - 1,
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
    minWidth: 42 + 8,
    height: 42 + 8,
    Text: {
      fontSize: fontSizeButton + 1,
    },
  },
  'Button[size=big]': {
    minWidth: 42 + 16,
    height: 42 + 16,
    Text: {
      fontSize: fontSizeButton + 2,
    },
  },
  'Button[fluid=true]': {
    width: '100%',
    marginLeft: 0,
    marginRight: 0,
  },
  'Button[circular=true]': {
    borderRadius: 54 / 2,
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 2,
    paddingRight: 2,
    Text: {
      margin: 2,
    },
  },
};
