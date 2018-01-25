import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { View as RNView } from 'react-native';
import PropTypes from 'prop-types';
import withStyles from '../../withStyles';

const rootElement = document.getElementById('root');

const propTypes = {
  style: RNView.propTypes.style,
  // animated: PropTypes.bool,
  // animationType: PropTypes.string, // "none" | "slide" | "fade";
  transparent: PropTypes.bool,
  visible: PropTypes.bool,
};
const defaultProps = {
  style: undefined,
  // animated: false,
  // animationType: 'none',
  transparent: false,
  visible: false,
};

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.id = 'component-modal';
  }

  componentDidMount() {
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.
    rootElement.appendChild(this.el);
  }

  componentWillUnmount() {
    rootElement.removeChild(this.el);
  }

  render() {
    const {
      visible,
      transparent,
    } = this.props;
    if (!visible) {
      return null;
    }
    const modalStyle = {
      ...this.props.style,
      backgroundColor: !transparent ? '#ffffff' : 'rgba(0, 0, 0, 0)',
      position: 'fixed',
      borderWidth: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    };
    const children = (
      <div
        {...this.props}
        style={modalStyle}
      />
    );
    return ReactDOM.createPortal(
      children,
      this.el,
    );
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default withStyles('Modal')(Modal);
