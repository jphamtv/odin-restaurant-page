// src/index.js

import './style.css';
import HeroImage from './gentle_crunch.png'

const element = document.querySelector('#content');

function component() {
  element.innerHTML = `
    <header>
    <ul>
      <li id="current">Home</li>
      <li>Menu</li>
      <li>Contact</li>
    </ul>
    </header>
    <main>
      <img src="/src/gentle_crunch.png" />
      <div class="about">
        Gentle Crunch is not just a restaurant; it's a celebration of texture. We believe that the right
        crunch can elevate a dish from ordinary to extraordinary. Our curated menu is a testament to the gentle art of
        crafting food that feels as delightful as it tastes. Let the rhythm of gentle crunches serenade your senses and
        elevate your dining journey.
      </div>
    </main>
  `;
  return element;
}

element.appendChild(component());