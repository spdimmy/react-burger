import {React, useEffect} from "react";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function Modal(props) {
  const modalRoot = document.getElementById("react-modals");

  const handleKeyDown = (e) => {
    if (e.key === "Escape" || e.keyCode === 27) props.onClose();
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
            {props.header && (
              <h2 className="text text_type_main-large">{props.header}</h2>
            )}
            <button className={styles['close-button']} onClick={props.onClose}><CloseIcon type="primary" /></button>
          </header>
          <main className={styles.main}>
            {props.children}
          </main>
        </div>
        <ModalOverlay onClick={props.onClose} />
      </div>
    ),
    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.element,
  header: PropTypes.string
};

export default Modal;