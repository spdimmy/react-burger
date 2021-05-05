import {React, useState} from 'react';
import PropTypes from 'prop-types';
import styles from  './burger-constructor.module.css';
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import SelectedItem from "../selected-item/selected-item";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

function BurgerConstructor({data}) {
  const [isModalOpen, setModalOpen] = useState(false);
  const ingredients = data;
  const bunIngredient = ingredients.find(item => item.type === "bun");
  const sumPrice = ingredients.reduce((acc, curr) => acc + curr.price, 0);
  const otherIngredients = ingredients.filter(item => item.type !== "bun");

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const modal = (
    <Modal onClose={closeModal}>
      <OrderDetails />
    </Modal>
  );

  return (
    <>
      <section className={styles.section}>
        <div className={`mb-5 ${styles['constructor-list']}`}>
          <SelectedItem dragHidden={true} price={bunIngredient?.price} text={`${bunIngredient?.name} (верх)`} thumbnail={bunIngredient?.image_mobile} type={'top'} isLocked />
          <div className={`mb-2 ${styles['selected-list']}`}>
            {otherIngredients.map(ingredient => (
              <SelectedItem price={ingredient.price} text={`${ingredient.name}`} thumbnail={ingredient.image_mobile} key={ingredient._id} />
            ))}
          </div>
          <SelectedItem dragHidden={true} price={bunIngredient?.price} text={`${bunIngredient?.name} (низ)`} thumbnail={bunIngredient?.image_mobile} type={'bottom'} isLocked />
        </div>

        <footer className={styles.footer}>
          <div className={`mr-5 ${styles.sum}`}>
            <span className={`text text_type_digits-default mr-1 ${styles.value}`}>{sumPrice}</span>
            <CurrencyIcon type="primary" />
          </div>
          <Button type="primary" size="large" onClick={openModal}>Оформить заказ</Button>
        </footer>
      </section>
      {isModalOpen && modal}
    </>
  )
}

BurgerConstructor.propTypes = {
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

export default BurgerConstructor;