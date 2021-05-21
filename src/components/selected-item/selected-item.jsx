import React, {useContext} from 'react';
import styles from "./selected-item.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {IngredientsContext} from "../../services/ingredientsContext";

function SelectedItem(props) {
  const {ingredientsDispatcher} = useContext(IngredientsContext);

  const handleClose = () => {
    ingredientsDispatcher({
      type: 'remove',
      id: props.id
    });
  };

  return (
    <div className={styles['selected-item']}>
      <div className={`${styles.drag} ${props.dragHidden && styles.drag_hidden}`}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        type={props.type}
        isLocked={props.isLocked}
        handleClose={handleClose}
        price={props.price}
        text={props.text}
        thumbnail={props.thumbnail} />
    </div>
  )
}

export default SelectedItem;