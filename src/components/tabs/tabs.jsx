import React from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./tabs.module.css";

function Tabs(props) {
  function handleClick(tab) {
    props.tabClick(tab);
  }

  return (
    <div style={{ display: 'flex' }} className={styles.tabs}>
      {props.tabs.map((tab, i) => (
        <Tab value={tab} active={props.current === tab} key={`tab-${i}`} onClick={handleClick}>
          {tab}
        </Tab>
      ))}
    </div>
  )
}

export default Tabs;