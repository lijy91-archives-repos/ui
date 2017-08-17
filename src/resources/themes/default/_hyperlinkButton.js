import {
  black,
} from './colors';
import {
  fontSizeButton,
} from './dimens';

export default {
  HyperlinkButton: {
    activeOpacity: 0.65,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0)',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    paddingLeft: 16,
    paddingRight: 16,
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
      color: black,
    },
  },
  'HyperlinkButton[disabled=true]': {
    opacity: 0.4,
  },
  'HyperlinkButton[disabled=false]': {
    opacity: 1,
  },
};
