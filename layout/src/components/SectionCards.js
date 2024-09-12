import "./SectionCards.css";
import imgcards1 from "../images/imgcards1.png";
import imgcards2 from "../images/imgcards2.png";
import imgcards3 from "../images/imgcards3.png";
import MaisAmarelo from "../images/MaisAmarelo.png";
import MaisLaranja from "../images/MaisLaranja.png";
import MaisVermelho from "../images/MaisVermelho.png";

const SectionCards = () => {
  return (
    <section class="why">
      <img src={MaisAmarelo} alt="Mais Amarelo" class="Mais-Amarelo"/>
      <img src={MaisLaranja} alt="Mais Laranja" class="Mais-Laranja"/>
      <img src={MaisVermelho} alt="Mais Vermelho" class="Mais-Vermelho"/>
      <h1>Por que Azulismo?</h1>
      <div class="cards">
        <div class="card">
          <img src={imgcards1} alt="crianças" />
          <h2>Experiência focada em <br /> crianças com TEA</h2>
          <div class="content">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div class="card">
          <img src={imgcards2} alt="crianças" />
          <h2>
            Desenvolvimento <br /> Criativo
          </h2>
          <div class="content">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div class="card">
          <img src={imgcards3} alt="crianças" />
          <h2 class="gratuito">Gratuito</h2>
          <div class="content">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="bg"></div>
    </section>
  );
};

export default SectionCards;