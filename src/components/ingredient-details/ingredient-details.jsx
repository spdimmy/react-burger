import React from "react";
import style from './ingredient-details.module.css';
import PropTypes from 'prop-types'
import {useSelector, shallowEqual} from 'react-redux';
import {useParams} from 'react-router-dom'

function IngredientDetails() {
  const {ingredients, ingredientsRequest, ingredientsFailed} = useSelector(store => store.ingredients, shallowEqual);
  const {id} = useParams();
  const props = ingredients.find(e => e._id === id);

  return (
    ingredients.length && !ingredientsRequest && !ingredientsFailed ?
    <div className={style.wrapper}>
      <h2>Детали ингредиента</h2>
      <img src={props.image_large} alt={props.name} title={props.name} className={'mb-4'}/>
      <h3 className="text text_type_main-medium mb-8">
        {props.name}
      </h3>
      <div className={`text text_type_main-default text_color_inactive ${style.composition}`}>
        <div className={'ml-5 mr-5'}>
          <div className={'mb-2'}>Калории,ккал</div>
          <div>{props.calories}</div>
        </div>
        <div className={'ml-5 mr-5'}>
          <div className={'mb-2'}>Белки, г</div>
          <div>{props.proteins}</div>
        </div>
        <div className={'ml-5 mr-5'}>
          <div className={'mb-2'}>Жиры, г</div>
          <div>{props.fat}</div>
        </div>
        <div className={'ml-5 mr-5'}>
          <div className={'mb-2'}>Углеводы, г</div>
          <div>{props.carbohydrates}</div>
        </div>
      </div>
    </div> : <h1>Loading</h1>
  )
}

IngredientDetails.propTypes = {
  image_large: PropTypes.string,
  calories: PropTypes.number,
  carbohydrates: PropTypes.number,
  fat: PropTypes.number,
  proteins: PropTypes.number,
};

export default IngredientDetails;