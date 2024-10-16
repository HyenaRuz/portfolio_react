import React from "react";
import styles from "./LinkButton.module.scss";

function LinkButton({ iconSvg, href }) {
  return (
    <a
      href={href}
      className={styles.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {iconSvg}
    </a>
  );
}

export default LinkButton;
