export default {
  RadioButton: {
    flexDirection: 'row',
    activeOpacity: 1,
    alignItems: 'center',
    OuterCircle: {
      margin: 2,
      width: 20,
      height: 20,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: 'rgba(0, 0, 0, 0.87)',
      alignItems: 'center',
      justifyContent: 'center',
      InnerCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.87)',
      },
    },
  },
  'RadioButton[checked=true]': {
    OuterCircle: {
      borderColor: 'rgba(0, 0, 0, 0.87)',
      InnerCircle: {
        borderColor: 'rgba(0, 0, 0, 0.87)',
      },
    },
  },
  'RadioButton[checked=false]': {
    OuterCircle: {
      borderColor: 'rgba(0, 0, 0, 0.54)',
      InnerCircle: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
      },
    },
  },
  'RadioButton[disabled=true]': {
    opacity: 0.26,
  },
};
