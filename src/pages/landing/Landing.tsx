import styles from "./Landing.module.scss";

const Landing = () => {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.infoContainer}>
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugiat
          ratione explicabo, fugit iusto unde. Deleniti ducimus laboriosam culpa
          autem soluta! Temporibus minima corrupti ea porro officia dignissimos
          sunt dolorum.
        </p>
      </div>
    </div>
  );
};

export default Landing;
