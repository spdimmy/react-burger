import {React, useState, useEffect} from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./tabs.module.css";

function Tabs(props) {
  const [current, setCurrent] = useState('');

  useEffect(() => {
    setCurrent(props.tabs[0]);
  }, [props]);

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