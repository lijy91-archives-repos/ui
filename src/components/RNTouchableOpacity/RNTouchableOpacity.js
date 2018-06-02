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
    const prevStyle = this.props.style;
    const nextStyle = nextProps.style;

    const prevOpacity = prevStyle.opacity || 1;
    const nextOpacity = nextStyle.opacity || 1;

    if (nextOpacity !== prevOpacity) {
      this.touchableOpacityRef.setNativeProps({ style: { opacity: nextOpacity } });
    }
  }

  render() {
    const { children, ...restProps } = this.props;
    return (
      <TouchableOpacity
        {...restProps}
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
