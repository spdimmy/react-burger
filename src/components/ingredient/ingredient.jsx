import React, {useState} from "react";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from './ingredient.module.css'
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

function Ingredient(props) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const modal = (
    <Modal onClose={closeModal} header={'Детали ингредиента'}>
      <IngredientDetails {...props}  />
    </Modal>
  );

  return (
    <>
      <div className={`ml-2 mr-2 mb-4 ${style.card}`} onClick={openModal}>
        <Counter count={props.counter} size="small" />
        <img
          src={props.image}
          alt={`картинка для ${props.name}`}
          className={"mb-1"} />
        <div className={`mb-1 ${style.price}`}>
          <span className={"text text_type_digits-default mr-1"}>{props.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <p>{props.name}</p>
      </div>
      {isModalOpen && modal}
    </>
  )
}

export default Ingredient;