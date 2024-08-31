import "./SectionCards.css";
import imgcards1 from "../assets/img/imgcards1.png";
import imgcards2 from "../assets/img/imgcards2.png";
import imgcards3 from "../assets/img/imgcards3.png";

const SectionCards = () => {
  return (
    <section class="why">
      <h1>Por que Azulismo?</h1>
      <div class="cards">
        <div class="card">
          <img src={imgcards1} alt="crianças" />
          <h2>Experiência focada em crianças com TEA</h2>
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
          <h2>Gratuito</h2>
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
