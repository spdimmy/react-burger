import React from "react";
import PropTypes from 'prop-types';
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

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number,
  })).isRequired,
};

export default BurgerIngredients;