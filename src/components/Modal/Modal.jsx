import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({largeImage, alt, closeModal}) => {
  useEffect(() => {
    document.addEventListener('keydown', closeModal);

    return () => {
      document.removeEventListener('keydown', closeModal);
    }
  }, [closeModal]);

  // const closeModal = e => {
  //   if (e.target === e.currentTarget || e.code === 'Escape') {
  //     onModalClick();
  //   }
  // }

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
