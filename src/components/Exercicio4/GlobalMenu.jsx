import styles from "./ex4.module.css";

export default function GlobalMenu() {
  return (
    <div className={styles.globalMenu}>
      <div className={styles.globalMenuContent}>
        <nav>
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
          </ul>
        </nav>
      </div>
    </div>
  );
}
