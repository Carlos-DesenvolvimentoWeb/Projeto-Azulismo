import "./Ccards.css";
import ParteInferior from "../images/ParteInferior.png"

function Ccards() {
  return (
    <section class="front">
      {/* <div>
        <h3>Front-End</h3> <h2>VER MAIS</h2>
      </div> */}
      <div className="texto">
        <h3>Front-End</h3>
        <div className="frase">
          <h5>Ver mais &gt;</h5>
        </div>
      </div>

      <div class="ccards">
        <div class="ccard">
          <h4>Lorem ipsum</h4>
          <div class="content">
            <p>
              Praesent sollicitudin, libero venenatis condimentum maximus, orci
              ipsum tincidunt orci, vitae aliquet tellus sapien in justo. Duis
              vel enim elit. Morbi quis tempus ipsum, nec porttitor libero.
            </p>
          </div>
        </div>
        <div class="ccard">
          <h4>Lorem ipsum</h4>
          <div class="content">
            <p>
              Praesent sollicitudin, libero venenatis condimentum maximus, orci
              ipsum tincidunt orci, vitae aliquet tellus sapien in justo. Duis
              vel enim elit. Morbi quis tempus ipsum, nec porttitor libero.
            </p>
          </div>
        </div>
        <div class="ccard">
          <h4>Lorem ipsum</h4>
          <div class="content">
            <p>
              Praesent sollicitudin, libero venenatis condimentum maximus, orci
              ipsum tincidunt orci, vitae aliquet tellus sapien in justo. Duis
              vel enim elit. Morbi quis tempus ipsum, nec porttitor libero.
            </p>
          </div>
        </div>
        <div class="ccard">
          <h4>Lorem ipsum</h4>
          <div class="content">
            <p>
              Praesent sollicitudin, libero venenatis condimentum maximus, orci
              ipsum tincidunt orci, vitae aliquet tellus sapien in justo. Duis
              vel enim elit. Morbi quis tempus ipsum, nec porttitor libero.
            </p>
          </div>
        </div>
      </div>

      <div className="texto">
        <h3>Orientação Objeto</h3>
        <div className="frase">
          <h5>Ver mais &gt;</h5>
        </div>
      </div>
      <div class="ccards">
        <div class="ccard">
          <h4>Lorem ipsum</h4>
          <div class="content">
            <p>
              Praesent sollicitudin, libero venenatis condimentum maximus, orci
              ipsum tincidunt orci, vitae aliquet tellus sapien in justo. Duis
              vel enim elit. Morbi quis tempus ipsum, nec porttitor libero.
            </p>
          </div>
        </div>
        <div class="ccard">
          <h4>Lorem ipsum</h4>
          <div class="content">
            <p>
              Praesent sollicitudin, libero venenatis condimentum maximus, orci
              ipsum tincidunt orci, vitae aliquet tellus sapien in justo. Duis
              vel enim elit. Morbi quis tempus ipsum, nec porttitor libero.
            </p>
          </div>
        </div>
        <div class="ccard">
          <h4>Lorem ipsum</h4>
          <div class="content">
            <p>
              Praesent sollicitudin, libero venenatis condimentum maximus, orci
              ipsum tincidunt orci, vitae aliquet tellus sapien in justo. Duis
              vel enim elit. Morbi quis tempus ipsum, nec porttitor libero.
            </p>
          </div>
        </div>
        <div class="ccard">
          <h4>Lorem ipsum</h4>
          <div class="content">
            <p>
              Praesent sollicitudin, libero venenatis condimentum maximus, orci
              ipsum tincidunt orci, vitae aliquet tellus sapien in justo. Duis
              vel enim elit. Morbi quis tempus ipsum, nec porttitor libero.
            </p>
          </div>
        </div>
      </div>
      <img src={ParteInferior}  alt="Quebra-cabeça" className="parte-inferior" />
    </section>
  );
}
export default Ccards;
