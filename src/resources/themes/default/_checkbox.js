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
    Text: {
      color: textPrimary,
    },
  },
  'CheckBox[disabled=true]': {
    opacity: 0.4,
  },
  'CheckBox[checked=true]': {
    CheckBoxCheckMark: {
      borderWidth: 0,
      backgroundColor: textPrimary,
    },
  },
  'CheckBox[checked=false]': {
    CheckBoxCheckMark: {
      borderColor: textSecondary,
      backgroundColor: transparent,
    },
  },
  CheckBoxCheckMark: {
    margin: 4,
    width: 18,
    height: 18,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: textPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
};
