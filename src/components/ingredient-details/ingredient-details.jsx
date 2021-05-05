import React from "react";
import PropTypes from 'prop-types';
import style from './ingredient-details.module.css';

function IngredientDetails({name, calories, proteins, fat, carbohydrates, image_large}) {
  return (
    <>
      <img src={image_large} alt={name} title={name} className={'mb-4'} />
      <h3 className="text text_type_main-medium mb-8">
        {name}
      </h3>
      <p className={'mb-8 text text_type_main-default'}>Превосходные котлеты из марсианской Магнолии для фирменных космических бургеров, набирающих популярность по всей вселенной.</p>
      <div className={`text text_type_main-default text_color_inactive ${style.composition}`}>
        <div className={'ml-5 mr-5'}>
          <div className={'mb-2'}>Калории,ккал</div>
          <div>{calories}</div>
        </div>
        <div className={'ml-5 mr-5'}>
          <div className={'mb-2'}>Белки, г</div>
          <div>{proteins}</div>
        </div>
        <div className={'ml-5 mr-5'}>
          <div className={'mb-2'}>Жиры, г</div>
          <div>{fat}</div>
        </div>
        <div className={'ml-5 mr-5'}>
          <div className={'mb-2'}>Углеводы, г</div>
          <div>{carbohydrates}</div>
        </div>
      </div>
    </>
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