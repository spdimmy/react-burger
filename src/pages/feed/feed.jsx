import React from "react";
import styles from "./feed.module.css";
import OrderCard from "../../components/order-card/order-card";
import OrderStatus from "../../components/order-status/order-status";

let data = {
  number: '034535',
  date: 'Сегодня, 16:20 i-GMT+3',
  name: 'Death Star Starship Main бургер',
  ingredients: ["https://code.s3.yandex.net/react/code/bun-02-mobile.png", "https://code.s3.yandex.net/react/code/meat-03-mobile.png", "https://code.s3.yandex.net/react/code/bun-01-mobile.png", "https://code.s3.yandex.net/react/code/meat-02-mobile.png", "https://code.s3.yandex.net/react/code/meat-04-mobile.png", "https://code.s3.yandex.net/react/code/meat-01-mobile.png", "https://code.s3.yandex.net/react/code/sauce-02-mobile.png", "https://code.s3.yandex.net/react/code/sauce-04-mobile.png", "https://code.s3.yandex.net/react/code/sauce-03-mobile.png", "https://code.s3.yandex.net/react/code/sauce-01-mobile.png", "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png", "https://code.s3.yandex.net/react/code/sp_1-mobile.png", "https://code.s3.yandex.net/react/code/core-mobile.png", "https://code.s3.yandex.net/react/code/salad-mobile.png", "https://code.s3.yandex.net/react/code/cheese-mobile.png"],
  price: '480',
};

let arr = [data, data, data, data, data, data, data];

function PageFeed() {
  return (
    <main className={`container ${styles.main}`}>
      <h1 className={`text text_type_main-large mb-5`}>Лента заказов</h1>
      <div className={styles.cols}>
        <section className={styles.section}>
          {arr.map((el, index) => (
            <OrderCard {...el} key={index} />
          ))}
        </section>
        <section className={styles.section}>
          <OrderStatus />
        </section>
      </div>
    </main>
  )
}

export default PageFeed;