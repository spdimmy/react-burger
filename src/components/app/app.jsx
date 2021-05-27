import React from 'react';
import styles from './app.module.css';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor  from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import { useSelector } from "react-redux";

function App() {
  const { isOpen } = useSelector(store => store.modal);

  return (
    <>
      <div className={styles.app}>
        <AppHeader />
        <main className={`container ${styles.main}`}>
          <h1 className={`text text_type_main-large mb-2`}>Соберите бургер</h1>
          <div className={styles.cols}>
            <BurgerIngredients />
            <BurgerConstructor />
          </div>
        </main>
      </div>
      {isOpen && <Modal />}
    </>
  );
}

export default App;
