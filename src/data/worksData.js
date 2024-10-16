import IconPoto from "../assets/photo_2023-10-13 15.34.24.jpeg";
import Aesthetic from "../assets/Aesthetic.png";
import RPS from "../assets/RPS.png";
import Everest from "../assets/Everest.png";
import Portfolio from "../assets/Снимок экрана 2024-09-29 в 19.07.21.png";

export const works = [
  {
    id: 6,
    picture: Portfolio,
    video: "https://www.youtube.com/embed/hZliD3I12Aw",
    info: {
      title: "Portfolio",
      text: (
        <>
          <p>
            I am excited to present my personal portfolio website, a project
            that reflects my journey as a front-end developer. Built with React,
            this website showcases my skills, projects, and the creative process
            behind each development.
          </p>
          <br />
          <p>
            As I continue to learn and grow, this portfolio will serve as a
            living document of my work, highlighting my journey and the projects
            I’m most proud of. I am dedicated to continuously updating it as I
            take on new challenges and expand my skill set.
          </p>
        </>
      ),
    },
    skills: ["React", "JavaScript", "Figma", "Git", "HTML", "SCSS"],
    link: "https://github.com/HyenaRuz/school",
  },

  {
    id: 5,
    picture: IconPoto,
    video: "https://www.youtube.com/embed/hZliD3I12Aw",
    info: {
      title: "School",
      text: (
        <p>
          Developed a school management system with features for user
          management, event scheduling, and secure data storage. Utilized modern
          technologies such as React for the frontend and Node.js with
          PostgreSQL for the backend, resulting in a reliable and scalable
          application.
        </p>
      ),
    },
    skills: [
      "React",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Figma",
      "Git",
      "TypeORM",
      "Redux",
      "Docker",
      "Docker Compose",
      "HTML",
      "SCSS",
    ],
    link: "https://github.com/HyenaRuz/school",
  },

  {
    id: 4,
    picture: IconPoto,
    video: "https://www.youtube.com/embed/hZliD3I12Aw",
    info: {
      title: "Company List",
      text: (
        <p>
          CompanyList is a full-featured web application designed for managing a
          list of companies. It includes a NestJS backend and a React frontend,
          all packaged in Docker containers for easy deployment.
        </p>
      ),
    },
    skills: [
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Git",
      "Typescript",
      "Redux",
      "Docker",
      "Docker Compose",
      "HTML",
      "SCSS",
    ],
    link: "https://github.com/HyenaRuz/CompanyList",
  },

  {
    id: 3,
    picture: Everest,
    video: "https://www.youtube.com/embed/hZliD3I12Aw",
    info: {
      title: "Everest",
      text: (
        <p>
          Everest is a project aimed at learning Vue.js. It provides a platform
          for understanding and practicing Vue.js concepts, helping to build
          interactive and dynamic web applications
        </p>
      ),
    },
    skills: ["Figma", "Git", "Vue.js", "HTML", "SCSS"],
    link: "https://hyenaruz.github.io/Everest/",
  },

  {
    id: 2,
    picture: RPS,
    video: "https://www.youtube.com/embed/hZliD3I12Aw",
    info: {
      title: 'Game "Rock Paper Scissors"',
      text: (
        <p>
          RockPaperScissors is a project for learning JavaScript. It involves
          developing a classic Rock-Paper-Scissors game, serving as a practical
          exercise for mastering JavaScript basics and game development logic.
        </p>
      ),
    },
    skills: ["Git", "Vue.js", "HTML", "SCSS"],
    link: "https://hyenaruz.github.io/RockPaperScissors/",
  },

  {
    id: 1,
    picture: Aesthetic,
    video: "https://www.youtube.com/embed/hZliD3I12Aw",
    info: {
      title: "Aesthetic Web",
      text: (
        <p>
          AESTHETICS is a project focused on learning HTML. It serves as a
          practice ground for understanding and mastering the basics of HTML,
          providing a foundation for further web development skills.
        </p>
      ),
    },
    skills: ["HTML", "CSS"],
    link: "https://hyenaruz.github.io/AESTHETICS/",
  },
];
