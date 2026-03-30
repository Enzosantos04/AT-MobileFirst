import styles from "./ex5.module.css";

export default function ContextMenu() {
  return (
    <div className={styles.contextMenu}>
      <div className={styles.contextMenuContent}>
        <h2>Acesse seus conteúdos</h2>
        <nav>
          <ul>
            <li>
              <a href="">Teste Performance 1</a>
            </li>
            <li>
              <a href="">Teste Performance 2</a>
            </li>
            <li>
              <a href="">Teste Performance 3</a>
            </li>
            <li>
              <a href="">Assessment</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
