import { FiUser } from "react-icons/fi";
import "./ex1.css";
export default function Exercicio1() {
  return (
    <header>
      <nav className="navbar">
        <img
          src="https://curso.infnet.com.br/c/wp-content/uploads/sites/5/2022/12/Infnet-Logo.png"
          alt=""
        />
        <ul className="nav-links-1">
          <li>
            <a href="#home">Produtos</a>
          </li>
          <li>
            <a href="#about">Serviços</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
        <a href="#user">
          <FiUser className="user-icon" />
        </a>
      </nav>
    </header>
  );
}
