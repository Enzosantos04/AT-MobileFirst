import styles from "./ex11.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export default function GlobalMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.globalMenu}>
      <div className={styles.globalMenuContent}>
        <button className={styles.hamburgerBtn} onClick={toggleMenu}>
          <RxHamburgerMenu />
        </button>

        <nav className={isOpen ? styles.dropdownMenu : ""}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#secretaria">Secretaria</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
