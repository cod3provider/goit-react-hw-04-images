import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({largeImage, alt, onModalClick}) => {
  useEffect(() => {
    const onKeyDown = e => {
      if (e.code === 'Escape') {
        onModalClick();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    }
  }, [onModalClick]);

  const closeModal = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      onModalClick();
    }
  }

  return (
    createPortal (
      <div className={s.Overlay} onClick={closeModal}>
        <div>
          <img src={largeImage} alt={alt} className={s.Modal}/>
        </div>
      </div>, modalRoot
    )
  )
}

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
