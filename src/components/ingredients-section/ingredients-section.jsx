import React from "react";
import styles from "./ingredients-section.module.css"
import Ingredient from "../ingredient/ingredient";

class IngredientsSection extends React.Component {
  render() {
    return (
      <div className={'mb-2'}>
        <h2 className={`text text_type_main-medium mb-3`}>{this.props.title}</h2>
        <div className={styles.section}>
          {this.props.items.map(item => (
            <Ingredient counter={1} image={item.image} price={item.price} description={item.name} key={item._id} />
          ))}
        </div>
      </div>
    )
  }
}

export default IngredientsSection;