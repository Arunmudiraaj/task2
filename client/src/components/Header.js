import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <BiMenuAltLeft />
        <span className={styles.span}>Notes</span>
      </div>
    </div>
  );
};

export default Header;
