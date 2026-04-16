/* ==========================================================================
   DELHI DARBAAR V4 - PREMIUM APP LOGIC
   FILE 4/4: script.js

   Features:
   - i18n NL/EN
   - Data-driven rendering from menu-data.js
   - Deterministic image resolution: local -> remote -> fallback
   - Hero slider, testimonials slider, reveals
   - Menu categories + search + add-to-cart
   - Cart drawer + checkout with mock payment adapter
   - Reservation form + WhatsApp + email fallback + mock reserve API
   - Gallery lightbox, mobile nav, sticky CTA, back-to-top
   ========================================================================== */

(() => {
  "use strict";

  /* --------------------------------------------------------------------------
   * 01) BOOTSTRAP
   * -------------------------------------------------------------------------- */
  const DATA = window.DELHI_DARBAAR_DATA || {};
  const META = DATA.meta || {};
  const CHECKOUT_CONF = DATA.checkout || {};
  const RESERVATION_CONF = DATA.reservation || {};
  const LINKS = DATA.links || {};
  const NOTICES = DATA.notices || {};
  const IMAGES = DATA.images || {};
  const CATEGORIES = Array.isArray(DATA.categories) ? DATA.categories : [];
  const ITEMS = Array.isArray(DATA.items) ? DATA.items : [];
  const TESTIMONIALS = DATA.testimonials || { nl: [], en: [] };

  const CONFIG = {
    projectBase: META.projectBase || "/Delhi-darbar-Final-",
    imageVersion: META.imageVersion || String(Date.now()),
    fallbackImage:
      (IMAGES.fallback && (IMAGES.fallback.local || IMAGES.fallback.remote)) ||
      "/Delhi-darbar-Final-/fallback.jpg",
    heroIntervalMs: 5600,
    testimonialIntervalMs: 5200,
    defaultLang: META.localeDefault || "nl",
    currency: META.currency || "€",
    deliveryFee: Number(CHECKOUT_CONF.deliveryFee ?? 2.5),
    minDeliveryAmount: Number(CHECKOUT_CONF.minDeliveryAmount ?? 20),
    paymentMethods: Array.isArray(CHECKOUT_CONF.paymentMethods)
      ? CHECKOUT_CONF.paymentMethods
      : ["ideal", "card", "cash"],
    termsRequired: CHECKOUT_CONF.termsRequired !== false,
    whatsappNumber: RESERVATION_CONF.whatsappNumber || "31613533612",
    fallbackEmail: RESERVATION_CONF.fallbackEmail || "info@delhidarbaar.nl",
    mockReserveApi: RESERVATION_CONF.mockApiEnabled !== false
  };

  /* --------------------------------------------------------------------------
   * 02) DOM HELPERS
   * -------------------------------------------------------------------------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const safe = (v) => String(v ?? "").trim();

  const debounce = (fn, wait = 120) => {
    let t = null;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  };

  const fmtPrice = (v) => `${CONFIG.currency}${Number(v || 0).toFixed(2)}`;
  const asStars = (n) => "★".repeat(Math.max(0, Math.min(5, Number(n || 0))));

  /* --------------------------------------------------------------------------
   * 03) I18N
   * -------------------------------------------------------------------------- */
  const I18N = {
    nl: {
      nav_story: "Over ons",
      nav_menu: "Menu",
      nav_gallery: "Galerij",
      nav_reviews: "Reviews",
      nav_reservation: "Reserveren",
      nav_faq: "FAQ",
      nav_contact: "Contact",
      nav_book: "Boek nu",

      hero_kicker: "Authentieke Noord-Indiase Keuken",
      hero_title: "Een Smaak van Koninklijke Klasse",
      hero_sub:
        "Traditionele recepten, rijke kruiden en warme gastvrijheid in het hart van Hilversum.",
      hero_cta_reserve: "Reserveer Nu",
      hero_cta_menu: "Bekijk Menu",
      hero_badge_fresh: "Dagelijks verse bereiding",
      hero_badge_tandoor: "Authentieke tandoor smaak",

      trust_rating: "Gemiddelde waardering",
      trust_fresh: "Dagelijks vers",
      trust_authentic: "Traditionele recepturen",
      trust_local: "Lokaal geliefd",

      story_kicker: "Ons Verhaal",
      story_title: "Traditie en Smaak in Perfecte Balans",
      story_p1:
        "Delhi Darbaar combineert authentieke Indiase en Mughlai smaken met een moderne, verfijnde presentatie.",
      story_p2:
        "Met jarenlange culinaire ervaring en verse ingrediënten serveren wij gerechten vol diepte en karakter.",
      feature1_title: "Verse kruiden",
      feature1_text: "Dagelijks vers gemalen voor maximale aroma.",
      feature2_title: "Tandoor specialiteiten",
      feature2_text: "Traditioneel gegrild met rijke rooksmaak.",
      feature3_title: "Premium ingrediënten",
      feature3_text: "Kwaliteit staat centraal in elk gerecht.",
      feature4_title: "Warme service",
      feature4_text: "Gastvrijheid zoals je die mag verwachten.",

      menu_kicker: "Royal Menu",
      menu_title: "Populaire Gerechten",
      gallery_kicker: "Sfeer",
      gallery_title: "Galerij",
      review_kicker: "Ervaringen",
      review_title: "Wat onze gasten zeggen",

      online_order_kicker: "Online Food Order",
      online_order_title: "Bestel Snel en Gemakkelijk",
      online_order_text:
        "Minimum online delivery order is €20. Delivery service fee is €2.50",

      res_kicker: "Reserveren",
      res_title: "Reserveringssysteem",
      res_text:
        "Vul je gegevens in. Na verzenden openen we WhatsApp met alle reserveringsdetails.",
      res_note: "Liever per e-mail? Gebruik de e-mail knop onder het formulier.",

      f_name: "Naam",
      f_email: "E-mail",
      f_phone: "Telefoon",
      f_date: "Datum",
      f_time: "Tijd",
      f_guests: "Aantal gasten",
      f_occasion: "Gelegenheid",
      f_notes: "Opmerkingen",
      occasion_none: "Geen specifieke gelegenheid",
      occasion_birthday: "Verjaardag",
      occasion_anniversary: "Jubileum",
      occasion_business: "Zakelijk diner",
      occasion_other: "Anders",
      res_submit: "Verstuur via WhatsApp",
      res_email: "Verstuur via E-mail",

      faq_title: "Veelgestelde vragen",
      faq_q1: "Is reserveren verplicht?",
      faq_a1: "Reserveren wordt sterk aanbevolen, vooral in het weekend.",
      faq_q2: "Hebben jullie vegetarische opties?",
      faq_a2: "Ja, wij hebben een uitgebreid aanbod aan vegetarische gerechten.",
      faq_q3: "Doen jullie ook afhalen?",
      faq_a3: "Ja, afhalen is mogelijk tijdens openingstijden.",

      contact_title: "Contact",
      hours_title: "Openingstijden",
      hours_text: "Ma-Do 13:00–22:00 · Vr-Za 13:00–22:30 · Zondag gesloten",
      hours_cta: "Reserveer je tafel",
      footer_note: "Premium Indiase smaakbeleving",
      sticky_book: "Reserveer",

      search_placeholder: "Zoek gerecht...",
      menu_empty: "Geen gerechten gevonden.",

      cart_empty: "No products in the cart.",
      cart_add: "Toevoegen",
      cart_remove: "Verwijderen",
      cart_qty: "Aantal",
      checkout_title: "Checkout",
      checkout_order_mode: "Order Type",
      checkout_delivery: "Delivery",
      checkout_pickup: "Pickup",
      checkout_payment_method: "Payment Method",
      checkout_subtotal: "Subtotal",
      checkout_delivery_fee: "Delivery Fee",
      checkout_total: "Total",
      checkout_terms: "I agree to terms and privacy policy.",
      checkout_min_delivery:
        "Minimum delivery order is €20. Please add more items.",
      checkout_terms_required: "Please accept terms to continue.",
      checkout_success:
        "Order placed in demo mode. Connect WordPress/WooCommerce backend to go live.",
      checkout_error:
        "Could not place order. Please check fields and try again.",
      checkout_missing_customer: "Please fill name and phone.",

      status_ok_whatsapp:
        "Reservering voorbereid. WhatsApp wordt geopend...",
      status_ok_email: "E-mailvenster wordt geopend...",
      status_error: "Controleer de velden en probeer opnieuw.",
      status_reserve_mock:
        "Reservation simulated successfully (mock mode).",

      err_required: "Dit veld is verplicht.",
      err_email: "Vul een geldig e-mailadres in.",
      err_phone: "Vul een geldig telefoonnummer in.",
      err_date: "Kies een geldige datum.",
      err_time: "Kies een geldige tijd.",
      err_guests: "Kies aantal gasten.",

      add_to_cart: "Add"
    },
    en: {
      nav_story: "About us",
      nav_menu: "Menu",
      nav_gallery: "Gallery",
      nav_reviews: "Reviews",
      nav_reservation: "Reservation",
      nav_faq: "FAQ",
      nav_contact: "Contact",
      nav_book: "Book now",

      hero_kicker: "Authentic North Indian Cuisine",
      hero_title: "A Taste of Royal Class",
      hero_sub:
        "Traditional recipes, rich spices and warm hospitality in the heart of Hilversum.",
      hero_cta_reserve: "Reserve Now",
      hero_cta_menu: "View Menu",
      hero_badge_fresh: "Freshly prepared daily",
      hero_badge_tandoor: "Authentic tandoor flavor",

      trust_rating: "Average rating",
      trust_fresh: "Fresh daily",
      trust_authentic: "Traditional recipes",
      trust_local: "Loved in Hilversum",

      story_kicker: "Our Story",
      story_title: "Tradition and Flavor in Perfect Balance",
      story_p1:
        "Delhi Darbaar combines authentic Indian and Mughlai flavors with a refined modern presentation.",
      story_p2:
        "With years of culinary experience and fresh ingredients, we serve dishes with depth and character.",
      feature1_title: "Fresh spices",
      feature1_text: "Ground daily for maximum aroma.",
      feature2_title: "Tandoor specialties",
      feature2_text: "Traditionally grilled with rich smoky flavor.",
      feature3_title: "Premium ingredients",
      feature3_text: "Quality is central in every dish.",
      feature4_title: "Warm service",
      feature4_text: "Hospitality at its finest.",

      menu_kicker: "Royal Menu",
      menu_title: "Popular Dishes",
      gallery_kicker: "Ambience",
      gallery_title: "Gallery",
      review_kicker: "Guest Reviews",
      review_title: "What our guests say",

      online_order_kicker: "Online Food Order",
      online_order_title: "Order Fast and Easy",
      online_order_text:
        "Minimum online delivery order is €20. Delivery service fee is €2.50",

      res_kicker: "Reservation",
      res_title: "Reservation System",
      res_text:
        "Fill your details. After submit, WhatsApp opens with all reservation details.",
      res_note: "Prefer email? Use the email button below the form.",

      f_name: "Name",
      f_email: "Email",
      f_phone: "Phone",
      f_date: "Date",
      f_time: "Time",
      f_guests: "Guests",
      f_occasion: "Occasion",
      f_notes: "Notes",
      occasion_none: "No specific occasion",
      occasion_birthday: "Birthday",
      occasion_anniversary: "Anniversary",
      occasion_business: "Business dinner",
      occasion_other: "Other",
      res_submit: "Send via WhatsApp",
      res_email: "Send via E-mail",

      faq_title: "Frequently asked questions",
      faq_q1: "Is reservation required?",
      faq_a1: "Reservations are strongly recommended, especially on weekends.",
      faq_q2: "Do you have vegetarian options?",
      faq_a2: "Yes, we have an extensive vegetarian menu.",
      faq_q3: "Do you offer takeaway?",
      faq_a3: "Yes, takeaway is available during opening hours.",

      contact_title: "Contact",
      hours_title: "Opening Hours",
      hours_text: "Mon-Thu 13:00–22:00 · Fri-Sat 13:00–22:30 · Sunday closed",
      hours_cta: "Reserve your table",
      footer_note: "Premium Indian dining experience",
      sticky_book: "Reserve",

      search_placeholder: "Search dishes...",
      menu_empty: "No dishes found.",

      cart_empty: "No products in the cart.",
      cart_add: "Add",
      cart_remove: "Remove",
      cart_qty: "Qty",
      checkout_title: "Checkout",
      checkout_order_mode: "Order Type",
      checkout_delivery: "Delivery",
      checkout_pickup: "Pickup",
      checkout_payment_method: "Payment Method",
      checkout_subtotal: "Subtotal",
      checkout_delivery_fee: "Delivery Fee",
      checkout_total: "Total",
      checkout_terms: "I agree to terms and privacy policy.",
      checkout_min_delivery:
        "Minimum delivery order is €20. Please add more items.",
      checkout_terms_required: "Please accept terms to continue.",
      checkout_success:
        "Order placed in demo mode. Connect WordPress/WooCommerce backend to go live.",
      checkout_error:
        "Could not place order. Please check fields and try again.",
      checkout_missing_customer: "Please fill name and phone.",

      status_ok_whatsapp: "Reservation prepared. Opening WhatsApp...",
      status_ok_email: "Opening email client...",
      status_error: "Please check fields and try again.",
      status_reserve_mock: "Reservation simulated successfully (mock mode).",

      err_required: "This field is required.",
      err_email: "Enter a valid email.",
      err_phone: "Enter a valid phone number.",
      err_date: "Choose a valid date.",
      err_time: "Choose a valid time.",
      err_guests: "Choose number of guests.",

      add_to_cart: "Add"
    }
  };

  let currentLang = I18N[CONFIG.defaultLang] ? CONFIG.defaultLang : "nl";
  const t = (k) => (I18N[currentLang] && I18N[currentLang][k]) || k;

  /* --------------------------------------------------------------------------
   * 04) IMAGE RESOLUTION
   * local -> remote -> fallback (NO HEAD checks)
   * -------------------------------------------------------------------------- */
  const imageCache = new Map();

  const withVersion = (url) =>
    url ? `${url}${url.includes("?") ? "&" : "?"}v=${encodeURIComponent(CONFIG.imageVersion)}` : "";

  function testImage(url) {
    return new Promise((resolve) => {
      if (!url) return resolve(false);
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = withVersion(url);
    });
  }

  async function resolveImage(localUrl, remoteUrl) {
    const key = `${localUrl || ""}|${remoteUrl || ""}`;
    if (imageCache.has(key)) return imageCache.get(key);

    const fallback = IMAGES.fallback?.local || IMAGES.fallback?.remote || CONFIG.fallbackImage;

    if (localUrl && await testImage(localUrl)) {
      imageCache.set(key, localUrl);
      return localUrl;
    }
    if (remoteUrl && await testImage(remoteUrl)) {
      imageCache.set(key, remoteUrl);
      return remoteUrl;
    }
    imageCache.set(key, fallback);
    return fallback;
  }

  async function resolveImageByKey(key) {
    const bucket = IMAGES[key] || {};
    return resolveImage(bucket.local, bucket.remote);
  }

  function patchImgFallbacks() {
    $$("img").forEach((img) => {
      img.addEventListener("error", () => {
        img.onerror = null;
        img.src = IMAGES.fallback?.local || IMAGES.fallback?.remote || CONFIG.fallbackImage;
      });
    });
  }

  /* --------------------------------------------------------------------------
   * 05) GENERAL UI INIT
   * -------------------------------------------------------------------------- */
  function setYear() {
    const y = $("#year");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  function hideBootLoader() {
    const loader = $("#bootLoader");
    if (loader) loader.classList.add("hide");
  }

  function setTopContact() {
    const c = META.contact || {};
    $("#topAddress") && ($("#topAddress").textContent = `📍 ${c.address || "Havenstraat 75, 1211 KH Hilversum"}`);
    $("#topPhone") && ($("#topPhone").textContent = `📞 ${c.phone || "+31 613 53 36 12"}`);
    $("#contactBrand") && ($("#contactBrand").textContent = META.brand || "Delhi Darbaar Hilversum");
    $("#contactAddress") && ($("#contactAddress").textContent = c.address || "");
    $("#contactPhone") && ($("#contactPhone").textContent = c.phone || "");
    $("#contactEmail") && ($("#contactEmail").textContent = c.email || CONFIG.fallbackEmail);
  }

  function setNotices() {
    const openHours = NOTICES.openHours?.[currentLang] || NOTICES.openHours?.nl || "";
    const minOrder = NOTICES.minDeliveryOrder?.[currentLang] || NOTICES.minDeliveryOrder?.nl || "";
    const note = NOTICES.onlineOrderNote?.[currentLang] || NOTICES.onlineOrderNote?.nl || "";

    $("#openHoursText") && ($("#openHoursText").textContent = openHours);
    $("#minOrderText") && ($("#minOrderText").textContent = minOrder);
    $("#onlineOrderNoteText") && ($("#onlineOrderNoteText").textContent = note);
  }

  function setExternalLinks() {
    if (LINKS.googleReviews) {
      const a = $("#googleReviewsBtn");
      if (a) a.href = LINKS.googleReviews;
    }
    if (LINKS.uberEats) {
      const a1 = $("#uberEatsBtn");
      if (a1) a1.href = LINKS.uberEats;

      const stickyBtns = $$("#stickyCtaBar a");
      if (stickyBtns.length) {
        const maybeUber = stickyBtns[stickyBtns.length - 1];
        if (maybeUber) maybeUber.href = LINKS.uberEats;
      }
    }
  }

  function applyLanguage(lang) {
    currentLang = I18N[lang] ? lang : "nl";
    document.documentElement.lang = currentLang;

    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key) el.textContent = t(key);
    });

    const menuSearch = $("#menuSearchInput");
    if (menuSearch) menuSearch.placeholder = t("search_placeholder");

    setNotices();
    renderCategories();
    renderMenu();
    renderTestimonials();
    renderCart();
    updateCheckoutSummary();
  }

  function initLanguageSwitch() {
    const sw = $("#langSwitch");
    if (!sw) return;
    sw.value = currentLang;
    sw.addEventListener("change", () => applyLanguage(sw.value));
  }

  /* --------------------------------------------------------------------------
   * 06) HERO + STATIC IMAGES
   * -------------------------------------------------------------------------- */
  let heroIdx = 0;
  let heroTimer = null;

  async function setHeroImages() {
    const heroA = $("#heroA");
    const heroB = $("#heroB");
    const heroC = $("#heroC");

    const a = await resolveImageByKey("hero1");
    const b = await resolveImageByKey("hero2");
    const c = await resolveImageByKey("hero3");

    if (heroA) heroA.style.backgroundImage = `url('${a}')`;
    if (heroB) heroB.style.backgroundImage = `url('${b}')`;
    if (heroC) heroC.style.backgroundImage = `url('${c}')`;
  }

  async function setStoryAndGalleryImages() {
    const map = [
      ["#storyImg1", "gallery1"],
      ["#storyImg2", "gallery2"],
      ["#storyImg3", "gallery3"],
      ["#galleryImg1", "gallery1"],
      ["#galleryImg2", "gallery2"],
      ["#galleryImg3", "gallery3"],
      ["#galleryImg4", "gallery4"]
    ];

    for (const [sel, key] of map) {
      const el = $(sel);
      if (!el) continue;
      el.src = await resolveImageByKey(key);
    }
  }

  function goHero(index) {
    const slides = $$(".hero-slide");
    if (!slides.length) return;
    slides.forEach((s) => s.classList.remove("is-active"));
    heroIdx = (index + slides.length) % slides.length;
    slides[heroIdx].classList.add("is-active");
  }

  function startHero() {
    stopHero();
    heroTimer = setInterval(() => goHero(heroIdx + 1), CONFIG.heroIntervalMs);
  }

  function stopHero() {
    if (heroTimer) clearInterval(heroTimer);
    heroTimer = null;
  }

  function initHero() {
    const section = $(".hero-section");
    if (!section) return;
    section.addEventListener("mouseenter", stopHero);
    section.addEventListener("mouseleave", startHero);

    const downBtn = $("#heroDownBtn");
    if (downBtn) {
      downBtn.addEventListener("click", () => {
        const story = $("#story");
        if (story) story.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
    startHero();
  }

  /* --------------------------------------------------------------------------
   * 07) MENU RENDERING
   * -------------------------------------------------------------------------- */
  let activeCategory = "all";
  let searchTerm = "";

  function getCategoryLabel(catId) {
    const c = CATEGORIES.find((x) => x.id === catId);
    return (c?.label?.[currentLang] || c?.label?.nl || catId || "Category");
  }

  function filteredItems() {
    return ITEMS.filter((item) => {
      if (!item?.available) return false;

      const catOk = activeCategory === "all" || item.category === activeCategory;
      const hay = `${item?.name?.nl || ""} ${item?.name?.en || ""} ${item?.description?.nl || ""} ${item?.description?.en || ""} ${item?.category || ""}`.toLowerCase();
      const txtOk = hay.includes(searchTerm.toLowerCase());

      return catOk && txtOk;
    });
  }

  function spiceLabel(level) {
    const n = Number(level || 0);
    return n > 0 ? "🌶️".repeat(Math.min(n, 3)) : "Mild";
  }

  function renderCategories() {
    const wrap = $("#categoryChips");
    if (!wrap) return;

    const html = CATEGORIES.map((cat) => {
      const label = cat?.label?.[currentLang] || cat?.label?.nl || cat.id;
      const active = cat.id === activeCategory ? "is-active" : "";
      return `<button class="category-chip ${active}" data-cat="${cat.id}" role="tab" aria-selected="${cat.id === activeCategory}">${label}</button>`;
    }).join("");

    wrap.innerHTML = html;

    $$("[data-cat]", wrap).forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.getAttribute("data-cat") || "all";
        renderCategories();
        renderMenu();
      });
    });
  }

  async function renderMenu() {
    const grid = $("#menuGrid");
    if (!grid) return;

    const list = filteredItems();
    if (!list.length) {
      grid.innerHTML = `<article class="menu-card"><div class="menu-body"><h3>${t("menu_empty")}</h3></div></article>`;
      return;
    }

    const cards = await Promise.all(
      list.map(async (item) => {
        const img = await resolveImage(item?.image?.local, item?.image?.remote);
        const name = item?.name?.[currentLang] || item?.name?.nl || "Dish";
        const desc = item?.description?.[currentLang] || item?.description?.nl || "";
        const catLabel = getCategoryLabel(item?.category);

        return `
          <article class="menu-card reveal" data-item-id="${item.id}">
            <div class="menu-media">
              <img
                src="${img}"
                alt="${name}"
                loading="lazy"
                decoding="async"
                onerror="this.onerror=null;this.src='${CONFIG.fallbackImage}'"
              />
              <span class="menu-badge">${catLabel}</span>
            </div>
            <div class="menu-body">
              <div class="menu-row">
                <h3>${name}</h3>
                <span class="menu-price">${fmtPrice(item.price)}</span>
              </div>
              <p class="menu-desc">${desc}</p>
              <p class="menu-meta">${spiceLabel(item.spicy)}</p>
              <button class="btn btn-outline add-cart-btn" data-add-id="${item.id}" type="button">${t("add_to_cart")}</button>
            </div>
          </article>
        `;
      })
    );

    grid.innerHTML = cards.join("");
    bindAddToCartButtons();
    observeReveal();
  }

  function initMenuSearch() {
    const input = $("#menuSearchInput");
    if (!input) return;
    input.addEventListener("input", debounce((e) => {
      searchTerm = safe(e.target.value);
      renderMenu();
    }, 120));
  }

  /* --------------------------------------------------------------------------
   * 08) TESTIMONIALS
   * -------------------------------------------------------------------------- */
  let testimonialIndex = 0;
  let testimonialTimer = null;

  function renderTestimonials() {
    const track = $("#testimonialTrack");
    const dots = $("#testimonialDots");
    if (!track || !dots) return;

    const rows = TESTIMONIALS[currentLang] || TESTIMONIALS.nl || [];
    track.innerHTML = rows.map((r) => {
      const stars = asStars(r.rating || 5);
      return `
        <article class="testimonial-card">
          <div class="stars">${stars}</div>
          <p>${r.text || ""}</p>
          <small>— ${r.name || "Guest"}</small>
        </article>
      `;
    }).join("");

    dots.innerHTML = rows.map((_, i) =>
      `<button class="testimonial-dot ${i === testimonialIndex ? "is-active" : ""}" data-dot="${i}" aria-label="testimonial ${i + 1}"></button>`
    ).join("");

    $$("[data-dot]", dots).forEach((btn) => {
      btn.addEventListener("click", () => {
        testimonialIndex = Number(btn.getAttribute("data-dot") || 0);
        updateTestimonials();
      });
    });

    updateTestimonials();
  }

  function updateTestimonials() {
    const track = $("#testimonialTrack");
    if (!track) return;
    track.style.transform = `translateX(-${testimonialIndex * 100}%)`;

    $$(".testimonial-dot").forEach((d, idx) => {
      d.classList.toggle("is-active", idx === testimonialIndex);
    });
  }

  function startTestimonials() {
    stopTestimonials();
    const total = (TESTIMONIALS[currentLang] || []).length || 1;
    testimonialTimer = setInterval(() => {
      testimonialIndex = (testimonialIndex + 1) % total;
      updateTestimonials();
    }, CONFIG.testimonialIntervalMs);
  }

  function stopTestimonials() {
    if (testimonialTimer) clearInterval(testimonialTimer);
    testimonialTimer = null;
  }

  function initTestimonials() {
    const slider = $(".testimonial-slider");
    if (!slider) return;
    slider.addEventListener("mouseenter", stopTestimonials);
    slider.addEventListener("mouseleave", startTestimonials);
    startTestimonials();
  }

  /* --------------------------------------------------------------------------
   * 09) LIGHTBOX
   * -------------------------------------------------------------------------- */
  function initLightbox() {
    const box = $("#lightbox");
    const image = $("#lightboxImage");
    const close = $("#lightboxClose");
    if (!box || !image || !close) return;

    $$("#galleryGrid img").forEach((img) => {
      img.addEventListener("click", () => {
        image.src = img.src || CONFIG.fallbackImage;
        box.classList.add("is-open");
        box.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      });
    });

    const closeLightbox = () => {
      box.classList.remove("is-open");
      box.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };

    close.addEventListener("click", closeLightbox);
    box.addEventListener("click", (e) => {
      if (e.target === box) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && box.classList.contains("is-open")) closeLightbox();
    });
  }

  /* --------------------------------------------------------------------------
   * 10) MOBILE NAV + QUICK ACTIONS
   * -------------------------------------------------------------------------- */
  function initMobileNav() {
    const toggle = $("#mobileMenuToggle");
    const nav = $("#mainNav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    $$("a", nav).forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initQuickReserve() {
    const btn = $("#quickReserveBtn");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const section = $("#reservationSection");
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  /* --------------------------------------------------------------------------
   * 11) CART + CHECKOUT
   * -------------------------------------------------------------------------- */
  const cartState = {
    mode: "delivery", // delivery | pickup
    items: [] // {itemId, qty}
  };

  function findItemById(id) {
    return ITEMS.find((x) => x.id === id && x.available);
  }

  function getCartLine(itemId) {
    return cartState.items.find((x) => x.itemId === itemId);
  }

  function addToCart(itemId) {
    const item = findItemById(itemId);
    if (!item) return;
    const line = getCartLine(itemId);
    if (line) line.qty += 1;
    else cartState.items.push({ itemId, qty: 1 });
    renderCart();
    updateCheckoutSummary();
  }

  function removeFromCart(itemId) {
    cartState.items = cartState.items.filter((x) => x.itemId !== itemId);
    renderCart();
    updateCheckoutSummary();
  }

  function setQty(itemId, qty) {
    const line = getCartLine(itemId);
    if (!line) return;
    line.qty = Math.max(1, Number(qty || 1));
    renderCart();
    updateCheckoutSummary();
  }

  function cartSubtotal() {
    return cartState.items.reduce((sum, line) => {
      const item = findItemById(line.itemId);
      if (!item) return sum;
      return sum + Number(item.price || 0) * Number(line.qty || 0);
    }, 0);
  }

  function cartDeliveryFee() {
    if (cartState.mode === "pickup") return 0;
    return CONFIG.deliveryFee;
  }

  function cartTotal() {
    return cartSubtotal() + cartDeliveryFee();
  }

  function bindAddToCartButtons() {
    $$(".add-cart-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-add-id");
        if (id) addToCart(id);
      });
    });
  }

  async function renderCart() {
    const wrap = $("#cartItems");
    if (!wrap) return;

    if (!cartState.items.length) {
      wrap.innerHTML = `<p class="cart-empty">${t("cart_empty")}</p>`;
      return;
    }

    const rows = await Promise.all(cartState.items.map(async (line) => {
      const item = findItemById(line.itemId);
      if (!item) return "";
      const name = item.name?.[currentLang] || item.name?.nl || "Item";
      const img = await resolveImage(item?.image?.local, item?.image?.remote);
      const lineTotal = Number(item.price) * Number(line.qty);

      return `
        <article class="cart-line" data-line-id="${item.id}">
          <div class="cart-line-media">
            <img src="${img}" alt="${name}" loading="lazy" decoding="async"
                 onerror="this.onerror=null;this.src='${CONFIG.fallbackImage}'" />
          </div>
          <div class="cart-line-body">
            <h4>${name}</h4>
            <p>${fmtPrice(item.price)} x ${line.qty} = <strong>${fmtPrice(lineTotal)}</strong></p>
            <div class="cart-line-actions">
              <label>${t("cart_qty")}
                <input type="number" min="1" step="1" value="${line.qty}" data-qty-id="${item.id}" />
              </label>
              <button class="btn btn-ghost" type="button" data-remove-id="${item.id}">${t("cart_remove")}</button>
            </div>
          </div>
        </article>
      `;
    }));

    wrap.innerHTML = rows.join("");

    $$("[data-remove-id]", wrap).forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-remove-id");
        if (id) removeFromCart(id);
      });
    });

    $$("[data-qty-id]", wrap).forEach((inp) => {
      inp.addEventListener("change", () => {
        const id = inp.getAttribute("data-qty-id");
        if (id) setQty(id, Number(inp.value || 1));
      });
    });
  }

  function updateCheckoutSummary() {
    const subEl = $("#checkoutSubtotal");
    const feeEl = $("#checkoutDeliveryFee");
    const totalEl = $("#checkoutTotal");

    if (subEl) subEl.textContent = fmtPrice(cartSubtotal());
    if (feeEl) feeEl.textContent = fmtPrice(cartDeliveryFee());
    if (totalEl) totalEl.textContent = fmtPrice(cartTotal());
  }

  function openCart() {
    const drawer = $("#cartDrawer");
    if (!drawer) return;
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeCart() {
    const drawer = $("#cartDrawer");
    if (!drawer) return;
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function initCartDrawer() {
    const openBtn = $("#openCartBtn");
    const stickyOpen = $("#stickyOpenCartBtn");
    const closeBtn = $("#cartCloseBtn");
    const backdrop = $("#cartBackdrop");
    const modeSelect = $("#orderModeSelect");

    openBtn && openBtn.addEventListener("click", openCart);
    stickyOpen && stickyOpen.addEventListener("click", openCart);
    closeBtn && closeBtn.addEventListener("click", closeCart);
    backdrop && backdrop.addEventListener("click", closeCart);

    modeSelect && modeSelect.addEventListener("change", () => {
      cartState.mode = modeSelect.value === "pickup" ? "pickup" : "delivery";
      updateCheckoutSummary();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeCart();
    });
  }

  /* Payment Adapter (mock now, replace with Woo/Stripe/Mollie on backend) */
  const PaymentAdapter = {
    async createPaymentIntent(payload) {
      // WordPress/Woo hook point:
      // return fetch('/wp-json/checkout/create-intent', { method:'POST', body: JSON.stringify(payload) })
      await wait(400);
      return { ok: true, paymentIntentId: "mock_pi_" + Date.now(), payload };
    },
    async confirmPayment(paymentIntentId, method) {
      await wait(500);
      return { ok: true, paymentIntentId, method, status: "succeeded" };
    },
    async createOrder(payload) {
      await wait(350);
      return { ok: true, orderId: "mock_order_" + Date.now(), payload };
    }
  };

  function checkoutPayload() {
    const customer = {
      name: safe($("#checkoutName")?.value),
      phone: safe($("#checkoutPhone")?.value),
      email: safe($("#checkoutEmail")?.value),
      address: safe($("#checkoutAddress")?.value)
    };
    const paymentMethod = ($("input[name='paymentMethod']:checked")?.value) || "ideal";

    const lines = cartState.items.map((line) => {
      const item = findItemById(line.itemId);
      return {
        id: item?.id,
        name: item?.name?.[currentLang] || item?.name?.nl,
        qty: line.qty,
        price: Number(item?.price || 0)
      };
    });

    return {
      mode: cartState.mode,
      customer,
      paymentMethod,
      lines,
      totals: {
        subtotal: cartSubtotal(),
        deliveryFee: cartDeliveryFee(),
        total: cartTotal()
      },
      lang: currentLang
    };
  }

  function validateCheckout(payload) {
    if (!payload.lines.length) return { ok: false, message: t("cart_empty") };
    if (!payload.customer.name || !payload.customer.phone) {
      return { ok: false, message: t("checkout_missing_customer") };
    }
    if (payload.mode === "delivery" && payload.totals.subtotal < CONFIG.minDeliveryAmount) {
      return { ok: false, message: t("checkout_min_delivery") };
    }
    if (CONFIG.termsRequired) {
      const terms = $("#checkoutTerms");
      if (!terms?.checked) return { ok: false, message: t("checkout_terms_required") };
    }
    return { ok: true };
  }

  async function placeOrder() {
    const status = $("#checkoutStatus");
    if (!status) return;

    const payload = checkoutPayload();
    const valid = validateCheckout(payload);

    if (!valid.ok) {
      status.textContent = valid.message || t("checkout_error");
      status.classList.add("is-danger");
      status.classList.remove("is-success");
      return;
    }

    status.textContent = "Processing...";
    status.classList.remove("is-danger", "is-success");

    try {
      const intent = await PaymentAdapter.createPaymentIntent(payload);
      if (!intent.ok) throw new Error("intent_failed");

      const confirm = await PaymentAdapter.confirmPayment(intent.paymentIntentId, payload.paymentMethod);
      if (!confirm.ok || confirm.status !== "succeeded") throw new Error("confirm_failed");

      const order = await PaymentAdapter.createOrder(payload);
      if (!order.ok) throw new Error("order_failed");

      status.textContent = t("checkout_success");
      status.classList.add("is-success");
      status.classList.remove("is-danger");

      // reset cart
      cartState.items = [];
      renderCart();
      updateCheckoutSummary();
    } catch (err) {
      status.textContent = t("checkout_error");
      status.classList.add("is-danger");
      status.classList.remove("is-success");
      console.error("[CheckoutError]", err);
    }
  }

  function initCheckoutActions() {
    const placeBtn = $("#placeOrderBtn");
    placeBtn && placeBtn.addEventListener("click", placeOrder);
  }

  /* --------------------------------------------------------------------------
   * 12) RESERVATION FORM
   * -------------------------------------------------------------------------- */
  function setFieldError(fieldId, message = "") {
    const error = $(`[data-error-for="${fieldId}"]`);
    const input = $(`#${fieldId}`);

    if (error) error.textContent = message;

    if (input) {
      input.classList.remove("is-valid", "is-invalid");
      if (message) input.classList.add("is-invalid");
      else if (safe(input.value)) input.classList.add("is-valid");
    }
  }

  function validateReservation() {
    const name = safe($("#resName")?.value);
    const email = safe($("#resEmail")?.value);
    const phone = safe($("#resPhone")?.value);
    const date = safe($("#resDate")?.value);
    const time = safe($("#resTime")?.value);
    const guests = safe($("#resGuests")?.value);

    let ok = true;
    ["resName", "resEmail", "resPhone", "resDate", "resTime", "resGuests"].forEach((id) => setFieldError(id, ""));

    if (!name) { setFieldError("resName", t("err_required")); ok = false; }
    if (!email) { setFieldError("resEmail", t("err_required")); ok = false; }
    else if (!/^\S+@\S+\.\S+$/.test(email)) { setFieldError("resEmail", t("err_email")); ok = false; }

    if (!phone) { setFieldError("resPhone", t("err_required")); ok = false; }
    else if (!/^[0-9+\s\-()]{6,}$/.test(phone)) { setFieldError("resPhone", t("err_phone")); ok = false; }

    if (!date) { setFieldError("resDate", t("err_date")); ok = false; }
    if (!time) { setFieldError("resTime", t("err_time")); ok = false; }
    if (!guests) { setFieldError("resGuests", t("err_guests")); ok = false; }

    return ok;
  }

  function reservationPayload() {
    return {
      name: safe($("#resName")?.value),
      email: safe($("#resEmail")?.value),
      phone: safe($("#resPhone")?.value),
      date: safe($("#resDate")?.value),
      time: safe($("#resTime")?.value),
      guests: safe($("#resGuests")?.value),
      occasion: safe($("#resOccasion")?.value) || "-",
      notes: safe($("#resNotes")?.value) || "-"
    };
  }

  function reservationText(payload) {
    const linesNl = [
      "Nieuwe reservering - Delhi Darbaar",
      `Naam: ${payload.name}`,
      `E-mail: ${payload.email}`,
      `Telefoon: ${payload.phone}`,
      `Datum: ${payload.date}`,
      `Tijd: ${payload.time}`,
      `Gasten: ${payload.guests}`,
      `Gelegenheid: ${payload.occasion}`,
      `Opmerkingen: ${payload.notes}`
    ];
    const linesEn = [
      "New reservation - Delhi Darbaar",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      `Date: ${payload.date}`,
      `Time: ${payload.time}`,
      `Guests: ${payload.guests}`,
      `Occasion: ${payload.occasion}`,
      `Notes: ${payload.notes}`
    ];
    return encodeURIComponent((currentLang === "nl" ? linesNl : linesEn).join("\n"));
  }

  function reservationMailto(payload) {
    const subject = encodeURIComponent(currentLang === "nl" ? "Nieuwe reservering" : "New reservation");
    const lines = currentLang === "nl"
      ? [
          `Naam: ${payload.name}`,
          `E-mail: ${payload.email}`,
          `Telefoon: ${payload.phone}`,
          `Datum: ${payload.date}`,
          `Tijd: ${payload.time}`,
          `Gasten: ${payload.guests}`,
          `Gelegenheid: ${payload.occasion}`,
          `Opmerkingen: ${payload.notes}`
        ]
      : [
          `Name: ${payload.name}`,
          `Email: ${payload.email}`,
          `Phone: ${payload.phone}`,
          `Date: ${payload.date}`,
          `Time: ${payload.time}`,
          `Guests: ${payload.guests}`,
          `Occasion: ${payload.occasion}`,
          `Notes: ${payload.notes}`
        ];
    const body = encodeURIComponent(lines.join("\n"));
    return `mailto:${CONFIG.fallbackEmail}?subject=${subject}&body=${body}`;
  }

  async function reserveTable(payload) {
    // WordPress integration hook:
    // return fetch('/wp-json/reservations/create', {method:'POST', body:JSON.stringify(payload)})
    if (!CONFIG.mockReserveApi) return { ok: false };
    await wait(280);
    return { ok: true, id: "mock_res_" + Date.now(), payload };
  }

  function initReservationForm() {
    const form = $("#reservationForm");
    const status = $("#reservationStatus");
    const emailFallbackBtn = $("#emailFallbackBtn");
    if (!form || !status) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (!validateReservation()) {
        status.textContent = t("status_error");
        status.classList.add("is-danger");
        status.classList.remove("is-success");
        return;
      }

      const payload = reservationPayload();

      try {
        const res = await reserveTable(payload);
        if (res.ok) {
          status.textContent = t("status_reserve_mock");
          status.classList.add("is-success");
          status.classList.remove("is-danger");
        }
      } catch (_) {
        // non-blocking mock
      }

      const wa = `https://wa.me/${CONFIG.whatsappNumber}?text=${reservationText(payload)}`;
      status.textContent = t("status_ok_whatsapp");
      status.classList.add("is-success");
      status.classList.remove("is-danger");
      window.open(wa, "_blank", "noopener,noreferrer");
    });

    emailFallbackBtn && emailFallbackBtn.addEventListener("click", () => {
      if (!validateReservation()) {
        status.textContent = t("status_error");
        status.classList.add("is-danger");
        status.classList.remove("is-success");
        return;
      }
      const payload = reservationPayload();
      window.location.href = reservationMailto(payload);
      status.textContent = t("status_ok_email");
      status.classList.add("is-success");
      status.classList.remove("is-danger");
    });
  }

  /* --------------------------------------------------------------------------
   * 13) FAQ SINGLE OPEN
   * -------------------------------------------------------------------------- */
  function initFaq() {
    const items = $$(".faq-item");
    items.forEach((item) => {
      item.addEventListener("toggle", () => {
        if (!item.open) return;
        items.forEach((other) => {
          if (other !== item) other.open = false;
        });
      });
    });
  }

  /* --------------------------------------------------------------------------
   * 14) SCROLL UI
   * -------------------------------------------------------------------------- */
  function initScrollUI() {
    const progress = $("#scrollProgress");
    const topBtn = $("#backToTopBtn");

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
      if (progress) progress.style.width = `${pct}%`;

      if (topBtn) topBtn.classList.toggle("is-visible", doc.scrollTop > 420);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    topBtn && topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function initCursorGlow() {
    const glow = $("#cursorGlow");
    if (!glow) return;
    window.addEventListener("mousemove", (e) => {
      glow.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
    });
  }

  /* --------------------------------------------------------------------------
   * 15) REVEAL OBSERVER
   * -------------------------------------------------------------------------- */
  let revealObserver = null;
  function observeReveal() {
    if (revealObserver) revealObserver.disconnect();

    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });

    $$(".reveal").forEach((el) => revealObserver.observe(el));
  }

  /* --------------------------------------------------------------------------
   * 16) UTIL
   * -------------------------------------------------------------------------- */
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /* --------------------------------------------------------------------------
   * 17) APP INIT
   * -------------------------------------------------------------------------- */
  async function init() {
    hideBootLoader();

    setYear();
    setTopContact();
    setExternalLinks();
    setNotices();

    initLanguageSwitch();
    initMobileNav();
    initQuickReserve();

    await setHeroImages();
    await setStoryAndGalleryImages();
    patchImgFallbacks();

    renderCategories();
    await renderMenu();
    initMenuSearch();

    renderTestimonials();
    initTestimonials();

    renderCart();
    updateCheckoutSummary();
    initCartDrawer();
    initCheckoutActions();

    initReservationForm();
    initLightbox();
    initFaq();

    observeReveal();
    initScrollUI();
    initCursorGlow();

    initHero();

    // re-hide boot if needed
    window.addEventListener("load", hideBootLoader);
    setTimeout(hideBootLoader, 2500);

    // visibility pause/resume sliders
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        stopHero();
        stopTestimonials();
      } else {
        startHero();
        startTestimonials();
      }
    });

    // apply initial language at end (ensures every dynamic text is right)
    applyLanguage(currentLang);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
