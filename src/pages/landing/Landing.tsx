import styles from "./Landing.module.scss";
import Header from "../../components/ui/Header/Header";

const Landing = () => {
  return (
    <div className={styles.landingContainer}>
      <Header />
    </div>
  );
};

export default Landing;
