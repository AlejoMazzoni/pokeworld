import { ReactNode } from "react";
import styles from "./Button.module.scss";

interface IButton {
  children: ReactNode;
}

const Button = ({ children }: IButton) => {
  return (
    <div className={styles.buttonContainer}>
      <button>{children}</button>
    </div>
  );
};

export default Button;
