import React from "react";
import data from "../../utils/data";
import IngredientsSection from "../ingredients-section/ingredients-section";

class Ingredients extends React.Component {
  render() {
    const BUN = "bun";
    const MAIN = "main";
    const SAUCE = "sauce";
    const sections = [];

    function checkTitle(type) {
      switch (type) {
        case BUN:
          return 'Булки';
        case MAIN:
          return 'Начинка';
        case SAUCE:
          return 'Соусы';
        default:
          break;
      }
    }

    data.forEach(el => {
      let existingSection = sections.find(section => section.type === el.type);

      existingSection
        ? existingSection.items.push(el)
        : sections.push({
          type: el.type,
          title: checkTitle(el.type),
          items: [el],
        })
    });

    return (
      <>
        {sections.map((el, i) => (
          <IngredientsSection title={el.title} items={el.items} key={`section-${i}`} />
        ))}
      </>
    )
  }
}

export default Ingredients;