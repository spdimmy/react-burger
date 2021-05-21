import React, {useContext, useEffect} from "react";
import ReactDOM from 'react-dom';
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalContext } from  '../../services/modalContext';

function Modal() {
  const modalRoot = document.getElementById("react-modals");
  const {currentModal, modalDispatcher} = useContext(ModalContext);

  const handleKeyDown = (e) => {
    if (e.key === "Escape" || e.keyCode === 27) modalDispatcher({type: 'close'});
  };

  const closeModal = () => {
    modalDispatcher({type: 'close'});
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  });

  return ReactDOM.createPortal(
    (
      <div className={styles.modal}>
        <div className={`p-10 ${styles.inner}`}>
          <header className={styles.header}>
            {currentModal.header && (
              <h2 className="text text_type_main-large">{currentModal.header}</h2>
            )}
            <button className={styles['close-button']} onClick={closeModal}><CloseIcon type="primary" /></button>
          </header>
          <main className={styles.main}>
            {currentModal.content}
          </main>
        </div>
        <ModalOverlay onClick={closeModal} />
      </div>
    ),
    modalRoot
  );
}

export default Modal;