import Landing from "../pages/landing/Landing";
import styles from "./App.module.scss";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.appContainer}>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
