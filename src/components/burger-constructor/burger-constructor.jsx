import React from 'react';
import styles from  './burger-constructor.module.css';
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

class BurgerConstructor extends React.Component {
  render() {
    const ingredients = this.props.data;
    const bunIngredient = ingredients.find(item => item.type === "bun");
    const sumPrice = ingredients.reduce((acc, curr) => acc + curr.price, 0);
    const otherIngredients = ingredients.filter(item => item.type !== "bun");

    return (
      <section className={styles.section}>
        <div className={`mb-5 ${styles['constructor-list']}`}>
          <div className={styles['selected-item']}>
            <div className={`${styles.drag} ${styles.drag_hidden}`}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement price={bunIngredient.price} text={`${bunIngredient.name} (верх)`} thumbnail={bunIngredient.image_mobile} type={'top'} isLocked />
          </div>
          <div className={`mb-2 ${styles['selected-list']}`}>
            {otherIngredients.map(ingredient => (
              <div className={styles['selected-item']}>
                <div className={styles.drag}>
                  <DragIcon type="primary" />
                </div>
                <ConstructorElement price={ingredient.price} text={ingredient.name} thumbnail={ingredient.image_mobile} key={ingredient._id} />
              </div>
            ))}
          </div>
          <div className={styles['selected-item']}>
            <div className={`${styles.drag} ${styles.drag_hidden}`}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement price={bunIngredient.price} text={`${bunIngredient.name} (низ)`} thumbnail={bunIngredient.image_mobile} type={'bottom'} isLocked />
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={`mr-5 ${styles.sum}`}>
            <span className={`text text_type_digits-default mr-1 ${styles.value}`}>{sumPrice}</span>
            <CurrencyIcon type="primary" />
          </div>
          <Button type="primary" size="large">Оформить заказ</Button>
        </footer>
      </section>
    )
  }
}

export default BurgerConstructor;