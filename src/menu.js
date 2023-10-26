// src/menu.js

export default function menuPage() {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');
  menuContainer.innerHTML = `
    <h1>Gentle Crunch Menu - Fall 2023</h1>

    <div class="menu-section">
      <h2>Appetizers</h2>
      <div class="menu-item">
        <span class="item-name">CrunchWave Bruschetta</span>
        <span class="item-price">$9</span>
        <p class="item-description">Toasted baguette slices kissed with olive oil, topped with diced tomatoes, basil, garlic, and a sprinkle of feta. Served with a side of balsamic glaze.</p>
      </div>
      <div class="menu-item">
        <span class="item-name">Snap Pea Hummus Plate</span>
        <span class="item-price">$8</span>
        <p class="item-description">Fresh snap peas with a tender crunch, served with creamy hummus and seasoned pita triangles.</p>        
      </div>
      <div class="menu-item">
        <span class="item-name">Crunchroll Samosas</span>
        <span class="item-price">$10</span>
        <p class="item-description">Traditional potato-filled samosas with a twist – encased in a flaky, crunchy wrapper. Served with tangy tamarind chutney.</p>
      </div>
    </div>
    <div class="menu-section">
      <h2>Entrees</h2>
      <div class="menu-item">
        <span class="item-name">Crust-Perfected Margherita Pizza</span>
        <span class="item-price">$14</span>
        <p class="item-description">
        Crust-Perfected Margherita Pizza: Traditional margherita toppings on a crust that's soft on the inside and perfectly crunchy on the outside.
        </p>
      </div>
      <div class="menu-item">
        <span class="item-name">Miso Maple Salmon</span>
        <span class="item-price">$25</span>
        <p class="item-description">
        Miso Maple Salmon: Oven-roasted salmon with a miso-maple glaze, ensuring a tender inside with a slightly caramelized, crunchy exterior. Accompanied by steamed asparagus and quinoa.
        </p>
      </div>
      <div class="menu-item">
        <span class="item-name">Crunch-Encrusted Beef Tenderloin</span>
        <span class="item-price">$32</span>
        <p class="item-description">
        Crunch-Encrusted Beef Tenderloin: A prime cut of beef tenderloin seared to perfection, coated with a panko and herb crust that adds a refined crunch with each bite. Served with garlic-roasted fingerling potatoes and a side of velvety red wine reduction.
        </p>
      </div>
    </div>
    <div class="menu-section">
      <h2>Deserts</h2>
      <div class="menu-item">
        <span class="item-name">Honeycomb Delight Cheesecake</span>
        <span class="item-price">$9</span>
        <p class="item-description">Creamy cheesecake layered with bits of honeycomb for that surprise crunch in every bite. Drizzled with rich caramel sauce.</p>
      </div>
      <div class="menu-item">
        <span class="item-name">Chocolate Mousse CrunchCake</span>
        <span class="item-price">$10</span>
        <p class="item-description">Silky chocolate mousse set atop a light, crispy almond base, garnished with gold leaf and raspberry coulis.</p>
      </div>
      <div class="menu-item">
        <span class="item-name">Cinnamon Sugar Churro Bites</span>
        <span class="item-price">$8</span>
        <p class="item-description">Mini churros, lightly fried to achieve the perfect balance between softness and crunch, served with a side of warm chocolate dip.</p>
      </div>
    </div>
  `;

  return menuContainer;
}