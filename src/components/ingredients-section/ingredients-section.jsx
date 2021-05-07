import React from "react";
import styles from "./ingredients-section.module.css"
import Ingredient from "../ingredient/ingredient";

function IngredientsSection({title, items, openModal}) {
  return (
    <div className={'mb-2'}>
      <h2 className={`text text_type_main-medium mb-3`}>{title}</h2>
      <div className={styles.section}>
        {items.map(item => (
          <Ingredient {...item} counter={1} key={item._id} openModal={openModal} />
        ))}
      </div>
    </div>
  )
}

export default IngredientsSection;