import HeroPhoto from "../assets/photo_2023-10-13 15.34.24.jpeg";
import AboutPhoto from "../assets/fTuqRYCdfiQ.jpeg";
import AboutPhoto2 from "../assets/photo_2024-09-29 19.04.17.jpeg";
import { ReactComponent as Git } from "../assets/icon/icon-github24.svg";
import { ReactComponent as Linkedin } from "../assets/icon/icon-linkedin24.svg";
import { ReactComponent as Teligram } from "../assets/icon/telegram-svgrepo-com1.svg";
import { ReactComponent as WhatsApp } from "../assets/icon/SVGRepo_iconCarrier.svg";

export const hero = {
  picture: HeroPhoto,
  info: {
    title: `Hi, I'm Novruz 👋`,
    text: ` Self-motivated Front-End Developer with nearly two years of
            hands-on experience in building scalable web applications using
            modern technologies like JavaScript, TypeScript, React, and
            Vue.js. Proficient in front-end tools and actively expanding
            backend knowledge with technologies like Node.js and PostgreSQL to
            create full-stack solutions. Dedicated to continuous learning and
            improving skills to develop more efficient and high-performance
            projects.`,
  },
  location: `Kanturk, Irelend`,
  links: [
    {
      id: 1,
      name: `Git`,
      href: "https://github.com/HyenaRuz",
      icon: Git,
    },
    {
      id: 2,
      name: `Linkedin`,
      href: "https://www.linkedin.com/in/novruz-babaiev-4b734728a/",
      icon: Linkedin,
    },
    {
      id: 3,
      name: `Teligram`,
      href: "https://t.me/hyena_ruz",
      icon: Teligram,
    },
    {
      id: 4,
      name: `WhatsApp`,
      href: "https://wa.me/+380686648357",
      icon: WhatsApp,
    },
  ],
};

export const about = {
  picture: AboutPhoto2,
  info: {
    title: `Hi, I'm Novruz 👋`,
    text: (
      <>
        {/* <p>
          Hi! My name is Novruz, and I’m a front-end developer with a deep
          passion for creating interactive and visually appealing solutions. I
          started my journey into front-end development in 2023, and since then,
          I’ve been fully immersed in programming.
        </p>

        <p>
          I chose front-end because I love building things with my hands, and
          for me, it’s the best way to visualize the creation process. My best
          project so far is the School management system, where I implemented
          data storage, a role system, and a responsive interface. In my
          opinion, the most beautiful project I’ve created is this portfolio
          website.
        </p>
        <p>
          When it comes to quality, I always aim for the best results within my
          capabilities and strive to learn new things along the way. In the
          future, I plan to master back-end development, mobile development, and
          explore other programming languages and frameworks.
        </p>
        <p>
          I’m full of enthusiasm because I’m passionate about programming, I
          love the creative approach, and I enjoy solving complex challenges.
          I’m always open to new opportunities and challenges that help me grow
          as a developer.
        </p> */}
        <p>
          Hi! My name is Novruz, and I’m a front-end developer with a profound
          passion for crafting interactive and visually captivating solutions. I
          embarked on my journey into front-end development in 2023, and since
          then, I’ve been deeply immersed in the world of programming.
        </p>
        <p>
          I gravitated towards front-end development due to my creative nature
          and my desire to challenge myself with complex and demanding tasks.
          The visual dimension of any product, whether it’s a website or an
          application, truly enables my imagination to soar.
        </p>
        <p>
          When it comes to quality, I consistently strive for excellence within
          my capabilities and am committed to continuous learning. I aspire to
          master back-end development, mobile development, and delve into other
          programming languages and frameworks. My biggest project to date is
          the School Management System, where I implemented data storage, a
          role-based access system, and a fully responsive interface.
        </p>
        <p>
          I’m highly motivated and always open to new opportunities and
          challenges that foster my growth as a developer.
        </p>
      </>
    ),
  },
};
