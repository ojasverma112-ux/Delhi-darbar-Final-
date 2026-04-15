/* ==========================================================================
   DELHI DARBAAR V3 - PREMIUM SCRIPT (PART 3/3)
   Critical fixes included:
   - Robust image resolver using Image() (NOT fetch HEAD)
   - GitHub Pages safe pathing
   - Real Google Reviews + Uber Eats links integrated in HTML
   ========================================================================== */

(() => {
  "use strict";

  /* ==========================================================================
     01) CONFIG
     ========================================================================== */
  const CONFIG = {
    projectBase: "/Delhi-darbar-Final-",
    fallbackImage: "/Delhi-darbar-Final-/fallback.jpg",
    whatsappNumber: "31613533612",
    emailTarget: "info@delhidarbaar.nl",
    heroInterval: 5200,
    testimonialInterval: 5000
  };

  /* ==========================================================================
     02) HELPERS
     ========================================================================== */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const safe = (v) => String(v ?? "").trim();

  const debounce = (fn, wait = 150) => {
    let t = null;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  };

  function setYear() {
    const y = $("#year");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  function hideBootLoader() {
    const boot = $("#bootLoader");
    if (boot) boot.classList.add("hide");
  }

  /* ==========================================================================
     03) IMAGE RESOLUTION (FIXED)
     Using Image() check, not fetch HEAD
     ========================================================================== */
  const imageCandidates = {
    hero1: [`${CONFIG.projectBase}/hero-1.jpg`, `${CONFIG.projectBase}/hero-1.jpeg`, `${CONFIG.projectBase}/hero-1.png`],
    hero2: [`${CONFIG.projectBase}/hero-2.jpg`, `${CONFIG.projectBase}/hero-2.jpeg`, `${CONFIG.projectBase}/hero-2.png`],
    hero3: [`${CONFIG.projectBase}/hero-3.jpg`, `${CONFIG.projectBase}/hero-3.jpeg`, `${CONFIG.projectBase}/hero-3.png`],

    gallery1: [`${CONFIG.projectBase}/gallery-1.jpg`, `${CONFIG.projectBase}/gallery-1.jpeg`, `${CONFIG.projectBase}/gallery-1.png`],
    gallery2: [`${CONFIG.projectBase}/gallery-2.jpg`, `${CONFIG.projectBase}/gallery-2.jpeg`, `${CONFIG.projectBase}/gallery-2.png`],
    gallery3: [`${CONFIG.projectBase}/gallery-3.jpg`, `${CONFIG.projectBase}/gallery-3.jpeg`, `${CONFIG.projectBase}/gallery-3.png`],
    gallery4: [`${CONFIG.projectBase}/gallery-4.jpg`, `${CONFIG.projectBase}/gallery-4.jpeg`, `${CONFIG.projectBase}/gallery-4.png`],

    dish1: [`${CONFIG.projectBase}/dish-1.jpg`, `${CONFIG.projectBase}/dish-1.jpeg`, `${CONFIG.projectBase}/dish-1.png`],
    dish2: [`${CONFIG.projectBase}/dish-2.jpg`, `${CONFIG.projectBase}/dish-2.jpeg`, `${CONFIG.projectBase}/dish-2.png`],
    dish3: [`${CONFIG.projectBase}/dish-3.jpg`, `${CONFIG.projectBase}/dish-3.jpeg`, `${CONFIG.projectBase}/dish-3.png`],
    dish4: [`${CONFIG.projectBase}/dish-4.jpg`, `${CONFIG.projectBase}/dish-4.jpeg`, `${CONFIG.projectBase}/dish-4.png`]
  };

  async function imageExists(url) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = `${url}?v=${Date.now()}`; // cache-bust
    });
  }

  async function firstExisting(urls) {
    for (const url of urls) {
      const ok = await imageExists(url);
      if (ok) return url;
    }
    return CONFIG.fallbackImage;
  }

  function patchImageFallbacks() {
    $$("img").forEach((img) => {
      img.addEventListener("error", () => {
        img.onerror = null;
        img.src = CONFIG.fallbackImage;
      });
    });
  }

  /* ==========================================================================
     04) I18N
     ========================================================================== */
  const I18N = {
    nl: {
      top_message: "Chef’s Royal Tasting Menu beschikbaar vanavond",
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
      hero_sub: "Traditionele recepten, rijke kruiden en warme gastvrijheid in het hart van Hilversum.",
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
      story_p1: "Delhi Darbaar combineert authentieke Indiase en Mughlai smaken met een moderne, verfijnde presentatie.",
      story_p2: "Met jarenlange culinaire ervaring en verse ingrediënten serveren wij gerechten vol diepte en karakter.",
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

      res_kicker: "Reserveren",
      res_title: "Reserveringssysteem",
      res_text: "Vul je gegevens in. Na verzenden openen we WhatsApp met alle reserveringsdetails.",
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

      status_ok_whatsapp: "Reservering voorbereid. WhatsApp wordt geopend...",
      status_ok_email: "E-mailvenster wordt geopend...",
      status_error: "Controleer de velden en probeer opnieuw.",

      err_required: "Dit veld is verplicht.",
      err_email: "Vul een geldig e-mailadres in.",
      err_phone: "Vul een geldig telefoonnummer in.",
      err_date: "Kies een geldige datum.",
      err_time: "Kies een geldige tijd.",
      err_guests: "Kies aantal gasten.",

      search_placeholder: "Zoek gerecht...",
      menu_empty: "Geen gerechten gevonden.",
      currency: "€"
    },
    en: {
      top_message: "Chef’s Royal Tasting Menu available tonight",
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
      hero_sub: "Traditional recipes, rich spices, and warm hospitality in the heart of Hilversum.",
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
      story_p1: "Delhi Darbaar combines authentic Indian and Mughlai flavors with a refined modern presentation.",
      story_p2: "With years of culinary experience and fresh ingredients, we serve dishes with depth and character.",
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

      res_kicker: "Reservation",
      res_title: "Reservation System",
      res_text: "Fill your details. After submit, WhatsApp opens with reservation info.",
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
      res_email: "Send via Email",

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

      status_ok_whatsapp: "Reservation prepared. Opening WhatsApp...",
      status_ok_email: "Opening email client...",
      status_error: "Please check fields and try again.",

      err_required: "This field is required.",
      err_email: "Enter a valid email.",
      err_phone: "Enter a valid phone number.",
      err_date: "Choose a valid date.",
      err_time: "Choose a valid time.",
      err_guests: "Choose number of guests.",

      search_placeholder: "Search dish...",
      menu_empty: "No dishes found.",
      currency: "€"
    }
  };

  let currentLang = "nl";
  const t = (k) => (I18N[currentLang] && I18N[currentLang][k]) ? I18N[currentLang][k] : k;

  function applyLanguage(lang) {
    currentLang = I18N[lang] ? lang : "nl";
    document.documentElement.lang = currentLang;

    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });

    const search = $("#menuSearchInput");
    if (search) search.placeholder = t("search_placeholder");

    renderMenu();
    renderTestimonials();
  }

  /* ==========================================================================
     05) HERO
     ========================================================================== */
  let heroIndex = 0;
  let heroTimer = null;

  async function setHeroImages() {
    const a = $("#heroA");
    const b = $("#heroB");
    const c = $("#heroC");

    const hero1 = await firstExisting(imageCandidates.hero1);
    const hero2 = await firstExisting(imageCandidates.hero2);
    const hero3 = await firstExisting(imageCandidates.hero3);

    if (a) a.style.backgroundImage = `url('${hero1}')`;
    if (b) b.style.backgroundImage = `url('${hero2}')`;
    if (c) c.style.backgroundImage = `url('${hero3}')`;
  }

  function goHero(i) {
    const slides = $$(".hero-slide");
    if (!slides.length) return;
    slides.forEach((s) => s.classList.remove("is-active"));
    heroIndex = (i + slides.length) % slides.length;
    slides[heroIndex].classList.add("is-active");
  }

  function nextHero() {
    goHero(heroIndex + 1);
  }

  function startHero() {
    stopHero();
    heroTimer = setInterval(nextHero, CONFIG.heroInterval);
  }

  function stopHero() {
    if (heroTimer) clearInterval(heroTimer);
    heroTimer = null;
  }

  function initHeroControls() {
    const hero = $(".hero-section");
    if (hero) {
      hero.addEventListener("mouseenter", stopHero);
      hero.addEventListener("mouseleave", startHero);
    }

    const down = $("#heroDownBtn");
    if (down) {
      down.addEventListener("click", () => {
        const next = $("#story");
        if (next) next.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    startHero();
  }

  /* ==========================================================================
     06) STORY/GALLERY IMAGE PATCH
     ========================================================================== */
  async function patchStaticImages() {
    const map = [
      { id: "#storyImg1", key: "gallery1" },
      { id: "#storyImg2", key: "gallery2" },
      { id: "#storyImg3", key: "gallery3" },
      { id: "#galleryImg1", key: "gallery1" },
      { id: "#galleryImg2", key: "gallery2" },
      { id: "#galleryImg3", key: "gallery3" },
      { id: "#galleryImg4", key: "gallery4" }
    ];

    for (const item of map) {
      const el = $(item.id);
      if (!el) continue;
      el.src = await firstExisting(imageCandidates[item.key]);
    }
  }

  /* ==========================================================================
     07) MENU
     ========================================================================== */
  const MENU_ITEMS = [
    {
      id: 1,
      name: "Butter Chicken",
      category: "Chicken",
      price: 16.5,
      spice: 2,
      imageKey: "dish1",
      desc: {
        nl: "Romige tomatencurry met boter en zachte kip.",
        en: "Creamy tomato curry with butter and tender chicken."
      }
    },
    {
      id: 2,
      name: "Paneer Tikka",
      category: "Veg",
      price: 13.0,
      spice: 2,
      imageKey: "dish2",
      desc: {
        nl: "Gemarineerde paneer, gegrild in tandoor.",
        en: "Marinated paneer grilled in tandoor."
      }
    },
    {
      id: 3,
      name: "Lamb Rogan Josh",
      category: "Lamb",
      price: 18.5,
      spice: 3,
      imageKey: "dish3",
      desc: {
        nl: "Langzaam gegaard lamsgerecht in rijke saus.",
        en: "Slow-cooked lamb in rich aromatic gravy."
      }
    },
    {
      id: 4,
      name: "Chicken Biryani",
      category: "Rice",
      price: 15.5,
      spice: 2,
      imageKey: "dish4",
      desc: {
        nl: "Aromatische basmatirijst met gekruide kip.",
        en: "Aromatic basmati rice with spiced chicken."
      }
    }
  ];

  let activeCategory = "All";
  let menuSearch = "";

  function priceLabel(p) {
    return `${t("currency")}${Number(p).toFixed(2)}`;
  }

  function spiceLabel(level) {
    return level > 0 ? "🌶️".repeat(level) : "Mild";
  }

  function renderCategoryChips() {
    const wrap = $("#categoryChips");
    if (!wrap) return;

    const categories = ["All", ...new Set(MENU_ITEMS.map((x) => x.category))];
    wrap.innerHTML = categories
      .map((c) => `<button class="category-chip ${c === activeCategory ? "is-active" : ""}" data-cat="${c}">${c}</button>`)
      .join("");

    $$("[data-cat]", wrap).forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.getAttribute("data-cat") || "All";
        renderCategoryChips();
        renderMenu();
      });
    });
  }

  function filteredMenu() {
    return MENU_ITEMS.filter((item) => {
      const byCat = activeCategory === "All" || item.category === activeCategory;
      const text = `${item.name} ${item.desc.nl} ${item.desc.en} ${item.category}`.toLowerCase();
      const bySearch = text.includes(menuSearch.toLowerCase());
      return byCat && bySearch;
    });
  }

  async function renderMenu() {
    const grid = $("#menuGrid");
    if (!grid) return;

    const list = filteredMenu();

    if (!list.length) {
      grid.innerHTML = `<article class="menu-card"><div class="menu-body"><h3>${t("menu_empty")}</h3></div></article>`;
      return;
    }

    const cards = await Promise.all(list.map(async (item) => {
      const img = await firstExisting(imageCandidates[item.imageKey] || [CONFIG.fallbackImage]);
      const desc = item.desc[currentLang] || item.desc.nl;
      return `
        <article class="menu-card reveal">
          <div class="menu-media">
            <img src="${img}" alt="${item.name}" onerror="this.onerror=null;this.src='${CONFIG.fallbackImage}'" />
            <span class="menu-badge">${item.category}</span>
          </div>
          <div class="menu-body">
            <div class="menu-row">
              <h3>${item.name}</h3>
              <span class="menu-price">${priceLabel(item.price)}</span>
            </div>
            <p class="menu-desc">${desc}</p>
            <p class="menu-meta">${spiceLabel(item.spice)}</p>
          </div>
        </article>
      `;
    }));

    grid.innerHTML = cards.join("");
    observeReveal();
  }

  function initMenuSearch() {
    const input = $("#menuSearchInput");
    if (!input) return;

    input.addEventListener("input", debounce(async (e) => {
      menuSearch = safe(e.target.value);
      await renderMenu();
    }, 120));
  }

  /* ==========================================================================
     08) TESTIMONIALS
     ========================================================================== */
  const TESTIMONIALS = {
    nl: [
      { text: "Beste butter chicken die ik in Nederland heb geproefd. Perfecte balans.", author: "Aarav M." },
      { text: "Elegante sfeer, snelle service en echt authentieke smaken.", author: "Sofia K." },
      { text: "Ideaal voor familie-etentjes en speciale gelegenheden.", author: "Luca D." }
    ],
    en: [
      { text: "Best butter chicken I’ve tasted in the Netherlands. Perfect balance.", author: "Aarav M." },
      { text: "Elegant ambience, fast service and truly authentic flavors.", author: "Sofia K." },
      { text: "Perfect for family dinners and special occasions.", author: "Luca D." }
    ]
  };

  let tIndex = 0;
  let tTimer = null;

  function renderTestimonials() {
    const track = $("#testimonialTrack");
    const dotsWrap = $("#testimonialDots");
    if (!track || !dotsWrap) return;

    const data = TESTIMONIALS[currentLang] || TESTIMONIALS.nl;

    track.innerHTML = data.map((d) => `
      <article class="testimonial-card">
        <div class="stars">★★★★★</div>
        <p>${d.text}</p>
        <small>— ${d.author}</small>
      </article>
    `).join("");

    dotsWrap.innerHTML = data
      .map((_, i) => `<button class="testimonial-dot ${i === tIndex ? "is-active" : ""}" data-dot="${i}" aria-label="testimonial ${i+1}"></button>`)
      .join("");

    $$("[data-dot]", dotsWrap).forEach((dot) => {
      dot.addEventListener("click", () => {
        tIndex = Number(dot.getAttribute("data-dot") || 0);
        updateTestimonials();
      });
    });

    updateTestimonials();
  }

  function updateTestimonials() {
    const track = $("#testimonialTrack");
    if (!track) return;
    track.style.transform = `translateX(-${tIndex * 100}%)`;

    $$(".testimonial-dot").forEach((d, idx) => {
      d.classList.toggle("is-active", idx === tIndex);
    });
  }

  function startTestimonials() {
    stopTestimonials();
    tTimer = setInterval(() => {
      const len = (TESTIMONIALS[currentLang] || TESTIMONIALS.nl).length;
      tIndex = (tIndex + 1) % len;
      updateTestimonials();
    }, CONFIG.testimonialInterval);
  }

  function stopTestimonials() {
    if (tTimer) clearInterval(tTimer);
    tTimer = null;
  }

  function initTestimonials() {
    const slider = $(".testimonial-slider");
    if (!slider) return;
    renderTestimonials();
    startTestimonials();
    slider.addEventListener("mouseenter", stopTestimonials);
    slider.addEventListener("mouseleave", startTestimonials);
  }

  /* ==========================================================================
     09) LIGHTBOX
     ========================================================================== */
  function initLightbox() {
    const lightbox = $("#lightbox");
    const image = $("#lightboxImage");
    const close = $("#lightboxClose");
    if (!lightbox || !image || !close) return;

    $$("#galleryGrid img").forEach((img) => {
      img.addEventListener("click", () => {
        image.src = img.src || CONFIG.fallbackImage;
        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      });
    });

    const closeBox = () => {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };

    close.addEventListener("click", closeBox);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeBox();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.classList.contains("is-open")) closeBox();
    });
  }

  /* ==========================================================================
     10) NAV / QUICK BUTTONS
     ========================================================================== */
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
      const r = $("#reservation");
      if (r) r.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  /* ==========================================================================
     11) FORM
     ========================================================================== */
  function setError(fieldId, msg = "") {
    const err = $(`[data-error-for="${fieldId}"]`);
    const input = $(`#${fieldId}`);

    if (err) err.textContent = msg;
    if (input) {
      input.classList.remove("is-valid", "is-invalid");
      if (msg) input.classList.add("is-invalid");
      else if (safe(input.value)) input.classList.add("is-valid");
    }
  }

  function validateForm() {
    const name = safe($("#resName")?.value);
    const email = safe($("#resEmail")?.value);
    const phone = safe($("#resPhone")?.value);
    const date = safe($("#resDate")?.value);
    const time = safe($("#resTime")?.value);
    const guests = safe($("#resGuests")?.value);

    let ok = true;
    ["resName", "resEmail", "resPhone", "resDate", "resTime", "resGuests"].forEach((id) => setError(id, ""));

    if (!name) { setError("resName", t("err_required")); ok = false; }
    if (!email) { setError("resEmail", t("err_required")); ok = false; }
    else if (!/^\S+@\S+\.\S+$/.test(email)) { setError("resEmail", t("err_email")); ok = false; }

    if (!phone) { setError("resPhone", t("err_required")); ok = false; }
    else if (!/^[0-9+\s\-()]{6,}$/.test(phone)) { setError("resPhone", t("err_phone")); ok = false; }

    if (!date) { setError("resDate", t("err_date")); ok = false; }
    if (!time) { setError("resTime", t("err_time")); ok = false; }
    if (!guests) { setError("resGuests", t("err_guests")); ok = false; }

    return ok;
  }

  function reservationData() {
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

  function whatsappText(d) {
    const lines = currentLang === "nl"
      ? [
          "Nieuwe reservering - Delhi Darbaar",
          `Naam: ${d.name}`,
          `E-mail: ${d.email}`,
          `Telefoon: ${d.phone}`,
          `Datum: ${d.date}`,
          `Tijd: ${d.time}`,
          `Gasten: ${d.guests}`,
          `Gelegenheid: ${d.occasion}`,
          `Opmerkingen: ${d.notes}`
        ]
      : [
          "New reservation - Delhi Darbaar",
          `Name: ${d.name}`,
          `Email: ${d.email}`,
          `Phone: ${d.phone}`,
          `Date: ${d.date}`,
          `Time: ${d.time}`,
          `Guests: ${d.guests}`,
          `Occasion: ${d.occasion}`,
          `Notes: ${d.notes}`
        ];
    return encodeURIComponent(lines.join("\n"));
  }

  function mailtoLink(d) {
    const subject = encodeURIComponent(currentLang === "nl" ? "Nieuwe reservering" : "New reservation");
    const body = encodeURIComponent(
      (currentLang === "nl"
        ? [
            `Naam: ${d.name}`,
            `E-mail: ${d.email}`,
            `Telefoon: ${d.phone}`,
            `Datum: ${d.date}`,
            `Tijd: ${d.time}`,
            `Gasten: ${d.guests}`,
            `Gelegenheid: ${d.occasion}`,
            `Opmerkingen: ${d.notes}`
          ]
        : [
            `Name: ${d.name}`,
            `Email: ${d.email}`,
            `Phone: ${d.phone}`,
            `Date: ${d.date}`,
            `Time: ${d.time}`,
            `Guests: ${d.guests}`,
            `Occasion: ${d.occasion}`,
            `Notes: ${d.notes}`
          ]).join("\n")
    );

    return `mailto:${CONFIG.emailTarget}?subject=${subject}&body=${body}`;
  }

  function initForm() {
    const form = $("#reservationForm");
    const status = $("#reservationStatus");
    const emailBtn = $("#emailFallbackBtn");
    if (!form || !status) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!validateForm()) {
        status.textContent = t("status_error");
        status.classList.remove("is-success");
        status.classList.add("is-danger");
        return;
      }

      const d = reservationData();
      const wa = `https://wa.me/${CONFIG.whatsappNumber}?text=${whatsappText(d)}`;

      status.textContent = t("status_ok_whatsapp");
      status.classList.remove("is-danger");
      status.classList.add("is-success");

      window.open(wa, "_blank", "noopener,noreferrer");
    });

    if (emailBtn) {
      emailBtn.addEventListener("click", () => {
        if (!validateForm()) {
          status.textContent = t("status_error");
          status.classList.remove("is-success");
          status.classList.add("is-danger");
          return;
        }

        const d = reservationData();
        window.location.href = mailtoLink(d);

        status.textContent = t("status_ok_email");
        status.classList.remove("is-danger");
        status.classList.add("is-success");
      });
    }
  }

  /* ==========================================================================
     12) SCROLL UI
     ========================================================================== */
  function initScrollUI() {
    const progress = $("#scrollProgress");
    const topBtn = $("#backToTopBtn");
    const sticky = $("#stickyCtaBar");

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;

      if (progress) progress.style.width = `${pct}%`;
      if (topBtn) topBtn.classList.toggle("is-visible", doc.scrollTop > 420);
      if (sticky) sticky.style.opacity = doc.scrollTop > 120 ? "1" : ".95";
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (topBtn) {
      topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  /* ==========================================================================
     13) CURSOR GLOW
     ========================================================================== */
  function initCursorGlow() {
    const glow = $("#cursorGlow");
    if (!glow) return;

    window.addEventListener("mousemove", (e) => {
      glow.style.transform = `translate(${e.clientX - 140}px, ${e.clientY - 140}px)`;
    });
  }

  /* ==========================================================================
     14) REVEAL OBSERVER
     ========================================================================== */
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

  /* ==========================================================================
     15) FAQ single-open
     ========================================================================== */
  function initFaq() {
    const items = $$(".faq-item");
    if (!items.length) return;
    items.forEach((it) => {
      it.addEventListener("toggle", () => {
        if (!it.open) return;
        items.forEach((other) => {
          if (other !== it) other.open = false;
        });
      });
    });
  }

  /* ==========================================================================
     16) LANGUAGE SWITCH
     ========================================================================== */
  function initLanguage() {
    const sw = $("#langSwitch");
    if (!sw) return;
    sw.value = "nl";
    applyLanguage("nl");
    sw.addEventListener("change", () => applyLanguage(sw.value));
  }

  /* ==========================================================================
     17) VISIBILITY HANDLING
     ========================================================================== */
  function initVisibilityHandling() {
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        stopHero();
        stopTestimonials();
      } else {
        startHero();
        startTestimonials();
      }
    });
  }

  /* ==========================================================================
     18) INIT
     ========================================================================== */
  async function init() {
    hideBootLoader();

    initLanguage();
    initMobileNav();
    initQuickReserve();

    await setHeroImages();
    await patchStaticImages();
    initHeroControls();

    renderCategoryChips();
    await renderMenu();
    initMenuSearch();

    patchImageFallbacks();
    initLightbox();

    initTestimonials();
    initForm();
    initFaq();

    observeReveal();
    initScrollUI();
    initCursorGlow();

    initVisibilityHandling();
    setYear();

    hideBootLoader();
    window.addEventListener("load", hideBootLoader);
    setTimeout(hideBootLoader, 2500);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
