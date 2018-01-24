import Theme, { themes } from '../src/Theme';

describe('Theme', () => {
  it('register default theme', () => {
    const defaultTheme = {
      Text: {
        color: '#000000',
      },
    };
    Theme.registerDefaultTheme(defaultTheme);
    expect(themes).toMatchObject({ default: defaultTheme });
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
