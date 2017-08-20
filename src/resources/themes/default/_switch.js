import {
  white,
  black,
  themePrimary,
} from './colors';

export default {
  Switch: {
    width: 50,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    activeOpacity: 1,
    Background: {
      borderRadius: 50,
      width: 34,
      height: 14,
    },
    Knob: {
      position: 'absolute',
      width: 20,
      height: 20,
      borderRadius: 50,
      shadowOpacity: 0.18,
      shadowOffset: {
        width: 0, height: 1,
      },
      shadowColor: black,
      shadowRadius: 4,
      elevation: 4,
    },
  },
  'Switch[disabled=true]': {
    opacity: 0.4,
  },
  'Switch[checked=true]': {
    Background: {
      backgroundColor: 'rgba(0, 0, 0, 0.54)',
    },
    Knob: {
      right: 8,
      backgroundColor: themePrimary,
    },
  },
  'Switch[checked=false]': {
    Background: {
      backgroundColor: 'rgba(0, 0, 0, 0.38)',
    },
    Knob: {
      left: 8,
      backgroundColor: white,
    },
  },
};
