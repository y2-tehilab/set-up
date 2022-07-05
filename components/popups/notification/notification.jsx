import styles from './notification.module.scss';
import Modal from 'react-modal';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { useEffect } from 'react';

export default forwardRef(function Notification(
  { closeAfterMS, children },
  ref
) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal,
    closeModel,
  }));

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModel = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (modalIsOpen && closeAfterMS) {
      const timer = setTimeout(() => {
        closeModel();
      }, closeAfterMS);
      return () => clearTimeout(timer);
    }
  }, [modalIsOpen, closeAfterMS]);

  return (
    <Modal
      ref={ref}
      isOpen={modalIsOpen}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      preventScroll={false}
      closeTimeoutMS={300}
      className={styles.popupContent}
      overlayClassName={`notification ${styles.popupOverlay}`}
    >
      <button onClick={closeModel}>x</button>
      {children}
    </Modal>
  );
});
