import classNames from "classnames";
import styles from "./WorkCard.module.scss";
import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Link } from "../../assets/icon/icon-external-link24.svg";
import LinkButton from "../Buttons/LinkButton/LinkButton";
import YouTubePlayer from "../Player/Player";

function WorkCard({ work, reverse, isActive }) {
  const { picture, info, skills, link, video } = work;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const videoId = video.split("/").pop();

  const holderRef = useRef(null);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = () => {
    if (isActive) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (isPlay === false) setIsHovered(false);
  };

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  useEffect(() => {
    setIsHovered(false);
  }, [isActive]);

  return (
    <div
      className={classNames(styles.workCard, {
        [styles.reverse]: reverse,
        "__md": windowWidth > 768,
      })}
    >
      <div className={styles.workCard_picture}>
        <div
          className={classNames(styles.workCard_picture_holder, {
            [styles.hover]: isHovered,
          })}
          ref={holderRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
        >
          <img src={picture} alt="" className="__lg" loading="lazy" />

          {isActive && (
            <YouTubePlayer
              videoId={videoId}
              isActive={isActive}
              setIsPlay={setIsPlay}
            />
          )}
        </div>
      </div>

      <div className={styles.workCard_description}>
        <h4>{info.title}</h4>
        <span>{info.text}</span>

        <div className={styles.workCard_description_skill}>
          {skills.map((skil, index) => (
            <div className={styles.workCard_description_skill_item} key={index}>
              <h6>{skil}</h6>
            </div>
          ))}
        </div>

        <LinkButton href={link} iconSvg={<Link />} />
      </div>
    </div>
  );
}

export default WorkCard;
