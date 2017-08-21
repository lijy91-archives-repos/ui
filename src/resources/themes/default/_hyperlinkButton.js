import {
  transparent,
  textPrimary,
} from './colors';
import {
  fontSizeButton,
} from './dimens';

export default {
  HyperlinkButton: {
    activeOpacity: 0.8,
    backgroundColor: transparent,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 0,
    paddingBottom: 0,
    margin: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ActivityIndicator: {
      marginRight: 5,
    },
    Text: {
      alignItems: 'stretch',
      fontSize: fontSizeButton,
      fontWeight: '500',
      color: textPrimary,
      margin: 5,
    },
  },
  'HyperlinkButton[size=mini]': {
    height: 30,
    Text: {
      fontSize: fontSizeButton - 4,
    },
  },
  'HyperlinkButton[size=small]': {
    height: 36,
    Text: {
      fontSize: fontSizeButton - 2,
    },
  },
  'HyperlinkButton[size=medium]': {
    height: 42,
    Text: {
      fontSize: fontSizeButton,
    },
  },
  'HyperlinkButton[size=large]': {
    height: 48,
    Text: {
      fontSize: fontSizeButton + 2,
    },
  },
  'HyperlinkButton[size=big]': {
    height: 54,
    Text: {
      fontSize: fontSizeButton + 4,
    },
  },
  'HyperlinkButton[disabled=true]': {
    opacity: 0.4,
  },
  'HyperlinkButton[disabled=false]': {
    opacity: 1,
  },
  'HyperlinkButton[loading=true]': {
    opacity: 0.4,
  },
};
