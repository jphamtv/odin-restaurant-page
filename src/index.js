// src/index.js

import './style.css';
import menuPage from './menu.js';
import contactPage from './contact.js';

const element = document.querySelector('#content');

function homePage() {
  element.innerHTML = `
    <header>
    <ul>
      <li id="home" class="current">Home</li>
      <li id="menu">Menu</li>
      <li id="contact">Contact</li>
    </ul>
    </header>
    <main>
      <img src="/src/gentle_crunch.png" />
      <div class="about">
        <h1>About</h1>
        <div>
          Gentle Crunch is not just a restaurant; it's a celebration of texture. We believe that the right
          crunch can elevate a dish from ordinary to extraordinary. Our curated menu is a testament to the gentle art of
          crafting food that feels as delightful as it tastes. Let the rhythm of gentle crunches serenade your senses and
          elevate your dining journey.
        </div>
      </div>
      <div class="hours">
        <h1>Hours of Operation</h1>
        <div>
          Monday to Saturday, 10 AM to 10 PM
        </div>
        <div>
          Closed on Sundays
        </div>
      </div>
      <button>Reservations</button>
    </main>
  `;
  return element;
}

function handleNavClick(event) {
  const clickedNavElement = event.target;

  if (clickedNavElement.id === 'home') {
    element.innerHTML = '';
    element.appendChild(homePage());
  } else if (clickedNavElement.id === 'menu') {
    element.innerHTML = '';
    element.appendChild(menuPage());
  } else if (clickedNavElement.id === 'contact') {
    element.innerHTML = '';
    element.appendChild(contactPage());
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', handleNavClick);
});

element.appendChild(homePage());