import {
  transparent,
  white,
  themePrimary,
  themeAccent,
} from './colors';
import {
  fontSizeButton,
} from './dimens';

export default {
  Button: {
    activeOpacity: 0.65,
    backgroundColor: themePrimary,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 0,
    paddingBottom: 0,
    margin: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ActivityIndicator: {
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
    backgroundColor: themePrimary,
  },
  'Button[styleName=flat-accent]': {
    backgroundColor: themeAccent,
  },
  'Button[styleName=outline-primary]': {
    borderWidth: 1,
    borderColor: themePrimary,
    backgroundColor: transparent,
    Text: {
      color: themePrimary,
    },
  },
  'Button[styleName=outline-accent]': {
    borderWidth: 1,
    borderColor: themeAccent,
    backgroundColor: transparent,
    Text: {
      color: themeAccent,
    },
  },
  'Button[size=mini]': {
    height: 30,
    Text: {
      fontSize: fontSizeButton - 4,
    },
  },
  'Button[size=small]': {
    height: 36,
    Text: {
      fontSize: fontSizeButton - 2,
    },
  },
  'Button[size=medium]': {
    height: 42,
    Text: {
      fontSize: fontSizeButton,
    },
  },
  'Button[size=large]': {
    height: 48,
    Text: {
      fontSize: fontSizeButton + 2,
    },
  },
  'Button[size=big]': {
    height: 54,
    Text: {
      fontSize: fontSizeButton + 4,
    },
  },
  'Button[rounded=true]': {
    borderRadius: 2,
  },
  'Button[rounded=false]': {
    borderRadius: 0,
  },
  'Button[fluid=true]': {
    flex: 1,
    margin: 0,
  },
  'Button[disabled=true]': {
    opacity: 0.4,
  },
  'Button[disabled=false]': {
    opacity: 1,
  },
  'Button[loading=true]': {

  },
};
