import styles from "./ButtonDownloadCV.module.scss";
import React from "react";
import CV from "../../../assets/Novruz_Babaiev_-_Front-end_Developer.pdf";
import classNames from "classnames";

function ButtonDownloadCV({ width }) {
  return (
    <a
      href={CV}
      download="Novruz_Babaiev_-_Front-end_Developer.pdf"
      className={classNames(styles.button, { [styles.width]: width })}
    >
      Download CV
    </a>
  );
}

export default ButtonDownloadCV;
