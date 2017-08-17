import {
  white,
  black,
} from './colors';

export default {
  Switch: {
    width: 34,
    height: 14,
    borderRadius: 50,
    margin: 6,
    activeOpacity: 1,
    Knob: {
      position: 'absolute',
      width: 20,
      height: 20,
      borderRadius: 50,
      margin: -3,
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    Knob: {
      right: 3,
      backgroundColor: 'rgb(33, 33, 33)',
    },
  },
  'Switch[checked=false]': {
    backgroundColor: 'rgba(0, 0, 0, 0.38)',
    Knob: {
      left: 3,
      backgroundColor: white,
    },
  },
  'Switch[disabled=true]': {
    opacity: 0.26,
  },
};
