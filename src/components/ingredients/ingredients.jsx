import React from "react";
import IngredientsSection from "../ingredients-section/ingredients-section";

class Ingredients extends React.Component {
  render() {
    return (
      <>
        {this.props.sections.map((section, i) => (
          <IngredientsSection title={section.title} items={section.items} key={`section-${i}`} />
        ))}
      </>
    )
  }
}

export default Ingredients;