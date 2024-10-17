import React, { useEffect, useRef, useState } from "react";
import styles from "./Skills.module.scss";
import classNames from "classnames";

function ComponentSkills({ skills }) {
  const skillsBlockRef = useRef(null);
  const [visibleIcons, setVisibleIcons] = useState(false);

  useEffect(() => {
    const skillsBloc = skillsBlockRef.current;

    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleIcons(true);
          } else {
            setVisibleIcons(false);
          }
        });
      },
      { rootMargin: "0px", threshold: 0.5 }
    );

    if (skillsBloc) {
      skillsObserver.observe(skillsBloc);
    }

    return () => {
      if (skillsBloc) {
        skillsObserver.unobserve(skillsBloc);
      }
    };
  }, []);

  return (
    <div ref={skillsBlockRef} className={styles.skils}>
      <div className={styles.skils_titleHolder}>
        <div
          className={classNames(styles.skils_titleHolder_title, styles.title)}
        >
          <p>Skills</p>
        </div>
        <h4>The skills, tools and technologies I am really good at:</h4>
      </div>

      <div className={styles.skils_skilsIcons}>
        {skills.map((skill, index) => (
          <div
            key={skill.id}
            className={classNames(styles.skils_skilsIcons_holder, {
              [styles.rollInBlurredLeft]: visibleIcons,
              [styles.rollOutBlurredRight]: !visibleIcons,
            })}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <skill.icon
              className={classNames(styles.skils_skilsIcons_holder_icon)}
            />
            <h5>{skill.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComponentSkills;
