import styles from "./Link.module.scss";
import React from "react";

function Link({ name, sectionRef }) {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button onClick={() => scrollToSection(sectionRef)} target="_blank" className={styles.link}>
      <p className={styles.link_text}>{name}</p>
    </button>
  );
}

export default Link;
