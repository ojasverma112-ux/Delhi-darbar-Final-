const menuData = [
  { id: 1, name: "Butter Chicken", price: 16.5, desc: "Creamy tomato gravy, smoked butter finish." },
  { id: 2, name: "Paneer Tikka", price: 13.0, desc: "Charred cottage cheese, royal spice marinade." },
  { id: 3, name: "Lamb Rogan Josh", price: 18.5, desc: "Slow-cooked Kashmiri curry with depth." },
  { id: 4, name: "Dal Makhani", price: 12.0, desc: "Black lentils simmered overnight." },
  { id: 5, name: "Chicken Biryani", price: 15.5, desc: "Fragrant basmati, saffron, dum style." },
  { id: 6, name: "Garlic Naan Basket", price: 6.5, desc: "Fresh tandoor naan with garlic butter." }
];

const cart = [];
const menuGrid = document.getElementById("menuGrid");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

function renderMenu() {
  menuGrid.innerHTML = menuData.map(item => `
    <article class="menu-card">
      <div class="menu-img"></div>
      <div class="menu-body">
        <div class="row">
          <h3>${item.name}</h3>
          <span class="price">€${item.price.toFixed(2)}</span>
        </div>
        <p>${item.desc}</p>
        <button class="btn btn-primary" onclick="addToCart(${item.id})">Add to order</button>
      </div>
    </article>
  `).join("");
}

function addToCart(id) {
  const item = menuData.find(x => x.id === id);
  const found = cart.find(x => x.id === id);
  if (found) found.qty += 1;
  else cart.push({ ...item, qty: 1 });
  renderCart();
}

function removeFromCart(id) {
  const idx = cart.findIndex(x => x.id === id);
  if (idx > -1) {
    cart[idx].qty -= 1;
    if (cart[idx].qty <= 0) cart.splice(idx, 1);
  }
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = cart.length ? cart.map(item => `
    <div class="cart-item">
      <div>
        <strong>${item.name}</strong><br/>
        <small>€${item.price.toFixed(2)} × ${item.qty}</small>
      </div>
      <button class="btn btn-ghost" onclick="removeFromCart(${item.id})">-</button>
    </div>
  `).join("") : `<p style="color:#bbb">Your cart is empty.</p>`;

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = count;
}

document.getElementById("year").textContent = new Date().getFullYear();

const cartDrawer = document.getElementById("cartDrawer");
document.getElementById("openCart").addEventListener("click", () => cartDrawer.classList.add("open"));
document.getElementById("closeCart").addEventListener("click", () => cartDrawer.classList.remove("open"));

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("show"));

renderMenu();
renderCart();
