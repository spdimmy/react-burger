import React from 'react';
import styles from "./selected-item.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function SelectedItem(props) {
  return (
    <div className={styles['selected-item']}>
      <div className={`${styles.drag} ${props.dragHidden && styles.drag_hidden}`}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        type={props.type}
        isLocked={props.isLocked}
        price={props.price}
        text={props.text}
        thumbnail={props.thumbnail} />
    </div>
  )
}

export default SelectedItem;