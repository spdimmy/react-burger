import React from 'react';
import { useDispatch } from "react-redux";
import styles from "./selected-item.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {REMOVE_INGREDIENT} from "../../services/actions/burger";

function SelectedItem(props) {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({
      type: REMOVE_INGREDIENT,
      id: props.id,
      activeId: props.activeId
    })
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