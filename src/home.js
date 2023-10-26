// src/home.js

export default function homePage() {
  const homeContainer = document.createElement('div');
  homeContainer.classList.add('home-container');
  homeContainer.innerHTML = `
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
        Monday — Saturday: 10:00 AM — 10:00 PM
      </div>
      <div>
        Closed on Sundays
      </div>
    </div>
    <button>Book a Reservation</button>
  `;
  return homeContainer;
}