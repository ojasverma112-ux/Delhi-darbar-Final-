  /* =========================
   DATA
========================= */
const dishes = [
  { id:1, name:"Butter Chicken Royale", price:16.5, cat:"Mains", veg:false, spice:2, img:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=80", desc:"Creamy tomato gravy, smoked butter finish." },
  { id:2, name:"Paneer Tikka Crown", price:13.0, cat:"Starters", veg:true, spice:2, img:"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1000&q=80", desc:"Charred cottage cheese, royal spice marinade." },
  { id:3, name:"Lamb Rogan Josh", price:18.5, cat:"Mains", veg:false, spice:3, img:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80", desc:"Slow-cooked Kashmiri curry, deep and aromatic." },
  { id:4, name:"Dal Makhani 24h", price:12.0, cat:"Mains", veg:true, spice:1, img:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80", desc:"Black lentils simmered overnight with cream." },
  { id:5, name:"Hyderabadi Biryani", price:15.5, cat:"Rice", veg:false, spice:3, img:"https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?auto=format&fit=crop&w=1000&q=80", desc:"Saffron basmati dum biryani with layered flavors." },
  { id:6, name:"Garlic Naan Basket", price:6.5, cat:"Breads", veg:true, spice:0, img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80", desc:"Fresh tandoor naan with garlic-herb butter." },
  { id:7, name:"Malai Chicken Tikka", price:14.0, cat:"Starters", veg:false, spice:1, img:"https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1000&q=80", desc:"Creamy marinated chicken, charcoal kissed." },
  { id:8, name:"Palak Paneer", price:13.5, cat:"Mains", veg:true, spice:1, img:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1000&q=80", desc:"Velvety spinach curry and soft paneer cubes." },
  { id:9, name:"Gulab Jamun", price:7.0, cat:"Desserts", veg:true, spice:0, img:"https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?auto=format&fit=crop&w=1000&q=80", desc:"Warm saffron-cardamom syrup dessert." }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1600891963935-c1a42c5e7f31?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1617196034183-421b4917c92d?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1532634786-8f5043ed0f6f?auto=format&fit=crop&w=1400&q=80"
];

const reviews = [
  { quote:"Best butter chicken in town. Rich, balanced, unforgettable.", author:"Aarav M." },
  { quote:"Elegant ambience and genuinely warm service. Loved it.", author:"Sofia K." },
  { quote:"Biryani and kebabs were exceptional. Premium experience.", author:"Luca D." }
];

/* =========================
   HELPERS
========================= */
const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const money = (n) => `€${n.toFixed(2)}`;

/* =========================
   LOADER
========================= */
window.addEventListener("load", () => {
  setTimeout(() => $("#loader").classList.add("hide"), 500);
});

/* =========================
   NAV / MOBILE MENU
========================= */
$("#menuToggle").addEventListener("click", () => $("#navLinks").classList.toggle("show"));
$$(".nav-links a").forEach(a => a.addEventListener("click", () => $("#navLinks").classList.remove("show")));

/* =========================
   HERO SLIDER
========================= */
const heroSlides = $$(".hero-slide");
let heroIndex = 0;
setInterval(() => {
  heroSlides[heroIndex].classList.remove("active");
  heroIndex = (heroIndex + 1) % heroSlides.length;
  heroSlides[heroIndex].classList.add("active");
}, 5000);

/* =========================
   MENU + FILTER + SEARCH
========================= */
const menuGrid = $("#menuGrid");
const chipsWrap = $("#categoryChips");
const searchInput = $("#searchInput");
const resetFilters = $("#resetFilters");

let activeCategory = "All";
let searchTerm = "";

const categories = ["All", ...new Set(dishes.map(d => d.cat))];

function renderChips() {
  chipsWrap.innerHTML = categories.map(c => `<button class="chip ${c === activeCategory ? "active" : ""}" data-cat="${c}">${c}</button>`).join("");
  $$(".chip").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.cat;
      renderChips();
      renderMenu();
    });
  });
}

function spiceLabel(level) {
  if (level === 0) return "Mild";
  return "🌶️".repeat(level);
}

function filteredMenu() {
  return dishes.filter(d => {
    const categoryOK = activeCategory === "All" || d.cat === activeCategory;
    const text = `${d.name} ${d.desc} ${d.cat}`.toLowerCase();
    const searchOK = text.includes(searchTerm.toLowerCase());
    return categoryOK && searchOK;
  });
}

function renderMenu() {
  const items = filteredMenu();
  if (!items.length) {
    menuGrid.innerHTML = `<article class="panel">No dishes found for this filter/search.</article>`;
    return;
  }

  menuGrid.innerHTML = items.map(item => `
    <article class="menu-card">
      <div class="menu-image" style="background-image:url('${item.img}')">
        <span class="menu-badge">${item.cat}</span>
      </div>
      <div class="menu-body">
        <div class="menu-row">
          <h3>${item.name}</h3>
          <span class="price">${money(item.price)}</span>
        </div>
        <p class="menu-desc">${item.desc}</p>
        <p class="menu-meta">${item.veg ? "🟢 Veg" : "🔴 Non-Veg"} · ${spiceLabel(item.spice)}</p>
        <button class="btn btn-primary add-btn" data-id="${item.id}">Add to order</button>
      </div>
    </article>
  `).join("");

  $$(".add-btn").forEach(btn => {
    btn.addEventListener("click", () => addToCart(Number(btn.dataset.id)));
  });
}

searchInput.addEventListener("input", (e) => {
  searchTerm = e.target.value.trim();
  renderMenu();
});

resetFilters.addEventListener("click", () => {
  activeCategory = "All";
  searchTerm = "";
  searchInput.value = "";
  renderChips();
  renderMenu();
});

/* =========================
   GALLERY + LIGHTBOX
========================= */
const galleryGrid = $("#galleryGrid");
const lightbox = $("#lightbox");
const lightboxImg = $("#lightboxImg");

function renderGallery() {
  galleryGrid.innerHTML = galleryImages.map(src => `
    <figure class="gallery-item">
      <img src="${src}" alt="gallery image">
    </figure>
  `).join("");

  $$(".gallery-item img").forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("open");
    });
  });
}

