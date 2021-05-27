import React from "react";
import { ADD_INGREDIENT, OPEN_MODAL } from '../../services/actions/burger';
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from './ingredient.module.css';
import IngredientDetails from "../ingredient-details/ingredient-details";

function Ingredient(props) {
  const dispatch = useDispatch();

  const handleIngredientClick = () => {
    dispatch({
      type: OPEN_MODAL,
      header: 'Детали ингредиента',
      content: <IngredientDetails {...props} />,
    });

    dispatch({
      type: ADD_INGREDIENT,
      id: props._id,
      productType: props.type
    });
  };

  return (
    <>
      <div className={`ml-2 mr-2 mb-4 ${style.card}`} onClick={handleIngredientClick}>
        {!!props.count && <Counter count={props.count} size="small" />}
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
    </>
  )
}

Ingredient.propTypes = {
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
};

export default Ingredient;