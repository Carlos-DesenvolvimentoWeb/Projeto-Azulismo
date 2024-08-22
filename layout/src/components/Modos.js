import React from 'react';
import './Modos.css';

const Modos = () => {
  return (
    <div className="modos-de-aprender">
      <h1>Aprenda de 4 formas diferentes!</h1>
      <p>Proin lobortis dolor id lectus gravida, in vulputate erat aliquet. Curabitur <br/>venenatis molestie elit ac volutpat.</p>
      <ul id="aprender">
    <li id="video" class="quadrado">Vídeos</li>
    <li id="literatura" class="quadrado">Literatura</li>
    <li id="games" class="quadrado">Games</li>
    <li id="exercicios" class="quadrado">Exercícios</li>
</ul>
    </div>
  );
}

export default Modos;