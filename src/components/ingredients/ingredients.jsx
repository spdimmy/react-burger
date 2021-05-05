import React from "react";
import IngredientsSection from "../ingredients-section/ingredients-section";

function Ingredients(props) {
  return (
    <>
      {props.sections.map((section, i) => (
        <IngredientsSection title={section.title} items={section.items} key={`section-${i}`} />
      ))}
    </>
  )
}

export default Ingredients;