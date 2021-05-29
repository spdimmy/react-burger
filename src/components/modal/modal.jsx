import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {CLOSE_MODAL} from "../../services/actions/burger";

function Modal() {
  const modalRoot = document.getElementById("react-modals");
  const dispatch = useDispatch();
  const {header, content} = useSelector(store => store.modal);

  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape" || e.keyCode === 27) closeModal();
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
            {header && (
              <h2 className="text text_type_main-large">{header}</h2>
            )}
            <button className={styles['close-button']} onClick={closeModal}><CloseIcon type="primary" /></button>
          </header>
          <main className={styles.main}>
            {content}
          </main>
        </div>
        <ModalOverlay onClick={closeModal} />
      </div>
    ),
    modalRoot
  );
}

export default Modal;