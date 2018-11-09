const defaultSize = 40;

export default {
  Avatar: {
    width: defaultSize,
    height: defaultSize,
    borderWidth: 1,
    borderRadius: defaultSize / 2,
    borderColor: '#dedede',
  },
  'Avatar[size=mini]': {
    width: defaultSize - 20,
    height: defaultSize - 20,
    borderRadius: (defaultSize - 20) / 2,
  },
  'Avatar[size=small]': {
    width: defaultSize - 10,
    height: defaultSize - 10,
    borderRadius: (defaultSize - 10) / 2,
  },
  'Avatar[size=medium]': {
    width: defaultSize,
    height: defaultSize,
    borderRadius: defaultSize / 2,
  },
  'Avatar[size=large]': {
    width: defaultSize + 10,
    height: defaultSize + 10,
    borderRadius: (defaultSize + 10) / 2,
  },
  'Avatar[size=big]': {
    width: defaultSize + 20,
    height: defaultSize + 20,
    borderRadius: (defaultSize + 20) / 2,
  },
};
