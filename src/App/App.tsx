import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/ui/Footer/Footer";
import Header from "../components/ui/Header/Header";
import NotFound from "../pages/404/NotFound";
import Landing from "../pages/landing/Landing";
import styles from "./App.module.scss";
import { Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import { faMoon as faMoonSolid } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonRegular } from "@fortawesome/free-regular-svg-icons";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className={styles.appContainer} data-theme={theme}>
      <div className={styles.headerTopContainer}>
        <Header />
        <button onClick={switchTheme}>
          {theme === "dark" ? (
            <FontAwesomeIcon
              icon={faMoonSolid}
              size="2x"
              className={styles.darkmodeIcon}
            />
          ) : (
            <FontAwesomeIcon
              icon={faMoonRegular}
              size="2x"
              className={styles.darkmodeIcon}
            />
          )}
        </button>
      </div>
      <div className={styles.mainPageTopContainer}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div className={styles.footerTopContainer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
