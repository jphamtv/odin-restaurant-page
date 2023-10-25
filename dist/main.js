(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>o});var i=t(81),a=t.n(i),r=t(645),s=t.n(r)()(a());s.push([n.id,"/* src/style.css */\n\nbody {\n  background-color: beige;\n}\n\n#content {\n  background-color: white;\n  max-width: 1000px;\n  height: 150vh;\n  margin: 0 auto;\n}\n\nheader {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  margin-left: 2rem;\n  height: 5rem;\n}\n\n.home-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nul {\n  display: flex;\n  list-style-type: none;\n  padding: 0;\n}\n\nli {\n  font-size: 1.5rem;\n  margin-right: 2rem;\n}\n\nli:hover {\n  text-decoration: 3px underline #c1c495;\n  text-underline-offset: .5rem;\n  cursor: pointer;\n}\n\n.current {\n  text-decoration: 3px underline #c1c495;\n  text-underline-offset: .5rem;\n}\n\nimg {\n  width: 100vw;\n  min-width: 350px;\n  max-width: 900px;\n  height: auto;\n}\n\n.about,\n.hours {\n  font-size: 1.25rem;\n  line-height: 1.5;\n  max-width: 750px;\n  margin: 1.5rem 1rem;\n}\n\n.hours {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh1 {\n  font-size: 1.5rem;\n  text-align: center;\n  color: #333;\n}\n\nh2 {\n  color: #333;\n}\n\nbutton {\n  margin-top: 5rem;\n  border: none;\n  outline: 1px solid white;\n  outline-offset: -4px;\n  padding: 1rem 2rem;\n  background-color: #c1c495;\n  font-size: 1.25rem;\n  color: white;\n}\n\n.menu-container {\n  max-width: 32rem;\n  margin: 2rem auto;\n}\n\n.menu-section {\n  margin: 3rem 1rem;\n}\n\n.menu-item {\n  margin-bottom: .5rem;\n}\n\n.item-name {\n  font-weight: bold;\n}\n\n.item-description {\n  color: #555;\n}\n\n.item-price {\n  float: right;\n}\n\np {\n  margin: .5rem 0 2rem;\n}\n\n.contact-container {\n  max-width: 32rem;\n  margin: 2rem auto;\n}\n\n.section {\n  margin: 3rem 0;\n}\n\n.map {\n  width: 100%;\n  height: 400px;\n  margin-bottom: 20px;\n}",""]);const o=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(i)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(s[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);i&&s[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var r={},s=[],o=0;o<n.length;o++){var c=n[o],d=i.base?c[0]+i.base:c[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var h=a(m,i);i.byIndex=o,e.splice(o,0,{identifier:u,updater:h,references:1})}s.push(u)}return s}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=i(n=n||[],a=a||{});return function(n){n=n||[];for(var s=0;s<r.length;s++){var o=t(r[s]);e[o].references--}for(var c=i(n,a),d=0;d<r.length;d++){var l=t(r[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=c}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,a&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(i){var a=e[i];if(void 0!==a)return a.exports;var r=e[i]={id:i,exports:{}};return n[i](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),i=t(795),a=t.n(i),r=t(569),s=t.n(r),o=t(565),c=t.n(o),d=t(216),l=t.n(d),u=t(589),p=t.n(u),m=t(426),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=document.querySelector("#content");function v(){return f.innerHTML='\n    <header>\n    <ul>\n      <li id="home" class="current">Home</li>\n      <li id="menu">Menu</li>\n      <li id="contact">Contact</li>\n    </ul>\n    </header>\n    <div class="home-container">\n      <img src="/src/gentle_crunch.png" />\n      <div class="about">\n        <h1>About</h1>\n        <div>\n          Gentle Crunch is not just a restaurant; it\'s a celebration of texture. We believe that the right\n          crunch can elevate a dish from ordinary to extraordinary. Our curated menu is a testament to the gentle art of\n          crafting food that feels as delightful as it tastes. Let the rhythm of gentle crunches serenade your senses and\n          elevate your dining journey.\n        </div>\n      </div>\n      <div class="hours">\n        <h1>Hours of Operation</h1>\n        <div>\n          Monday — Saturday: 10:00 AM — 10:00 PM\n        </div>\n        <div>\n          Closed on Sundays\n        </div>\n      </div>\n      <button>Book a Reservation</button>\n    </div>\n  ',f}const g=document.querySelector("#content"),y=document.querySelector("#content"),b=document.querySelector("#content");function w(n){const e=n.target;"home"===e.id?(b.innerHTML="",b.appendChild(v())):"menu"===e.id?(b.innerHTML="",b.appendChild((g.innerHTML='\n    <header>\n      <ul>\n        <li id="home">Home</li>\n        <li id="menu" class="current">Menu</li>\n        <li id="contact">Contact</li>\n      </ul>\n    </header>\n    <div class="menu-container">\n      <h1>Gentle Crunch Menu - Fall 2023</h1>\n\n      <div class="menu-section">\n        <h2>Appetizers</h2>\n        <div class="menu-item">\n          <span class="item-name">CrunchWave Bruschetta</span>\n          <span class="item-price">$9</span>\n          <p class="item-description">Toasted baguette slices kissed with olive oil, topped with diced tomatoes, basil, garlic, and a sprinkle of feta. Served with a side of balsamic glaze.</p>\n        </div>\n        <div class="menu-item">\n          <span class="item-name">Snap Pea Hummus Plate</span>\n          <span class="item-price">$8</span>\n          <p class="item-description">Fresh snap peas with a tender crunch, served with creamy hummus and seasoned pita triangles.</p>        \n        </div>\n        <div class="menu-item">\n          <span class="item-name">Crunchroll Samosas</span>\n          <span class="item-price">$10</span>\n          <p class="item-description">Traditional potato-filled samosas with a twist – encased in a flaky, crunchy wrapper. Served with tangy tamarind chutney.</p>\n        </div>\n      </div>\n      <div class="menu-section">\n        <h2>Entrees</h2>\n        <div class="menu-item">\n          <span class="item-name">Crust-Perfected Margherita Pizza</span>\n          <span class="item-price">$14</span>\n          <p class="item-description">\n          Crust-Perfected Margherita Pizza: Traditional margherita toppings on a crust that\'s soft on the inside and perfectly crunchy on the outside.\n          </p>\n        </div>\n        <div class="menu-item">\n          <span class="item-name">Miso Maple Salmon</span>\n          <span class="item-price">$25</span>\n          <p class="item-description">\n          Miso Maple Salmon: Oven-roasted salmon with a miso-maple glaze, ensuring a tender inside with a slightly caramelized, crunchy exterior. Accompanied by steamed asparagus and quinoa.\n          </p>\n        </div>\n        <div class="menu-item">\n          <span class="item-name">Crunch-Encrusted Beef Tenderloin</span>\n          <span class="item-price">$32</span>\n          <p class="item-description">\n          Crunch-Encrusted Beef Tenderloin: A prime cut of beef tenderloin seared to perfection, coated with a panko and herb crust that adds a refined crunch with each bite. Served with garlic-roasted fingerling potatoes and a side of velvety red wine reduction.\n          </p>\n        </div>\n      </div>\n      <div class="menu-section">\n        <h2>Deserts</h2>\n        <div class="menu-item">\n          <span class="item-name">Honeycomb Delight Cheesecake</span>\n          <span class="item-price">$9</span>\n          <p class="item-description">Creamy cheesecake layered with bits of honeycomb for that surprise crunch in every bite. Drizzled with rich caramel sauce.</p>\n        </div>\n        <div class="menu-item">\n          <span class="item-name">Chocolate Mousse CrunchCake</span>\n          <span class="item-price">$10</span>\n          <p class="item-description">Silky chocolate mousse set atop a light, crispy almond base, garnished with gold leaf and raspberry coulis.</p>\n        </div>\n        <div class="menu-item">\n          <span class="item-name">Cinnamon Sugar Churro Bites</span>\n          <span class="item-price">$8</span>\n          <p class="item-description">Mini churros, lightly fried to achieve the perfect balance between softness and crunch, served with a side of warm chocolate dip.</p>\n        </div>\n      </div>\n    </div>\n  ',g))):"contact"===e.id&&(b.innerHTML="",b.appendChild((y.innerHTML='\n    <header>\n      <ul>\n        <li id="home">Home</li>\n        <li id="menu">Menu</li>\n        <li id="contact" class="current">Contact</li>\n      </ul>\n    </header>\n    <div class="contact-container">\n      <h1>Gentle Crunch Restaurant</h1>\n\n      <div class="section">\n        <h2>Address</h2>\n        <p>1234 Crunch Avenue<br>Crunchville, CR 56789</p>\n      </div>\n\n      <div class="section">\n        <h2>Phone</h2>\n        <p>(123) 456-7890</p>\n      </div>\n\n      <div class="section">\n        <h2>Email</h2>\n        <p>info@crispnestrestaurant.com</p>\n      </div>\n\n      <div class="section">\n        <h2>Hours of Operation</h2>\n        <p>\n          Monday - Saturday: 10:00 AM - 10:00 PM<br>\n          Sunday: Closed\n        </p>\n      </div>\n\n      <div class="section">\n        <h2>Map & Directions</h2>\n        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52934.157979227704!2d-118.52359771728516!3d33.982646735634006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2ba99f59e6187%3A0x5641335ebe4272bd!2sBeachside%20Restaurant%20%26%20Bar!5e0!3m2!1sen!2sus!4v1698257626007!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>\n        <p>Parking is available at the front and rear of the restaurant. Valet service is also available on Friday and Saturday evenings.</p>\n      </div>\n    </div>\n  ',y)))}document.addEventListener("DOMContentLoaded",(function(){document.addEventListener("click",w)})),b.appendChild(v())})()})();