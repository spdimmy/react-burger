import React, {useState} from "react";
import styles from './order-card.module.css'
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import cn from 'classnames';
import {Link} from "react-router-dom";

function OrderCard({ number, date, name, ingredients, price }) {
  const [isExpanded, setExpand] = useState(false);

  const handleExpand = (e) => {
    e.preventDefault();
    setExpand(!isExpanded);
  };

  return (
    <Link to={'/feed/' + number} className={cn(styles.card, 'mb-4 p-6')}>
      <span className={cn(styles.number, 'text text_type_digits-default')}>
        #{number}
      </span>
      <span className={cn(styles.date, 'text text_type_main-default text_color_inactive')}>
        {date}
      </span>
      <h2 className={cn(styles.name, 'text text_type_main-medium')}>
        {name}
      </h2>
      <ul className={cn(styles.ingredients, { [styles.hidden]: (ingredients.length > 4 && !isExpanded) })}>
        {ingredients.map((ingredient, index) => (
          <li className={styles.ingredient} key={index}>
            <img src={ingredient} alt="ingredient" />
          </li>
        ))}
        {ingredients.length > 4 && !isExpanded && <li className={styles.expand} onClick={handleExpand}>+{ingredients.length - 4}</li>}
      </ul>
      <div className={styles.price}>
        <span className={'text text_type_digits-default mr-2'}>{price}</span>
        <CurrencyIcon type="primary" />
      </div>
    </Link>
  )
}

export  default OrderCard;