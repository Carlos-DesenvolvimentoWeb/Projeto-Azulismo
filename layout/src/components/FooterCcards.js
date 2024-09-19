import "./FooterCcards.css";
import color from "../images/color.png";

function FooterCcards() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={color} alt="Quebra-cabeça" className="footer-quebra-cabeça" />
      </div>
    </footer>
  );
}

export default FooterCcards;
