import {
  transparent,
  textPrimary,
  textSecondary,
} from './colors';

export default {
  RadioButton: {
    flexDirection: 'row',
    activeOpacity: 0.8,
    alignItems: 'center',
    OuterCircle: {
      margin: 4,
      width: 20,
      height: 20,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: textPrimary,
      alignItems: 'center',
      justifyContent: 'center',
      InnerCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: textPrimary,
      },
    },
    Text: {
      color: textPrimary,
    },
  },
  'RadioButton[disabled=true]': {
    opacity: 0.4,
  },
  'RadioButton[checked=true]': {
    OuterCircle: {
      borderColor: textPrimary,
      InnerCircle: {
        borderColor: textPrimary,
      },
    },
  },
  'RadioButton[checked=false]': {
    OuterCircle: {
      borderColor: textSecondary,
      InnerCircle: {
        backgroundColor: transparent,
      },
    },
  },
};
