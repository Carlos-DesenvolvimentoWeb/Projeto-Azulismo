import "./SectionDepoiments.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const SectionDepoiments = () => {
  return(
    <section className="dep">
        <h2>Depoimentos de Pais dos alunos</h2>
       <Carousel responsive={responsive} infinite={true} itemClass="cards-depoiment" containerClass="carousel-container" arrows={true}>
                <div className="card-item">
                <p className="depoiment">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="card-item">
                <p className="depoiment">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="card-item">
                <p className="depoiment">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="card-item swiper-slide">
                <p class="depoiment">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
       </Carousel>
       </section>
  )
}

export default SectionDepoiments;
