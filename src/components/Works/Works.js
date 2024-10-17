import React, { useEffect, useState } from "react";
import styles from "./Works.module.scss";
import classNames from "classnames";
import {
  EffectCards,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import WorkCard from "../WorkCard/WorkCard";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import "swiper/css/effect-cards";

function Works({ works }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [mySwiper, setMySwiper] = useState(window.innerWidth * 0.94);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);

      setMySwiper(window.innerWidth * 0.94);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      // eslint-disable-next-line no-useless-concat
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <div className={styles.works}>
      <div className={styles.works_content}>
        <div className={styles.works_titleHolder}>
          <div
            className={classNames(styles.works_titleHolder_title, styles.title)}
          >
            <p>Works</p>
          </div>
          <h4>Some of the noteworthy projects I have built:</h4>
        </div>

        {width > 768 ? (
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            navigation={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={pagination}
            modules={[EffectCoverflow, Pagination, Navigation]}
            style={{ overflow: "visible", padding: "50px 0 50px 0" }}
            className="swiper"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {works.map((work, index) => (
              <SwiperSlide key={index}>
                <WorkCard work={work} isActive={index === activeIndex} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Pagination, Navigation]}
            className={styles.mySwiper}
            style={{ width: mySwiper, padding: "50px 0 50px 0" }}
            pagination={true}
            navigation={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {works.map((work, index) => (
              <SwiperSlide key={index}>
                <WorkCard work={work} isActive={index === activeIndex} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}

export default Works;
