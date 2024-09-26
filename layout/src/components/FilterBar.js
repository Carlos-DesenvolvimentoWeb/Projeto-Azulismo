import React from 'react';
import './FilterBar.css';
import Lupa from "../images/lupa.svg";

const FilterBar = () => {
  return (
    <div className="filtro-bar">
      <div className="filters">
        <button className="filtro-button">Cursos</button>
        <button className="filtro-button" id="tamanho-logica">Lógica de Programação</button>
        <button className="filtro-button" id="tamanho-orientacao">Orientação Objeto</button>
        <button className="filtro-button">Algoritmos</button>
        <button className="filtro-button">Front-end</button>
      </div>
      <div className="search-filtro">
        <div className="search-container">
          <input type="text" placeholder="Procurar Curso" className="search-input" />
          <button className="search-button" aria-label="Buscar">
            <img src={Lupa} alt="Buscar" width="24" height="24" />
          </button>
        </div>
        <div className="filter-container">
          <div className="filter-text">Filtrar por:</div>
          <select className="sort-select">
            <option value="recent">Mais Recente</option>
            <option value="oldest">Mais Antigo</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;

