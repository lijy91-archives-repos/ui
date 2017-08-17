export default {
  CheckBox: {
    flexDirection: 'row',
    activeOpacity: 1,
    alignItems: 'center',
    CheckMark: {
      margin: 3,
      width: 18,
      height: 18,
      borderRadius: 2,
      borderWidth: 2,
      borderColor: 'rgb(33, 33, 33)',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  'CheckBox[checked=true]': {
    CheckMark: {
      backgroundColor: 'rgb(33, 33, 33)',
    },
  },
  'CheckBox[checked=false]': {
    CheckMark: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
  },
  'CheckBox[disabled=true]': {
    opacity: 0.26,
  },
};
