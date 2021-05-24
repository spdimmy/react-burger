import React, {useContext} from 'react';
import styles from  './burger-constructor.module.css';
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import SelectedItem from "../selected-item/selected-item";
import OrderDetails from "../order-details/order-details";
import { ModalContext } from  '../../services/modalContext';
import { IngredientsContext } from  '../../services/ingredientsContext';
import { endpointOrders } from '../../utils/constants';

function BurgerConstructor() {
  const {ingredients} = useContext(IngredientsContext);
  const {modalDispatcher} = useContext(ModalContext);
  const activeIngredients = ingredients.active;
  const bunIngredient = activeIngredients.find(item => item.type === "bun");
  const otherIngredients = activeIngredients.filter(item => item.type !== "bun");
  const sumPrice = activeIngredients.reduce((acc, curr) => curr.type === "bun" ? acc + curr.price * 2 : acc + curr.price, 0);

  const openModalWithContent = async () => {
    const activeIngredientsIds = activeIngredients.map(ingredient => ingredient._id);

    // Prevent submit order without order
    if (!bunIngredient) return false;

    try {
      const response = await fetch(endpointOrders, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ingredients: activeIngredientsIds
        }),
      });

      if (!response.ok) {
        throw new Error('Ответ сети был не ok');
      }

      const data = await response.json();

      modalDispatcher({
        type: 'open',
        header: '',
        content: <OrderDetails order={data.order.number} />,
      })
    } catch(error) {
      throw new Error(error);
    }
  };

  return (
    <>
      <section className={styles.section}>
        <div className={`mb-5 ${styles['constructor-list']}`}>
          {bunIngredient && (
            <SelectedItem dragHidden={true} price={bunIngredient?.price} text={`${bunIngredient?.name} (верх)`} thumbnail={bunIngredient?.image_mobile} type={'top'} isLocked />
          )}

          <div className={`mb-2 ${styles['selected-list']}`}>
            {otherIngredients.map(ingredient => (
              <SelectedItem price={ingredient.price} text={ingredient.name} thumbnail={ingredient.image_mobile} key={ingredient.activeId} activeId={ingredient.activeId} id={ingredient._id} />
            ))}
          </div>

          {bunIngredient && (
            <SelectedItem dragHidden={true} price={bunIngredient?.price} text={`${bunIngredient?.name} (низ)`} thumbnail={bunIngredient?.image_mobile} type={'bottom'} isLocked />
          )}
        </div>

        <footer className={styles.footer}>
          <div className={`mr-5 ${styles.sum}`}>
            <span className={`text text_type_digits-default mr-1 ${styles.value}`}>{sumPrice}</span>
            <CurrencyIcon type="primary" />
          </div>
          <Button type="primary" size="large" onClick={openModalWithContent}>Оформить заказ</Button>
        </footer>
      </section>
    </>
  )
}

export default BurgerConstructor;