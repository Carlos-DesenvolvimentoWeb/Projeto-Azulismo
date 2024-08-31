import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SectionDepoiments.css";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SectionDepoiments() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="depoiments">
      <h2>Depoimentos de Pais de alunos</h2>
      <div className="slider-container">
        <Slider className="sliders" {...settings}>
          <div>
            <article>
              <img src={img1} alt="kids" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </article>
          </div>
          <div>
            <article>
              <img src={img2} alt="kids" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </article>
          </div>
          <div>
            <article>
              <img src={img3} alt="kids" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </article>
          </div>
          <div>
            <article>
              <img src={img2} alt="kids" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </article>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default SectionDepoiments;
