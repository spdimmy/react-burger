import React from "react";
import IngredientsSection from "../ingredients-section/ingredients-section";

function Ingredients({sections, childRef}) {
  return (
    <>
      {sections.map((section, i) => (
        <IngredientsSection title={section.title} items={section.items} childRef={childRef} index={i} key={`section-${i}`} />
      ))}
    </>
  )
}

export default Ingredients;