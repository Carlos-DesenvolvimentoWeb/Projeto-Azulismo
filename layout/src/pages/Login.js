import React from 'react';
import "./Login.css";
import AzulismoLogo from '../images/AzulismoLogo.png';
import Esquerda from '../images/Esquerda.png';
import Direita from '../images/Direita.png';

const Login = () => {
  return (
    <div className="container-do-login">
      <img 
        src={Esquerda} 
        alt="Quebra-cabeças da esquerda" 
        id="esquerda" 
      />

      <img 
        src={AzulismoLogo} 
        alt="Logo Azulismo" 
        id="logo" 
      />

      <div className="log-container">

      <input type="text" placeholder="LOGIN" className="input-box" />
      <input type="password" placeholder="SENHA" className="input-box" />

      <a href="#" className="forgot-password">Esqueceu a senha?</a>

      <button className="btn entrar">Entrar</button>
      <button className="btn google">Entrar com Google</button>
      <button className="btn facebook">Entrar com Facebook</button>

      <a href="../Cadastro" className="signup-link">Não possui cadastro? Cadastre-se aqui</a>
      </div>

      <img 
        src={Direita} 
        alt="Quebra-cabeças da direita" 
        id="direita" 
      />
    </div>
  );
}

export default Login;