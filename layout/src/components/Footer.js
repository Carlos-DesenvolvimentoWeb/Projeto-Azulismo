import React from 'react';
import './Footer.css'; // Vamos criar o arquivo CSS em seguida
import azulismo from "../assets/img/azulismo.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src= {azulismo} alt="Azulismo Logo" className="footer-logo" />
        <p className="footer-copyright">©2024 azulismo.com</p>
      </div>
    </footer>
  );
};

export default Footer;
