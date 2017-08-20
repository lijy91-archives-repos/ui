import {
  white,
  black,
} from './colors';

export default {
  Switch: {
    width: 34,
    height: 20,
    margin: 3,
    activeOpacity: 1,
    Background: {
      borderRadius: 50,
      height: 14,
      marginTop: 3,
      marginBottom: 3,
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
  'Switch[checked=true]': {
    Background: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    Knob: {
      right: 0,
      backgroundColor: 'rgb(33, 33, 33)',
    },
  },
  'Switch[checked=false]': {
    Background: {
      backgroundColor: 'rgba(0, 0, 0, 0.38)',
    },
    Knob: {
      left: 0,
      backgroundColor: white,
    },
  },
  'Switch[disabled=true]': {
    opacity: 0.26,
  },
};
