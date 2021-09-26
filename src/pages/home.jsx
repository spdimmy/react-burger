import styles from "./home.module.css";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import React from "react";

function HomePage() {
  return (
    <main className={`container ${styles.main}`}>
      <h1 className={`text text_type_main-large mb-5`}>Соберите бургер</h1>
      <DndProvider backend={HTML5Backend}>
        <div className={styles.cols}>
          <BurgerIngredients />
          <BurgerConstructor />
        </div>
      </DndProvider>
    </main>
  )
}

export default HomePage;