module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "jest": true,
    "browser": true,
  },
  "rules": {
    "prefer-const": 0,
    "class-methods-use-this": 0,
    // `.jsx` extension cannot be used with React Native
    // https://github.com/airbnb/javascript/issues/982
    "react/jsx-filename-extension": ["error", {
      "extensions": [".js", ".jsx"]
    }],
  }
};
