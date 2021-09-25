import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
//styles
import StyledModal from './styles/StyledModal';

const modalRoot = document.getElementById('modal');
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <StyledModal>{this.props.children}</StyledModal>,
      this.el
    );
  }
}

Modal.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
export default Modal;
