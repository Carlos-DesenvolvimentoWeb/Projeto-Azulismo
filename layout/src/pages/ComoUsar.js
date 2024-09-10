import React, { useState } from 'react';
import "./ComoUsar.css";
import Navbar from '../components/Navbar';
import TrechoPuzzle from '../images/trechopuzzle.png';
import Seta from '../images/seta.png';

const FAQItem = ({ question, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFAQ = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="faq-item-box">
                <h3 className="faq-question" onClick={toggleFAQ}>
                    {question}
                    <span className="faq-toggle">{isOpen ? '-' : '+'}</span>
                </h3>
                {isOpen && <p className="faq-answer">{children}</p>}
            </div>
        </>
    );
};

const FAQSection = () => {
    return (
        <section className="faq">
            <div className="faq-title-box">
                <h2>Questões <br/>Frequentes</h2>
                <img src={Seta} alt="Seta para baixo" className="image-arrow" />
            </div>
            <div className="faq-items-box">
                <FAQItem question="O que é o Azulismo, como funciona?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan dignissim sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan dignissim sollicitudin.
                </FAQItem>
                <FAQItem question="Qual a faixa etária focada no Azulismo?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan dignissim sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan dignissim sollicitudin.
                </FAQItem>
                <FAQItem question="Como o Azulismo pode melhorar habilidades do meu filho?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan dignissim sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan dignissim sollicitudin.
                </FAQItem>
                <FAQItem question="Nós responsáveis conseguimos gerenciar o processo dos nossos filhos no site?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan dignissim sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan dignissim sollicitudin.
                </FAQItem>
            </div>
        </section>
    );
};

const HowToUseSection = () => {
    return (
        <>
            <div className="NavComoUsar">
                <Navbar />
            </div>
            <section className="how-to-use">
                <h1>Como usar o Azulismo?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan dignissim sollicitudin. Lorem ipsum <br/>dolor sit amet, consectetur adipiscing elit. In accumsan dignissim sollicitudin.</p>
                <ol className="steps-list">
                    <li>Crie uma conta para seu filho</li>
                    <li>Faça Login</li>
                    <li>Escolha a maneira mais atrativa para aprender</li>
                    <li>Mergulhe em uma diversão com aprendizagem</li>
                    <li>Gerencie o progresso das trilhas e descubra novos conteúdos</li>
                    <li>Exercite o pensamento computacional com nossos projetos e atividades.</li>
                </ol>
                <img src={TrechoPuzzle}  alt="Descrição da imagem" className="image-left" />
            </section>
        </>
    );
};


const App = () => {
    return (
        <main>
            <HowToUseSection />
            <FAQSection />
        </main>
    );
};

export default App;

