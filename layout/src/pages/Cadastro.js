import React, { useState } from 'react';
import "./Cadastro.css";
import AzulismoLogo from '../images/AzulismoLogo.png';
import authService from '../services/authService'
import { useNavigate } from 'react-router-dom';

function Cadastro() {

  const navigate = useNavigate();
  // Estados para armazenar os valores dos campos
  const [nomeResponsavel, setNomeResponsavel] = useState('');
  const [telefone, setTelefone] = useState('');
  const [emailResponsavel, setEmailResponsavel] = useState('');
  const [confirmaEmail, setConfirmaEmail] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [password, setPassword] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  // Funções de validação
  function validateEmail(email1, email2) {
    return email1 === email2;
  }

  function validatePassword(password1, password2) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{1,6}$/;
    return password1 === password2 && passwordRegex.test(password1);
  }

  function validatePhoneNumber(phone) {
    return phone.startsWith('819') && phone.length >= 10;
  }

  function validateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age <= 17;
  }

  function validateFullName(name) {
    return name.trim().split(' ').length >= 2;
  }

  // Função para lidar com o clique no botão de cadastro
  async function handleCadastrar() {
    if (!validateEmail(emailResponsavel, confirmaEmail)) {
      alert('Os e-mails não correspondem.');
      return;
    }

    if (!validatePassword(password, confirmaSenha)) {
      alert('As senhas não correspondem ou não atendem aos critérios de segurança.');
      return;
    }

    if (!validatePhoneNumber(telefone)) {
      alert('O número de telefone deve iniciar com 819 e ter pelo menos 10 dígitos.');
      return;
    }

    if (!validateAge(dataNascimento)) {
      alert('A idade da criança deve ser até 17 anos.');
      return;
    }

    if (!validateFullName(nomeResponsavel)) {
      alert('O nome do responsável deve conter o nome e sobrenome.');
      return;
    }

    if (!validateFullName(nomeUsuario)) {
      alert('O nome do usuário deve conter o nome e sobrenome.');
      return;
    }

    try {
      const novoUsuario = await authService.cadastrar(nomeResponsavel, telefone, emailResponsavel, nomeUsuario, dataNascimento, password);

      try {
        await authService.login(novoUsuario.email, password);
        navigate('/Dashboard')

      } catch (err) {
        alert("Login Falhou")
      }

    } catch (err) {
      console.log('Falha no login!');
    }

    // Salvar dados e redirecionar
    // const formData = {
    //   nomeResponsavel,
    //   telefone,
    //   emailResponsavel,
    //   nomeUsuario,
    //   dataNascimento,
    //   password
    // };

    //localStorage.setItem('formData', JSON.stringify(formData));
    //window.location.href = 'dados.html';

  }

  return (
    <div>


      <div className="principal">

        <div className="logo-container">
          <img src={AzulismoLogo} alt="LOGO AZULISMO" className="logo" />
        </div>

        <h2>Realize o cadastro e comece a aprender!</h2>

        <div className="form-container">
          <div className="box azul">
            <h3>Dados do Responsável</h3>
            <form>

              <input type="text" id="nomeResponsavel" name="nomeResponsavel" placeholder="Nome do Responsável" required value={nomeResponsavel} onChange={e => setNomeResponsavel(e.target.value)} />

              <input type="tel" id="telefone" name="telefone" placeholder="Telefone" required value={telefone} onChange={e => setTelefone(e.target.value)} />

              <input type="email" id="emailResponsavel" name="emailResponsavel" placeholder="Email do Responsável" required value={emailResponsavel} onChange={e => setEmailResponsavel(e.target.value)} />

              <input type="email" id="confirmaEmail" name="confirmaEmail" placeholder="Confirmação de Email" required value={confirmaEmail} onChange={e => setConfirmaEmail(e.target.value)} />
            </form>
          </div>

          <div className="box branco">
            <h3>Dados do Usuário (Criança)</h3>
            <form>

              <input type="text" id="nomeUsuario" name="nomeUsuario" placeholder="Nome do Usuário" required value={nomeUsuario} onChange={e => setNomeUsuario(e.target.value)} />

              <input type="date" id="dataNascimento" name="dataNascimento" required value={dataNascimento} onChange={e => setDataNascimento(e.target.value)} />


              <input type="password" id="senha" name="password" placeholder="Senha" required value={password} onChange={e => setPassword(e.target.value)} />


              <input type="password" id="confirmaSenha" name="confirmaSenha" placeholder="Confirmação de Senha" required value={confirmaSenha} onChange={e => setConfirmaSenha(e.target.value)} />

              <button type="button" onClick={handleCadastrar}>Cadastrar</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Cadastro;