import React from "react";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from './ingredient.module.css'

class Ingredient extends React.Component {
  render() {
    return (
      <div className={`ml-2 mr-2 mb-4 ${style.card}`}>
        <Counter count={this.props.counter} size="small" />
        <img
          src={this.props.image}
          alt={`картинка для ${this.props.name}`}
          className={"mb-1"} />
        <div className={`mb-1 ${style.price}`}>
          <span className={"text text_type_digits-default mr-1"}>{this.props.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

export default Ingredient;