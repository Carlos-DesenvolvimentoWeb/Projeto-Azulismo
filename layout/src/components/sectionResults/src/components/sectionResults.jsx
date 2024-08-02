import "./sectionResults.css"

export function SectionResults() {
  return(
    <section>
      <div className="container">
       <h2>O que seu filho pode aprender usando o Azulismo?</h2>
       <ul>
        <li><span className="check">&#10003;</span> <span>Lógica de Programação</span></li>
        <li><span className="check">&#10003;</span> <span>Desenvolvimento de protótipos simples</span></li>
        <li><span className="check">&#10003;</span> <span>Resolução de Problemas</span></li>
       </ul>

      </div>
    </section>
  )
}