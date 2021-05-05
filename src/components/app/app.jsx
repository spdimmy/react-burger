import {React, useEffect, useState} from 'react';
import styles from './app.module.css';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor  from "../burger-constructor/burger-constructor";

function App() {
  const url = 'https://norma.nomoreparties.space/api/ingredients';
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(ingredients => setData(ingredients.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={`container ${styles.main}`}>
        <h1 className={`text text_type_main-large mb-2`}>Соберите бургер</h1>
        <div className={styles.cols}>
          <BurgerIngredients data={data} />
          <BurgerConstructor data={data} />
        </div>
      </main>
    </div>
  );
}

export default App;
