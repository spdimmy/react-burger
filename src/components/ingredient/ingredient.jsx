import React from "react";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from './ingredient.module.css'

function Ingredient(props) {
  return (
    <div className={`ml-2 mr-2 mb-4 ${style.card}`}>
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
  )
}

export default Ingredient;