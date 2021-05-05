import React from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./tabs.module.css";

function Tabs(props) {
  const [current, setCurrent] = React.useState(props.tabs[0]);

  return (
    <div style={{ display: 'flex' }} className={styles.tabs}>
      {props.tabs.map((tab, i) => (
        <Tab value={tab} active={current === tab} onClick={setCurrent} key={`tab-${i}`}>
          {tab}
        </Tab>
      ))}
    </div>
  )
}

export default Tabs;