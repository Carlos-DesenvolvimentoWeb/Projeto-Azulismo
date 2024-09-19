import React, { useState } from "react";
import "./NavbarLogin.css";
import LogoAlternativa from "../images/LogoAlternativa.png";
import HomeIcon from "../images/Icon_home.svg";
import NotificationIcon from "../images/Icon_notification.svg";
import MoreIcon from "../images/Icon_more.svg";
import UserIcon from "../images/Icon_user.svg";

function NavbarLogin() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <nav>
        <div className="header-image">
          <img src={LogoAlternativa} alt="Azulismo" />
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
              <a href="index.html">Sobre o Projeto</a>
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
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#" onClick={() => alert("Logoff realizado!")}>
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
