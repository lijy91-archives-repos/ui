module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "globals": {
    "__DEV__": true,
    "jest": true,
    "alert": true,
  },
  "rules": {
    "no-alert": 0,
    "class-methods-use-this": 0,
    "react/prop-types": [2, { ignore: ["navigation"], customValidators: [] }],
    "react/forbid-prop-types": [2, { "forbid": ["any"] }],
    // `.jsx` extension cannot be used with React Native
    // https://github.com/airbnb/javascript/issues/982
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
  }
};
