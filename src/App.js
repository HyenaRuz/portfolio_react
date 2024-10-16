import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import styles from "./styles/App.module.scss";
import Main from "./components/Main/Main";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  const About = useRef(null);
  const Work = useRef(null);
  const Skills = useRef(null);
  const Contacts = useRef(null);

  return (
    <div className={styles.wrapper}>
      <Header
        theme={toggleTheme}
        About={About}
        Work={Work}
        Skills={Skills}
        Contacts={Contacts}
      />
      <Main About={About} Work={Work} Skills={Skills} Contacts={Contacts} />
      <Footer />
    </div>
  );
}

export default App;
