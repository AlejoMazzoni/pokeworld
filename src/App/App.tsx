import Footer from "../components/ui/Footer/Footer";
import Header from "../components/ui/Header/Header";
import NotFound from "../pages/404/NotFound";
import Landing from "../pages/landing/Landing";
import styles from "./App.module.scss";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.headerTopContainer}>
        <Header />
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
