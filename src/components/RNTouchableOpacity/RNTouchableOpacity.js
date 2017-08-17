import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';

const propTypes = {
  ...TouchableOpacity.propTypes,
};
const defaultProps = {
  ...TouchableOpacity.defaultProps,
};

class RNTouchableOpacity extends PureComponent {
  componentWillReceiveProps(nextProps) {
    const { opacity } = nextProps.style;
    if (opacity) {
      setTimeout(() => {
        this.touchableOpacityRef.setNativeProps({ style: { opacity } });
      }, 0);
    }
  }

  render() {
    const { children } = this.props;
    return (
      <TouchableOpacity
        {...this.props}
        ref={(ref) => {
          this.touchableOpacityRef = ref;
        }}
      >
        {children}
      </TouchableOpacity>
    );
  }
}

RNTouchableOpacity.propTypes = propTypes;
RNTouchableOpacity.defaultProps = defaultProps;

export default RNTouchableOpacity;
