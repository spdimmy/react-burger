import React from "react";
import styles from "./order-info.module.css";
import cn from "classnames";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useSelector} from "react-redux";

let data = {
  number: '#034535',
  date: 'Сегодня, 16:20 i-GMT+3',
  name: 'Death Star Starship Main бургер',
  ingredients: ["https://code.s3.yandex.net/react/code/bun-02-mobile.png", "https://code.s3.yandex.net/react/code/meat-03-mobile.png", "https://code.s3.yandex.net/react/code/bun-01-mobile.png", "https://code.s3.yandex.net/react/code/meat-02-mobile.png", "https://code.s3.yandex.net/react/code/meat-04-mobile.png", "https://code.s3.yandex.net/react/code/meat-01-mobile.png", "https://code.s3.yandex.net/react/code/sauce-02-mobile.png", "https://code.s3.yandex.net/react/code/sauce-04-mobile.png", "https://code.s3.yandex.net/react/code/sauce-03-mobile.png", "https://code.s3.yandex.net/react/code/sauce-01-mobile.png", "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png", "https://code.s3.yandex.net/react/code/sp_1-mobile.png", "https://code.s3.yandex.net/react/code/core-mobile.png", "https://code.s3.yandex.net/react/code/salad-mobile.png", "https://code.s3.yandex.net/react/code/cheese-mobile.png"],
  price: '480',
  status: 'Выполнен'
};

let {number, date, status, name, price} = data;

function OrderInfoPage() {
  const {ingredients} = useSelector(store => store.ingredients);

  return (
    <main className={`container`}>
      <div className={styles.wrapper}>
        <span className={cn(styles.number, 'text text_type_digits-default mb-5')}>
          {number}
        </span>
        <div className={'mb-15'}>
          <h1 className={cn(styles.name, 'text text_type_main-medium mb-2')}>
            {name}
          </h1>
          <span className={styles.status}>
            {status}
          </span>
        </div>
        <h2 className={'text text_type_main-medium mb-6'}>Состав:</h2>
        <ul className={cn(styles.ingredients, 'mb-10 pr-4')}>
          {ingredients.map((ingredient, index) => (
            <li className={cn(styles.ingredient, 'mb-4')} key={index}>
              <div className={cn(styles.image, 'mr-4')}>
                <img src={ingredient.image_mobile} alt="ingredient"/>
              </div>
              <div className={styles.name}>
                {ingredient.name}
              </div>
              <div className={styles.price}>
                <span className={'text text_type_digits-default mr-2'}>2 x {ingredient.price}</span>
                <CurrencyIcon type="primary"/>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.bottom}>
          <span className={cn(styles.date, 'text text_type_main-default text_color_inactive')}>{date}</span>
          <div className={styles.price}>
            <span className={'text text_type_digits-default mr-2'}>{price}</span>
            <CurrencyIcon type="primary"/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default OrderInfoPage;