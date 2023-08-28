import styles from "./Header.module.scss";
import logoHeader from "../../../assets/images/logo-header.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as faMoonSolid } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonRegular } from "@fortawesome/free-regular-svg-icons";

interface IHeader {
  switchTheme: Function;
  theme: String;
}

const Header = ({ switchTheme, theme }: IHeader) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src={logoHeader} alt="Pokeball logo" />
      </div>
      <div className={styles.darkmodeContainer}>
        <button onClick={(event) => switchTheme()}>
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
    </div>
  );
};

export default Header;
