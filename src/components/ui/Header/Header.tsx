import styles from "./Header.module.scss";
import logoHeader from "../../../assets/images/logo-header.png";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src={logoHeader} alt="Pokeball logo" />
      </div>
    </div>
  );
};

export default Header;