$("#closeLightbox").addEventListener("click", () => lightbox.classList.remove("open"));
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.classList.remove("open");
});

/* =========================
   REVIEWS SLIDER
========================= */
const reviewTrack = $("#reviewTrack");
const reviewDots = $("#reviewDots");
let reviewIndex = 0;

function renderReviews() {
  reviewTrack.innerHTML = reviews.map(r => `
    <article class="review-card">
      <div class="review-stars">★★★★★</div>
      <p>“${r.quote}”</p>
      <small>— ${r.author}</small>
    </article>
  `).join("");

  reviewDots.innerHTML = reviews.map((_, idx) => `<button class="dot ${idx === 0 ? "active" : ""}" data-dot="${idx}"></button>`).join("");

  $$(".dot").forEach(dot => {
    dot.addEventListener("click", () => {
      reviewIndex = Number(dot.dataset.dot);
      updateReviews();
    });
  });
}

function updateReviews() {
  reviewTrack.style.transform = `translateX(-${reviewIndex * 100}%)`;
  $$(".dot").forEach((d, i) => d.classList.toggle("active", i === reviewIndex));
}

setInterval(() => {
  reviewIndex = (reviewIndex + 1) % reviews.length;
  updateReviews();
}, 4500);

/* =========================
   CART
========================= */
const cartDrawer = $("#cartDrawer");
const cartItemsWrap = $("#cartItems");
const cartCount = $("#cartCount");
const cartSubtotal = $("#cartSubtotal");

let cart = []; // {id, qty}

$("#openCart").addEventListener("click", () => cartDrawer.classList.add("open"));
$("#closeCart").addEventListener("click", () => cartDrawer.classList.remove("open"));

function addToCart(id) {
  const found = cart.find(i => i.id === id);
  if (found) found.qty += 1;
  else cart.push({ id, qty: 1 });
  renderCart();
  cartDrawer.classList.add("open");
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  renderCart();
}

function cartExpanded() {
  return cart.map(c => {
    const item = dishes.find(d => d.id === c.id);
    return { ...item, qty: c.qty };
  });
}

function renderCart() {
  const items = cartExpanded();
  const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
  cartCount.textContent = totalItems;

  if (!items.length) {
    cartItemsWrap.innerHTML = `<article class="panel">Your cart is empty.</article>`;
    cartSubtotal.textContent = "€0.00";
    return;
  }

  cartItemsWrap.innerHTML = items.map(i => `
    <article class="cart-item">
      <div class="cart-item-top">
        <div>
          <strong>${i.name}</strong><br>
          <small>${money(i.price)} x ${i.qty}</small>
        </div>
        <strong>${money(i.price * i.qty)}</strong>
      </div>
      <div class="qty-controls">
        <button data-id="${i.id}" data-d="-1">−</button>
        <span>${i.qty}</span>
        <button data-id="${i.id}" data-d="1">+</button>
      </div>
    </article>
  `).join("");

  $$("[data-d]").forEach(btn => {
    btn.addEventListener("click", () => {
      changeQty(Number(btn.dataset.id), Number(btn.dataset.d));
    });
  });

  const subtotal = items.reduce((sum, i) => sum + (i.price * i.qty), 0);
  cartSubtotal.textContent = money(subtotal);
}

$("#checkoutBtn").addEventListener("click", () => {
  if (!cart.length) {
    alert("Cart is empty.");
    return;
  }
  alert("Checkout integration pending. Connect Stripe/PayPal here.");
});

/* =========================
   RESERVE DIALOG + FORM
========================= */
const reserveDialog = $("#reserveDialog");

$("#openReserve").addEventListener("click", () => reserveDialog.showModal());
$("#heroBookBtn").addEventListener("click", () => reserveDialog.showModal());
$("#closeReserveDialog").addEventListener("click", () => reserveDialog.close());

$("#reserveForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Reservation request sent successfully.");
  e.target.reset();
});

/* =========================
   REVEAL ON SCROLL
========================= */
const revealEls = $$(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealEls.forEach(el => io.observe(el));

/* =========================
   INIT
========================= */
renderChips();
renderMenu();
renderGallery();
renderReviews();
renderCart();
$("#year").textContent = new Date().getFullYear();
