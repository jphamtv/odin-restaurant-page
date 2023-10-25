// src/contact.js

const element = document.querySelector('#content');

export default function contactPage() {
  element.innerHTML = `
    <header>
      <ul>
        <li id="home">Home</li>
        <li id="menu">Menu</li>
        <li id="contact" class="current">Contact</li>
      </ul>
    </header>
    <main>
    <div>This is the contact page!</div>
    </main>
  `;

  return element;
}