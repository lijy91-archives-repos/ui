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
    Text: {
      color: white,
      marginLeft: 5,
      marginRight: 5,
    },
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
      fontSize: fontSizeBody,
    },
  },
};
