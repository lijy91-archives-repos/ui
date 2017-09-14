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
    paddingTop: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    Text: {
      alignItems: 'stretch',
      fontSize: fontSizeButton,
      fontWeight: '500',
      color: textPrimary,
      marginTop: 4,
      marginBottom: 4,
      textDecorationLine: 'underline',
    },
  },
  'HyperlinkButton[disabled=true]': {
    opacity: 0.4,
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
};
