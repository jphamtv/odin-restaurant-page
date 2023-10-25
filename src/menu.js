// src/menu.js

const element = document.querySelector('#content');

export default function menuPage() {
  element.innerHTML = `
    <header>
      <ul>
        <li id="home">Home</li>
        <li id="menu" class="current">Menu</li>
        <li id="contact">Contact</li>
      </ul>
    </header>
    <main>
      <div>This is the menu page!</div>
    </main>
  `;

  return element;
}