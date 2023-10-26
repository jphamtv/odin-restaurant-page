// src/nav.js

export default function headerNav() {
  const header = document.createElement('header');
  header.innerHTML = `
    <ul>
      <li id="home" class="current">Home</li>
      <li id="menu">Menu</li>
      <li id="contact">Contact</li>
    </ul>
  `;
  return header;
}