import React, { useEffect, useState } from "react";
import styles from "./ButtonLight.module.scss";
import { ReactComponent as IconLight } from "../../../assets/icon/icon-light-mode24.svg";
import { ReactComponent as IconDark } from "../../../assets/icon/icon-dark-mode24.svg";

function ButtonLight({ method }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setIsDarkTheme(savedTheme === "dark");
  }, []);

  const handleClick = () => {
    method();
    setIsDarkTheme((prevTheme) => !prevTheme);
  };
  return (
    <button onClick={handleClick} className={styles.button}>
      {isDarkTheme ? <IconDark /> : <IconLight />}
    </button>
  );
}

export default ButtonLight;
