import React, { useRef } from 'react';
import "./Login.css";
import AzulismoLogo from '../images/AzulismoLogo.png';
import BackIcon from '../images/Icon_voltar.svg';
import authService from '../services/authService'
import { useNavigate } from 'react-router-dom';
import HomePage from './HomePage';

const Login = () => {

  const inputEmail = useRef();
  const inputPassword = useRef();
  const navigate = useNavigate();

  const controleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.login(inputEmail.current.value, inputPassword.current.value);
      navigate('/Dashboard')
    } catch (err) {
      alert("Usuário ou senha incorretos!");
    }
  };

  const controleLoginGoogle = async (e) => {
    e.preventDefault();
    try {
      window.location.href = 'http://localhost:5000/api/auth/google';
    } catch (err) {
      console.log('Falha no login!');
    }
  };

  return (
    <div className="container-do-login">

      <a href="/">
        <img
          src={BackIcon}
          alt="Voltar"
          className="back-icon"

        /></a>

      <img
        src={AzulismoLogo}
        alt="Logo Azulismo"
        id="logo"
      />

      <div className="log-container">

        <input type="text" placeholder="LOGIN" className="input-box" ref={inputEmail} />
        <input type="password" placeholder="SENHA" className="input-box" ref={inputPassword} />

        <a href="#" className="forgot-password">Esqueceu a senha?</a>

        <button className="btn entrar" type="submit" onClick={controleLogin}>Entrar</button>
        <button className="btn google" onClick={controleLoginGoogle}>Entrar com Google</button>
        <button className="btn facebook">Entrar com Facebook</button>

        <a href="../Cadastro" className="signup-link">Não possui cadastro? Cadastre-se aqui</a>
      </div>

    </div>
  );
}

export default Login;