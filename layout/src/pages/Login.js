import React from 'react';
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="puzzle-background">
        <div className="puzzle"></div>
        <div className="puzzle"></div>
        <div className="puzzle"></div>
        <div className="puzzle"></div>
        <div className="puzzle"></div>
        <div className="puzzle"></div>
      </div>
      <div className="login-box">
        <h1 className="logo">Azulismo</h1>
        <form>
          <input type="text" placeholder="Login" />
          <input type="password" placeholder="Senha" />
          <a href="/" className="forgot-password">
            Esqueceu a senha?
          </a>
          <button type="submit">Entrar</button>
          <button className="google-button">Entrar com Google</button>
          <button className="facebook-button">Entrar com Facebook</button>
        </form>
        <a href="/" className="sign-up">
          Não possui cadastro? Cadastre-se aqui
        </a>
      </div>
    </div>
  );
}

export default Login;