import {
  transparent,
  textPrimary,
  textSecondary,
} from './colors';

export default {
  CheckBox: {
    flexDirection: 'row',
    activeOpacity: 0.8,
    alignItems: 'center',
    CheckMark: {
      margin: 3,
      width: 18,
      height: 18,
      borderRadius: 2,
      borderWidth: 2,
      borderColor: textPrimary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    Text: {
      color: textPrimary,
    },
  },
  'CheckBox[checked=true]': {
    CheckMark: {
      borderWidth: 0,
      backgroundColor: textPrimary,
    },
  },
  'CheckBox[checked=false]': {
    CheckMark: {
      borderColor: textSecondary,
      backgroundColor: transparent,
    },
  },
  'CheckBox[disabled=true]': {
    opacity: 0.4,
  },
};
