// src/index.js

import './style.css';
import headerNav from './nav.js';
import homePage from './home.js';
import menuPage from './menu.js';
import contactPage from './contact.js';

const element = document.querySelector('#content');
const homeIdElement = document.querySelector('#home');

function handleNavClick(event) {
  const clickedNavElement = event.target;

  // Clear current content
  element.innerHTML = '';
  element.appendChild(headerNav());

  // Reselct nav elements after appending headerNav
  const homeIdElement = document.querySelector('#home');
  const menuIdElement = document.querySelector('#menu');
  const contactIdElement = document.querySelector('#contact');

  // Clear current class from all nav items
  homeIdElement.classList.remove('current');
  menuIdElement.classList.remove('current');
  contactIdElement.classList.remove('current');

  // Append appropriate content and set the current class
  if (clickedNavElement.id === 'home') {
    element.appendChild(homePage());
    homeIdElement.classList.add('current')

  } else if (clickedNavElement.id === 'menu') {
    element.appendChild(menuPage());
    menuIdElement.classList.add('current')

  } else if (clickedNavElement.id === 'contact') {
    element.appendChild(contactPage());
    contactIdElement.classList.add('current')
  }
}

// Attach event liseners after appending content
document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', handleNavClick);
});

// Initialize home page
element.appendChild(headerNav());
element.appendChild(homePage());