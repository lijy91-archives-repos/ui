import {
  backgroundLight,
  backgroundDark,
} from './colors';

export default {
  Screen: {
    backgroundColor: backgroundLight,
    flex: 1,
  },
  'Screen[styleName=dark]': {
    backgroundColor: backgroundDark,
  },
};
