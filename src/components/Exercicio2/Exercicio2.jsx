import { GiHamburgerMenu } from "react-icons/gi";
import "./ex2.css";
import List from "./List";
export default function Exercicio2() {
  return (
    <>
      <header>
        <nav className="navbar-mobile">
          <img
            src="https://lms.infnet.edu.br/moodle/pluginfile.php/1/theme_remui/logo/1766157895/logotipo.png"
            alt=""
          />
          <a href="#">
            <GiHamburgerMenu className="burguer-icon" />
          </a>
        </nav>
      </header>
      <List />
    </>
  );
}
