import defaultTheme from './resources/themes/default';

const themes = {};

class Theme {
  static registerTheme(themeName, styleSheets) {
    themes[themeName] = styleSheets;
  }

  static registerDefaultTheme(styleSheets) {
    Theme.registerTheme('default', styleSheets);
  }

  static getTheme(themeName) {
    if (themeName === 'default' && !themes.default) {
      Theme.registerDefaultTheme(defaultTheme);
    }
    return themes[themeName];
  }

  static getDefaultTheme() {
    return Theme.getTheme('default');
  }
}

export default Theme;
