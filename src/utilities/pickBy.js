const pickBy = (object, predicate) => {
  const result = Object.assign(
    {},
    ...Object
      .keys(object || {})
      .filter(key => predicate(object[key], key))
      .map(key => ({ [key]: object[key] })),
  );
  return result;
};

export default pickBy;
