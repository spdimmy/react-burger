import React from 'react';
import styles from "./selected-item.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

class SelectedItem extends React.Component {
  render() {
    return (
      <div className={styles['selected-item']}>
        <div className={`${styles.drag} ${this.props.dragHidden && styles.drag_hidden}`}>
          <DragIcon type="primary" />
        </div>
        <ConstructorElement
          type={this.props.type}
          isLocked={this.props.isLocked}
          price={this.props.price}
          text={this.props.text}
          thumbnail={this.props.thumbnail} />
      </div>
    )
  }
}

export default SelectedItem;