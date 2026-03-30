import styles from "./ex5.module.css";

export default function Ads() {
  return (
    <div className={styles.ads}>
      <div className={styles.adsContent}>
        <h2>Atendimento</h2>
        <p>
          Precisando de ajuda? Clique em um dos botões abaixo para falar com a
          equipe correspondente.
        </p>
        <nav>
          <ul>
            <li>
              <a href="">Secretaria Faculdade Infnet</a>
            </li>
            <li>
              <a href="">Secretaria FAculdade ECDD</a>
            </li>
            <li>
              <a href="">Central de Carreiras</a>
            </li>
            <li>
              <a href="">Suporte de TI</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
