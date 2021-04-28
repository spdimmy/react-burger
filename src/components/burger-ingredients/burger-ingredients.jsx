import React from "react";
import styles from  './burger-ingredients.module.css';
import Tabs from "../tabs/tabs";
import Ingredients from "../ingredients/ingredients";

class BurgerIngredients extends React.Component {
  render() {
    const tabs = ['Булки', 'Соусы', 'Начинка'];

    return (
      <section className={`${styles.section}`}>
        <div className={`mb-5 ${styles.tabs}`}>
          <Tabs tabs={tabs} />
        </div>
        <div className={styles.items}>
          <Ingredients />
        </div>
      </section>
    )
  }
}

export default BurgerIngredients;