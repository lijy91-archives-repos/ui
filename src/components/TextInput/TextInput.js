import React, { PureComponent } from 'react';
import { TextInput as RNTextInput } from 'react-native';

import withStyles from '../../withStyles';

const mapStyleToProps = [
  'placeholderTextColor',
  'selectionColor',
];

class TextInput extends PureComponent {
  render() {
    return (
      <RNTextInput
        {...this.props}
        underlineColorAndroid="rgba(0, 0, 0, 0)"
      />
    );
  }
}

export default withStyles('TextInput', mapStyleToProps)(TextInput);
