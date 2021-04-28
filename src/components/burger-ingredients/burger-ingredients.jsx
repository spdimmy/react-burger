import React from "react";
import styles from  './burger-ingredients.module.css';
import Tabs from "../tabs/tabs";
import Ingredients from "../ingredients/ingredients";

class BurgerIngredients extends React.Component {
  render() {
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

    this.props.data.forEach(el => {
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
          <Ingredients sections={sections} />
        </div>
      </section>
    )
  }
}

export default BurgerIngredients;