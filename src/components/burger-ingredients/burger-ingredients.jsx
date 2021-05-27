import React, {useEffect} from "react";
import styles from  './burger-ingredients.module.css';
import Tabs from "../tabs/tabs";
import Ingredients from "../ingredients/ingredients";
import { getIngredients } from  '../../services/actions/burger';
import { useDispatch, useSelector } from "react-redux";

function BurgerIngredients() {
  const {ingredients, ingredientsRequest} = useSelector(store => store.ingredients);
  const dispatch = useDispatch();

  const BUN = "bun";
  const MAIN = "main";
  const SAUCE = "sauce";
  const tabs = [];
  const sections = [];

  function checkTitle(type) {
    switch (type) {
      case BUN:
        return 'Булки';
      case MAIN:
        return 'Начинка';
      case SAUCE:
        return 'Соусы';
      default:
        break;
    }
  }

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  ingredients.forEach(el => {
    let existingSection = sections.find(section => section.type === el.type);

    existingSection
      ? existingSection.items.push(el)
      : sections.push({
        type: el.type,
        title: checkTitle(el.type),
        items: [el],
      })
  });

  sections.forEach(section => tabs.push(section.title));

  return (
    <section className={`${styles.section}`}>
      <div className={`mb-5 ${styles.tabs}`}>
        <Tabs tabs={tabs} />
      </div>
      <div className={styles.items}>
        {ingredientsRequest
          ? 'Loading'
          : <Ingredients sections={sections} />
        }
      </div>
    </section>
  )
}

export default BurgerIngredients;