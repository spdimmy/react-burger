import React from "react";
import styles from "./ingredients-section.module.css"
import Ingredient from "../ingredient/ingredient";

function IngredientsSection({title, items, index, childRef}) {
  return (
    <div className={'mb-2'}>
      <h2 className={`text text_type_main-medium mb-3`} ref={el => childRef.current.splice(index, 1, el)}>{title}</h2>
      <div className={styles.section}>
        {items.map(item => (
          <Ingredient {...item} key={item._id} />
        ))}
      </div>
    </div>
  )
}

export default IngredientsSection;