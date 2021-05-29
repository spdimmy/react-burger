import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from "./selected-item.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {REMOVE_INGREDIENT, UPDATE_CONSTRUCTOR_ORDER} from "../../services/actions/burger";
import {useDrag, useDrop} from "react-dnd";

function SelectedItem(props) {
  const dispatch = useDispatch();
  const {activeIngredients} = useSelector(store => store.ingredients);
  const ref = useRef(null);
  const index = activeIngredients.findIndex(el => el.activeId === props.activeId);

  const [, drop] = useDrop({
    accept: "ingredient",
    hover(el) {
      if (!ref.current) {
        return;
      }

      const dragIndex = el.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      dispatch({
        type: UPDATE_CONSTRUCTOR_ORDER,
        from: hoverIndex,
        to: dragIndex
      });

      el.index = hoverIndex;
    },
  });

  const [{ isDrag }, drag] = useDrag({
    type: "ingredient",
    item: {
      index: index
    },
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });

  drag(drop(ref));

  const handleClose = () => {
    dispatch({
      type: REMOVE_INGREDIENT,
      id: props.id,
      activeId: props.activeId
    })
  };

  const opacity = isDrag ? 0 : 1;

  return (
    <div {...(!props.isLocked && {ref: ref})} className={styles['selected-item']} style={{opacity}}>
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