import {
  white,
  gray,
} from './colors';

export default {
  Card: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderWidth: 0,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0, height: 2,
    },
    shadowColor: gray,
    shadowRadius: 5,
    elevation: 1,
    borderColor: white,
    backgroundColor: white,
  },
  'Card[rounded=true]': {
    borderRadius: 2,
  },
  'Card[rounded=false]': {
    borderRadius: 0,
  },
};
