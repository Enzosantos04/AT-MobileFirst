import Header from "./Header";
import GlobalMenu from "./GlobalMenu";
import ContextMenu from "./ContextMenu";
import MainContent from "./MainContent";
import Ads from "./Ads";
import Footer from "./Footer";
import styles from "./ex5.module.css";

export default function Exercicio5() {
  return (
    <div className={styles.container}>
      <Header />
      <GlobalMenu />
      <ContextMenu />
      <MainContent />
      <Ads />
      <Footer />
    </div>
  );
}
