const isObject = item => (item && typeof item === 'object' && !Array.isArray(item));

const deepMerge = (object, ...sources) => {
  if (!sources.length) return object;
  const source = sources.shift();

  if (isObject(object) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!object[key]) Object.assign(object, { [key]: {} });
        deepMerge(object[key], source[key]);
      } else {
        Object.assign(object, { [key]: source[key] });
      }
    });
  }
  return deepMerge(object, ...sources);
};

export default deepMerge;
