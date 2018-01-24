import React, { PureComponent } from 'react';
import { View as RNView, Image as RNImage } from 'react-native';
import PropTypes from 'prop-types';
import withStyles from '../../withStyles';

const checkedImageBase64String = `data:image/png;base64,
iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAAVlJREFUaAXt
l1sOgjAQRYn/fvjtI3GnjTGuy3X42greImMaoLRoQzvkNiklBdp7zqDRqmKjARqgARqgARqgARoY
MFDX9WZgWvcUoA7oL/SLbhInvQOF06adncs6T4EhlWqZvsNJJxFSj0AJnfHBrXwXcs9bKGS4oh9z
Z0m2f0SlbMVMsg3nWIhQc1hOsQcrlcLiHGtkrxQCrFODlgBlEOKGvk0FVwoUcjTtjuPfcFjD9zPp
s8vnaFJJ7K2D9W2lus3C7Xo3R07g2SKhBPInuOxQVj5CDFVLwOz4QI+uHO7NWyn3jUKYGLi9+8zQ
eVFQEjAC7ol7vHBFQv0LVzTURDj7H6ppKqCcsKHP3KsFKueLQsKHRgSPgbOAY82E9slyHYlDcPqg
xOSPcGVWSqBknAinA2oinC6oSDidUAE43VAeuGVAdeCWBSVwHGmABmiABmiABmiABhZh4A0bGoy8
G1WshwAAAABJRU5ErkJggg==
`.replace(/\n/g, '');

const propTypes = {
  checked: PropTypes.bool.isRequired,
  checkedImage: PropTypes.string,
};
const defaultProps = {
  checkedImage: checkedImageBase64String,
};

class CheckMark extends PureComponent {
  render() {
    const {
      checkedImage,
    } = this.props;

    return (
      <RNView
        {...this.props}
      >
        <RNImage
          style={{ width: '100%', height: '100%' }}
          source={{ uri: checkedImage }}
        />
      </RNView>
    );
  }
}


CheckMark.propTypes = propTypes;
CheckMark.defaultProps = defaultProps;

export default withStyles('CheckMark')(CheckMark);
