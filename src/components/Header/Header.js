import ButtonDownloadCV from "../Buttons/ButtonDownloadCV/ButtonDownloadCV";
import ButtonLight from "../Buttons/ButtonLigt/ButtonLight";
import Link from "../Buttons/Link/Link";
import styles from "./Header.module.scss";
import React, { useLayoutEffect, useState } from "react";
import Burger from "../Buttons/Burger/Burger";
import classNames from "classnames";

function Header({ theme, About, Work, Skills, Contacts }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [active, setActive] = useState();
  useLayoutEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // console.log("menu", menu);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_logo}>
          <h3>{"<NB />"}</h3>
        </div>

        {width > 768 ? (
          <>
            <nav className={styles.header_nav}>
              <Link sectionRef={About} name={"About"} />
              <Link sectionRef={Work} name={"Work"} />
              <Link sectionRef={Skills} name={"Skills"} />
              <Link sectionRef={Contacts} name={"Contacts"} />
            </nav>
            <div className={styles.header_buttons}>
              <ButtonLight method={theme} />
              <ButtonDownloadCV />
            </div>
          </>
        ) : (
          <Burger active={active} setActive={setActive} />
        )}

        {/* <h1>Current screen width: {width}px</h1> */}
      </header>

      {width < 768 ? (
        <nav
          className={classNames(styles.header_navMenu, "__2xl")}
          style={{ transform: active ? "translateX(0)" : "translateX(-100%)" }}
        >
          <div className={styles.header_navMenu_content}>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <Link sectionRef={About} name={"About"} />
              </li>
              <li>
                <Link sectionRef={Work} name={"Work"} />
              </li>
              <li>
                <Link sectionRef={Skills} name={"Skills"} />
              </li>
              <li>
                <Link sectionRef={Contacts} name={"Contacts"} />
              </li>
            </ul>

            <div className={styles.header_navMenu_content_button}>
              <div>
                <p>Switch Theme</p>
                <ButtonLight method={theme} />
              </div>
              <ButtonDownloadCV width={true} />
            </div>
          </div>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
}

export default Header;
