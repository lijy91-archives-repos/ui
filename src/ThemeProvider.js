import { PureComponent, Children } from 'react';
import PropTypes from 'prop-types';

import Theme from './Theme';

const propTypes = {
  children: PropTypes.element.isRequired,
  theme: PropTypes.string,
};
const defaultProps = {
  theme: 'default',
};
const childContextTypes = {
  themeName: PropTypes.string,
  themeStyle: PropTypes.object,
};

class ThemeProvider extends PureComponent {
  constructor(props) {
    super(props);

    const themeName = this.props.theme;

    this.state = {
      themeName,
      themeStyle: Theme.getTheme(themeName),
    };
  }

  getChildContext() {
    return this.state;
  }

  render() {
    return Children.only(this.props.children);
  }
}

ThemeProvider.propTypes = propTypes;
ThemeProvider.defaultProps = defaultProps;
ThemeProvider.childContextTypes = childContextTypes;

export default ThemeProvider;
