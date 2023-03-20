import { DivBackdrop, DivModal } from './Modal-styled';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.onClickKeyDown);
    window.addEventListener('click', this.onClickDiv);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onClickKeyDown);
    window.removeEventListener('click', this.onClickDiv);
  }

  onClickKeyDown = ({ code }) => {
    if (code === 'Escape') {
      this.props.closeModal();
    }
  };

  onClickDiv = ({ target }) => {
    if (target.nodeName === 'DIV') {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <DivBackdrop>
        <DivModal>
          <img src={this.props.image} alt="" />
        </DivModal>
      </DivBackdrop>
    );
  }
}
