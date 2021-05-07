import React from "react";
import IngredientsSection from "../ingredients-section/ingredients-section";

function Ingredients({sections, openModal}) {
  return (
    <>
      {sections.map((section, i) => (
        <IngredientsSection title={section.title} items={section.items} key={`section-${i}`} openModal={openModal} />
      ))}
    </>
  )
}

export default Ingredients;