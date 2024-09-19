import React from "react";
import "./FilterBar.css";

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <div className="filters">
        <button className="filter-button">Cursos</button>
        <button className="filter-button1">Lógica de Programação</button>
        <button className="filter-button1">Orientação Objeto</button>
        <button className="filter-button">Algoritmos</button>
        <button className="filter-button">Front-end</button>
      </div>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Procurar Curso"
          className="search-input"
        />
        <button className="search-button">🔍</button>
        <select className="sort-select">
          <option value="recent">Mais Recente</option>
          <option value="oldest">Mais Antigo</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
