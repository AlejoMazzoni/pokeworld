import { Link } from "react-router-dom";
import styles from "./NotFount.module.scss";
import image404 from "../../assets/images/404-image.png";

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.textContainer}>
        <img src={image404} />
        <h3>Page not found.</h3>
        <p>The page you're looking for doesn't exist.</p>
        <p>Click the button to return home</p>
      </div>
      <div className={styles.buttonContainer}>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
