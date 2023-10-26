// src/contact.js


export default function contactPage() {
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');
  contactContainer.innerHTML = `
    <div class="contact-container">
      <h1>Gentle Crunch Restaurant</h1>

      <div class="section">
        <h2>Address</h2>
        <p>1234 Crunch Avenue<br>Crunchville, CR 56789</p>
      </div>

      <div class="section">
        <h2>Phone</h2>
        <p>(123) 456-7890</p>
      </div>

      <div class="section">
        <h2>Email</h2>
        <p>info@crispnestrestaurant.com</p>
      </div>

      <div class="section">
        <h2>Hours of Operation</h2>
        <p>
          Monday - Saturday: 10:00 AM - 10:00 PM<br>
          Sunday: Closed
        </p>
      </div>

      <div class="section">
        <h2>Map & Directions</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52934.157979227704!2d-118.52359771728516!3d33.982646735634006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2ba99f59e6187%3A0x5641335ebe4272bd!2sBeachside%20Restaurant%20%26%20Bar!5e0!3m2!1sen!2sus!4v1698257626007!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <p>Parking is available at the front and rear of the restaurant. Valet service is also available on Friday and Saturday evenings.</p>
      </div>
    </div>
  `;

  return contactContainer;
}