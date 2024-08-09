import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Azulismo</div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Cursos</a></li>
          <li><a href="/">Como usar</a></li>
          <li><a href="/">Sobre o Projeto</a></li>
          <li><a href="/">Registre-se</a></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
