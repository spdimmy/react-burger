import React, {useEffect, useRef, useState} from "react";
import styles from  './burger-ingredients.module.css';
import Tabs from "../tabs/tabs";
import Ingredients from "../ingredients/ingredients";
import { getIngredients } from  '../../services/actions/burger';
import { useDispatch, useSelector } from "react-redux";

function BurgerIngredients() {
  const {ingredients, ingredientsRequest} = useSelector(store => store.ingredients);
  const dispatch = useDispatch();
  const wrapperRef = useRef(null);
  const childRef = useRef([]);
  const [current, setCurrent] = useState('Булки');

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

  function handleScroll() {
    const distances = [];

    childRef.current.forEach(heading => {
      const diff = Math.abs(heading.getBoundingClientRect().top - wrapperRef.current.getBoundingClientRect().top);
      distances.push(diff);
    });

    const min = Math.min(...distances);
    const index = distances.findIndex(num => num === min);
    const activeTab = tabs[index];

    setCurrent(activeTab);
  }

  function tabClick(tab) {
    const section = childRef.current.find(heading => heading.textContent === tab);

    section.scrollIntoView({block: "start", behavior: "smooth"});
    setCurrent(tab);
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
        <Tabs tabs={tabs} current={current} tabClick={tabClick} />
      </div>
      <div className={styles.items} onScroll={handleScroll} ref={wrapperRef}>
        {ingredientsRequest
          ? 'Loading'
          : <Ingredients sections={sections} childRef={childRef} />
        }
      </div>
    </section>
  )
}

export default BurgerIngredients;