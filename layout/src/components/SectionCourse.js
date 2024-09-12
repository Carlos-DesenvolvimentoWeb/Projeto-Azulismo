import "./SectionCourse.css";
import call from "../images/call.png";
import book from "../images/book.svg";
import icon from "../images/icon.svg";
import book3 from "../images/book3.svg";

function SectionCourse() {
  return (
    <section>
      <div className="focos">
        <h2>Quais os focos dos cursos?</h2>

        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan
          dignissim sollicitudin.
        </span>

        <button type="button">Comece agora!</button>
      </div>
      <div className="kids">
        <img className="img-kids" src={call} alt="exemplo1" />
      </div>

      <div className="icones">
        <button>
          <img src={book} alt="exemplo2" />

          <p>Audio Book</p>
        </button>

        <button>
          <div className="icones-div">
            <img src={icon} alt="exemplo3" />
          </div>

          <p>Ao vivo</p>
        </button>

        <button>
          <img src={book3} alt="exemplo3" />

          <p>Aulas Gravadas</p>
        </button>
      </div>
    </section>
  );
}

export default SectionCourse;