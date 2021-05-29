import React from 'react';
import styles from  './burger-constructor.module.css';
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import SelectedItem from "../selected-item/selected-item";
import {useDispatch, useSelector} from "react-redux";
import {ADD_INGREDIENT, getOrder, OPEN_MODAL} from "../../services/actions/burger";
import {useDrop} from "react-dnd";

function BurgerConstructor() {
  const dispatch = useDispatch();
  const {activeIngredients} = useSelector(store => store.ingredients);
  const [{isOver}, dropTarget] = useDrop({
    accept: "all",
    drop(obj) {
      dispatch({
        type: ADD_INGREDIENT,
        id: obj.id,
        productType: obj.type
      });
    },
    collect: monitor => ({
      isOver: monitor.isOver()
    })
  });

  const bunIngredient = activeIngredients.find(item => item.type === "bun");
  const otherIngredients = activeIngredients.filter(item => item.type !== "bun");
  const sumPrice = activeIngredients.reduce((acc, curr) => curr.type === "bun" ? acc + curr.price * 2 : acc + curr.price, 0);

  const openModalWithContent = () => {
    const activeIngredientsIds = activeIngredients.map(ingredient => ingredient._id);

    // Prevent submit order without order
    bunIngredient
     ? dispatch(getOrder(activeIngredientsIds))
     : dispatch({type: OPEN_MODAL, content: <h2>Хлеб - всему голова, выберите булочку</h2>});
  };

  const wrapperClass = `
    mb-5 
    ${styles['constructor-list']} 
    ${(!bunIngredient && !otherIngredients.length) ? styles['constructor-list-empty'] : ''} 
    ${isOver ? styles['constructor-list-hover'] : ''}
  `;

  return (
    <>
      <section className={styles.section}>
        <div className={wrapperClass} ref={dropTarget}>
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