import React, { useEffect, useRef, useState } from "react";
import styles from "./About.module.scss";
import classNames from "classnames";

function ComponentAbout({ about }) {
  const holderRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const aboutObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      },
      { rootMargin: "0px", threshold: 0.5 }
    );

    if (holderRef.current) {
      aboutObserver.observe(holderRef.current);
    }

    return () => {
      if (holderRef.current) {
        aboutObserver.unobserve(holderRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.about}>
      <div className={styles.about_content} ref={holderRef}>
        <div className={classNames(styles.about_content_title, styles.title)}>
          <p>About me</p>
        </div>

        <div className={styles.about_content_holder}>
          <div
            className={classNames(styles.about_content_holder_picture, {
              [styles.slideInEllipticLeftFwd]: isIntersecting,
              [styles.slideOutEllipticLeftBck]: !isIntersecting,
            })}
          >
            <img src={about.picture} alt="avatar" loading="lazy" />
          </div>
        </div>

        <div
          className={classNames(styles.about_content_info, {
            [styles.textFocusIn]: isIntersecting,
            [styles.textBlurOut]: !isIntersecting,
          })}
        >
          <h3>Curious about me? Here you have it:</h3>
          <div className={styles.about_content_info_text}>
            {about.info.text}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentAbout;
