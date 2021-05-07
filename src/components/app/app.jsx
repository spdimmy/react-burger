import {React, useEffect, useState} from 'react';
import styles from './app.module.css';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor  from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";

function App() {
  const endpoint = 'https://norma.nomoreparties.space/api/ingredients';
  const [data, setData] = useState([]);
  const [currentModal, setModal] = useState({
    isOpen: false,
    header: '',
    content: null,
  });

  const closeModal = () => {
    setModal({
      isOpen: false,
      header: '',
      content: null,
    });
  };

  const modal = (
    <Modal header={currentModal.header} onClose={closeModal}>
      {currentModal.content}
    </Modal>
  );

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(ingredients => setData(ingredients.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className={styles.app}>
        <AppHeader />
        <main className={`container ${styles.main}`}>
          <h1 className={`text text_type_main-large mb-2`}>Соберите бургер</h1>
          <div className={styles.cols}>
            <BurgerIngredients data={data} openModal={setModal} />
            <BurgerConstructor data={data} openModal={setModal} />
          </div>
        </main>
      </div>
      {currentModal.isOpen && modal}
    </>
  );
}

export default App;
