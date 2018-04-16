import Theme, { themes } from '../src/Theme';

describe('Theme', () => {
  it('register default theme', () => {
    const defaultTheme = {
      Text: {
        color: '#000000',
      },
    };
    const defaultThemePro = {
      AppBar: {
        height: 42,
      },
    };
    Theme.registerDefaultTheme(defaultTheme);
    expect(themes).toMatchObject({ default: { ...defaultTheme, ...defaultThemePro } });
  });
  it('register theme', () => {
    const lightTheme = {
      Text: {
        color: '#000000',
      },
    };
    Theme.registerTheme('light', lightTheme);
    expect(themes).toMatchObject({ light: lightTheme });
  });
});
