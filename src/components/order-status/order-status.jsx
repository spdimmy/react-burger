import React from "react";
import styles from "./order-status.module.css";
import cn from 'classnames';

function OrderStatus() {
  return (
    <>
      <div className={cn('mb-15', styles.status)}>
        <div>
          <h2 className={'mb-6'}>Готовы:</h2>
          <ul className={cn('text text_type_digits-default', styles.ready)}>
            <li>034525</li>
            <li>034527</li>
            <li>034530</li>
            <li>034532</li>
            <li>034533</li>
          </ul>
        </div>
        <div>
          <h2 className={'mb-6'}>В работе:</h2>
          <ul className={'text text_type_digits-default'}>
            <li>034538</li>
            <li>034541</li>
            <li>034542</li>
          </ul>
        </div>
      </div>
      <div className={'mb-15'}>
        <h2 className={'text text_type_main-medium'}>Выполнено за все время:</h2>
        <span className={cn('text text_type_digits-large', styles.digit)}>28 752</span>
      </div>
      <div>
        <h2 className={'text text_type_main-medium'}>Выполнено за сегодня:</h2>
        <span className={cn('text text_type_digits-large', styles.digit)}>138</span>
      </div>
    </>
  )
}

export default OrderStatus;