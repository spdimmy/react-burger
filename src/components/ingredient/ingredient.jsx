import React from "react";
import { OPEN_MODAL } from '../../services/actions/burger';
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from './ingredient.module.css';
import IngredientDetails from "../ingredient-details/ingredient-details";
import {useDrag} from "react-dnd";

function Ingredient(props) {
  const dispatch = useDispatch();
  const [{isDrag}, dragRef] = useDrag({
    type: "all",
    item: {
      id: props._id,
      type: props.type
    },
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });

  const handleIngredientClick = () => {
    dispatch({
      type: OPEN_MODAL,
      header: 'Детали ингредиента',
      content: <IngredientDetails {...props} />,
    });
  };

  return React.useMemo(
    () => (
      <>
        <div className={`ml-2 mr-2 mb-4 ${isDrag ? style.cardActive : style.card}`} ref={dragRef} onClick={handleIngredientClick} draggable>
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
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.count, isDrag]
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