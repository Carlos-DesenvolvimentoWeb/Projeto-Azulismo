import React from 'react';
import { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import FilterBar from '../components/FilterBar';
import Footer from '../components/Footer';
import api from '../services/api';

function Cadastro() {
  const [usuarios, setUsuarios] = useState([]);
  const [message, setMessage] = useState('');

  const inputNomeCrianca = useRef();
  const inputEmail = useRef();
  const inputTelefone = useRef();
  const inputPassword = useRef();
  const inputDataNascimentoCrianca = useRef();
  const inputNomeResponsavel = useRef();

  async function CreateUser() {
    try {
      const response = await api.post('/api/register', {
        nomeCrianca: inputNomeCrianca.current.value,
        email: inputEmail.current.value,
        telefone: inputTelefone.current.value,
        password: inputPassword.current.value,
        dataNascimentoCrianca: inputDataNascimentoCrianca.current.value,
        nomeResponsavel: inputNomeResponsavel.current.value,
      });
      setMessage('Usuário criado com sucesso!');
      console.log('Usuário criado:', response.data);
    } catch (error) {
      if (error.response) {
        // O servidor respondeu com um status diferente de 2xx
        setMessage(`Erro: ${error.response.data}`); // Mensagem de erro do servidor
        console.error('Erro na resposta:', error.response.data);
      } else if (error.request) {
        // A solicitação foi feita, mas nenhuma resposta foi recebida
        setMessage('Erro na solicitação. Por favor, tente novamente.');
        console.error('Erro na solicitação:', error.request);
      } else {
        // Algo aconteceu ao configurar a solicitação
        setMessage(`Erro: ${error.message}`);
        console.error('Erro:', error.message);
      }
    }
  }

  return (
    <div className='container'>
      <Navbar />
      <FilterBar />
      <h1>Tela de cadastro</h1>
      <input placeholder='*Nome completo' name='nome' type='text' ref={inputNomeCrianca} />
      <input placeholder='*Seu @e-mail' name='email' type='email' ref={inputEmail} />
      <input placeholder='(99) 99999-9999' name='telefone' type='text' ref={inputTelefone} />
      <input placeholder='*Senha' name='senha' type='password' ref={inputPassword} />
      <input placeholder='*Data de nascimento 2000-01-01' type='date' ref={inputDataNascimentoCrianca} />
      <input placeholder='*Nome do responsável' type='text' ref={inputNomeResponsavel} />
      <button type='button' onClick={CreateUser}>Cadastrar</button>
      <Footer />
    </div>
  );
}

export default Cadastro;
