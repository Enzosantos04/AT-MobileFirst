import { FiUser } from "react-icons/fi";
import "./ex10.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
export default function Exercicio10() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <nav className="navbar">
        <RxHamburgerMenu onClick={toggleMenu} className="hamburgerBtn" />
        <img
          src="https://curso.infnet.com.br/c/wp-content/uploads/sites/5/2022/12/Infnet-Logo.png"
          alt=""
        />
        <ul className={isOpen ? "dropdown" : "nav-links"}>
          <li>
            <a href="#home">Produtos</a>
          </li>
          <li>
            <a href="#about">Serviços</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
          <li>
            <a href="#contact">Secretaria</a>
          </li>
        </ul>
        <a href="#user">
          <FiUser className="user-icon" />
        </a>
      </nav>
    </header>
  );
}
