import React from "react";
import styles from "./Footer.module.scss";
import { ReactComponent as Copyright } from "../../assets/icon/icon-copyright24.svg";

function Footer() {
  return (
    <div className={styles.footer}>
      <Copyright />
      <h6>2024 | Designed and coded by Novruz Babaiev</h6>
    </div>
  );
}

export default Footer;
