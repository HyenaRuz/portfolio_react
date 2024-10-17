import ButtonDownloadCV from "../Buttons/ButtonDownloadCV/ButtonDownloadCV";
import ButtonLight from "../Buttons/ButtonLigt/ButtonLight";
import Link from "../Buttons/Link/Link";
import styles from "./Header.module.scss";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Burger from "../Buttons/Burger/Burger";
import classNames from "classnames";

function Modal({ active, setActive, reference, theme }) {
  const { About, Work, Skills, Contacts } = reference;

  useEffect(() => {
    if (active === true) {
      document.body.style.overflow = "hidden"; // Отключаем скроллинг
    } else {
      document.body.style.overflow = "auto"; // Включаем скроллинг обратно
    }

    // Чистим эффект при размонтировании компонента или при закрытии модального окна
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [active]);

  const handelesActive = () => {
    setActive(!active);
  };

  return (
    <nav
      className={classNames(styles.header_navMenu, "__2xl")}
      style={{ transform: active ? "translateX(0)" : "translateX(-100%)" }}
    >
      <div className={styles.header_navMenu_content}>
        <ul style={{ listStyleType: "none" }}>
          <li onClick={handelesActive}>
            <Link sectionRef={About} name={"About"} />
          </li>
          <li onClick={handelesActive}>
            <Link sectionRef={Work} name={"Work"} />
          </li>
          <li onClick={handelesActive}>
            <Link sectionRef={Skills} name={"Skills"} />
          </li>
          <li onClick={handelesActive}>
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
  );
}

function Header({ theme, About, Work, Skills, Contacts, Home }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [active, setActive] = useState();

  useLayoutEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className={styles.wrapperHeader}>
        <header className={styles.header}>
          <div className={styles.header_logo}>
            <h3 onClick={() => scrollToSection(Home)}>{"<NB />"}</h3>
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
        </header>
      </div>

      {width < 768 ? (
        <Modal
          active={active}
          setActive={setActive}
          theme={theme}
          reference={{ About, Work, Skills, Contacts }}
        />
      ) : (
        // <nav
        //   className={classNames(styles.header_navMenu, "__2xl")}
        //   style={{ transform: active ? "translateX(0)" : "translateX(-100%)" }}
        // >
        //   <div className={styles.header_navMenu_content}>
        //     <ul style={{ listStyleType: "none" }}>
        //       <li>
        //         <Link sectionRef={About} name={"About"} />
        //       </li>
        //       <li>
        //         <Link sectionRef={Work} name={"Work"} />
        //       </li>
        //       <li>
        //         <Link sectionRef={Skills} name={"Skills"} />
        //       </li>
        //       <li>
        //         <Link sectionRef={Contacts} name={"Contacts"} />
        //       </li>
        //     </ul>

        //     <div className={styles.header_navMenu_content_button}>
        //       <div>
        //         <p>Switch Theme</p>
        //         <ButtonLight method={theme} />
        //       </div>
        //       <ButtonDownloadCV width={true} />
        //     </div>
        //   </div>
        // </nav>
        <></>
      )}
    </>
  );
}

export default Header;
