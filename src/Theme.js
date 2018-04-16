import deepMerge from './utilities/deepMerge';
import defaultTheme from './resources/themes/default';

const themes = {};

/**
 * Theme
 *
 * @example
 * const defaultTheme = {};
 * const defaultThemePro = {};
 *
 * Theme.registerTheme('default', [
 *   defaultTheme,
 *   defaultThemePro,
 * ]);
 */
class Theme {
  static registerTheme(themeName, styleSheets = []) {
    let mergedStyleSheets = styleSheets;
    if (Array.isArray(styleSheets)) {
      mergedStyleSheets = deepMerge({}, ...styleSheets);
    }
    themes[themeName] = mergedStyleSheets;
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

export {
  Theme as default,
  themes,
};
