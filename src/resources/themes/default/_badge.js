import {
  white,
  red,
} from './colors';
import {
  fontSizeBody,
} from './dimens';

export default {
  Badge: {
    backgroundColor: red,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
  'Badge[type=dot]': {
    minWidth: 10,
    minHeight: 10,
    borderRadius: 5,
  },
  'Badge[type=text]': {
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    Text: {
      height: 20,
      lineHeight: 20,
      marginLeft: 5,
      marginRight: 5,
      color: white,
      fontSize: fontSizeBody,
      fontWeight: '400',
      textAlign: 'center',
    },
  },
};
