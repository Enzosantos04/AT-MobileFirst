import styles from "./ex11.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <img
        src="https://lms.infnet.edu.br/moodle/pluginfile.php/1/theme_remui/logo/1766157895/logotipo.png"
        alt="Logo"
      />
    </div>
  );
}
