// src/index.js

import './style.css';
import homePage from './home.js';
import menuPage from './menu.js';
import contactPage from './contact.js';

const element = document.querySelector('#content');

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