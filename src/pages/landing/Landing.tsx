import styles from "./Landing.module.scss";

const Landing = () => {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.infoContainer}>
        <h1>PokeWorld</h1>
        <p>This is an app made by Alejo Mazzoni for practice purposes</p>
      </div>
    </div>
  );
};

export default Landing;
