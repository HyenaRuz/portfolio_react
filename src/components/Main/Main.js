import styles from "./Main.module.scss";
import { ReactComponent as Location } from "../../assets/icon/icon-location24.svg";
import { ReactComponent as Phone } from "../../assets/icon/icon-phone24.svg";
import { ReactComponent as Email } from "../../assets/icon/icon-inbox24.svg";
import classNames from "classnames";
import CopyButton from "../Buttons/CopyButton/CopyButton";
import LinkButton from "../Buttons/LinkButton/LinkButton";
import { skills } from "../../data/skillsData";
import { works } from "../../data/worksData";
import { about, hero } from "../../data/aboutData";
import Works from "../Works/Works";
import ComponentAbout from "../ComponentAbout/ComponentAbout";
import ComponentSkills from "../ComponentSkills/ComponentSkills";

function Main({ About, Work, Skills, Contacts, Home }) {
  return (
    <main className={styles.main}>
      {/* HERO */}
      <div className={styles.main_hero} ref={Home}>
        <div className={styles.main_hero_info}>
          <div className={styles.main_hero_info_text}>
            <h1>{hero.info.title}</h1>
            <p>{hero.info.text}</p>
          </div>

          <div className={styles.main_hero_info_location}>
            <Location />
            <p>{hero.location}</p>
          </div>

          <div className={styles.main_hero_info_link}>
            {hero.links.map((link, index) => (
              <LinkButton
                href={link.href}
                iconSvg={<link.icon />}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className={styles.main_hero_holder}>
          <div className={styles.main_hero_holder_picture}>
            <img src={hero.picture} alt="avatar" loading="lazy" />
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div ref={About}>
        <ComponentAbout about={about} />
      </div>

      {/* SKILLS */}
      <div ref={Skills}>
        <ComponentSkills skills={skills} />
      </div>

      {/* WORKS */}
      <div ref={Work}>
        <Works works={works} />
      </div>

      {/* CONTACT */}
      <div ref={Contacts} className={styles.main_contact}>
        <div className={styles.main_contact_content}>
          <div
            className={classNames(
              styles.main_contact_content_title,
              styles.box
            )}
          >
            <p className={styles.title}>Contacts</p>
            <h4>
              What’s next? Feel free to reach out to me if you're looking for a
              developer, have a query, or simply want to connect.
            </h4>
          </div>
          <div
            className={classNames(styles.main_contact_content_info, styles.box)}
          >
            <div className={styles.main_contact_content_info_email}>
              <Email />
              <h2>babaiev.novruz@gmail.com</h2>
              <CopyButton copyText={"babaiev.novruz@gmail.com"} />
            </div>
            <div className={styles.main_contact_content_info_phone}>
              <Phone />
              <h2>+353 852709583</h2>
              <CopyButton copyText={"+353 852709583"} />
            </div>
          </div>
          <div
            className={classNames(styles.main_contact_content_link, styles.box)}
          >
            <p>You may also find me on these platforms!</p>
            <div className={styles.main_contact_content_link_icon}>
              {hero.links.map((link, index) => (
                <LinkButton
                  href={link.href}
                  iconSvg={<link.icon />}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
