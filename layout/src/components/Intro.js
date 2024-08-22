import React from 'react';
import './Intro.css';

const Intro = () => (
    <div className="intro">
        <div class="text-container">
            <h1 class="title">Pensamento Computacional para crianças e adolescentes com TEA</h1>
            <p class="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan dignissim sollicitudin. Maecenas commodo ultrices eleifend. Quisque ac sollicitudin orci, vel vehicula massa. Maecenas vitae ullamcorper nisi. Fusce vulputate, massa quis bibendum feugiat, urna nisl convallis sapien, sed malesuada mi nibh non est. Vestibulum feugiat,
            </p>
            <button class="buttonIntro1">Comece a aprender</button>
        </div>
        {/* <div class="image-container">
            <img href='../assets/img/layout.jpeg' alt='Quebra Cabeça' />
        </div> */}
    </div>
);

export default Intro;