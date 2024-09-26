import React, { useState, useEffect } from "react";
import "./NavbarLogin.css";
import LogoAlternativa from "../images/LogoAlternativa.png";
import HomeIcon from "../images/Icon_home.svg";
import NotificationIcon from "../images/Icon_notification.svg";
import MoreIcon from "../images/Icon_more.svg";
import UserIcon from "../images/Icon_user.svg";
import authService from '../services/authService';
import { Link } from 'react-router-dom';


function NavbarLogin() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const usuarioLogado = localStorage.getItem('user');
    if (usuarioLogado) {
      try {
        const usuario = JSON.parse(usuarioLogado);
        if (usuario && usuario.nomeCrianca) {
          setUserName(usuario.nomeCrianca);
        }
      } catch (e) {
        console.error('Erro ao ler o usuário do localStorage:', e);
      }
    }
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const controleLogout = () => {
    authService.logout();
    // Aqui há o redirecionamento para o login ou frontpage
    window.location.href = '/login';
  };



  return (
    <>
      <nav>
        <div className="header-image">
        <Link to="/"><img src={LogoAlternativa} alt="Azulismo" /></Link>
        </div>

        <div>
          <ul id="navbar">
            <li>
              <a href="#">Cursos</a>
            </li>
            <li>
              <a href="../ComoUsar">Como usar</a>
            </li>
            <li>
              <a href="#">Sobre o Projeto</a>
            </li>
          </ul>
        </div>

        <div className="icons-right">
          <a href="/dashboard">
            <img src={HomeIcon} alt="Home" className="nav-icon" />
          </a>
          <img src={NotificationIcon} alt="Notificações" className="nav-icon" />

          <div className="divider"></div>

          <img src={MoreIcon} alt="Mais" className="nav-icon" />

          <div className="dropdown">
            <img
              src={UserIcon}
              alt="Usuário"
              className="nav-icon"
              onClick={toggleDropdown}
            />
            <div className="nome-crianca">{userName}</div>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#" onClick={() => {
                    alert("Logoff realizado!")
                    controleLogout();
                  }}>
                    Logoff
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarLogin;
