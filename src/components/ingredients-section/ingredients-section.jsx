import React from "react";
import styles from "./ingredients-section.module.css"
import Ingredient from "../ingredient/ingredient";

function IngredientsSection(props) {
  return (
    <div className={'mb-2'}>
      <h2 className={`text text_type_main-medium mb-3`}>{props.title}</h2>
      <div className={styles.section}>
        {props.items.map(item => (
          <Ingredient {...item} counter={1} key={item._id} />
        ))}
      </div>
    </div>
  )
}

export default IngredientsSection;