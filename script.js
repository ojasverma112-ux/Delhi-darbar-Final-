/* ==========================================================================
   DELHI DARBAAR - PREMIUM SCRIPT (FULL, PATCHED)
   Includes:
   - NL/EN language switch
   - Hero slider
   - Menu search/filter
   - Image auto-detect (jpg/jpeg/png) with fallback
   - Reservation validation + WhatsApp + Email fallback
   - Reveal animations
   - Gallery lightbox
   - Testimonial slider
   - Scroll progress + back-to-top
   - Mobile nav
   ========================================================================== */

(() => {
  "use strict";

  /* ==========================================================================
     01) GLOBAL CONFIG
     ========================================================================== */
  const CONFIG = {
    projectBase: "/Delhi-darbar-Final-",
    whatsappNumber: "31613533612",
    emailTarget: "info@delhidarbaar.nl",
    fallbackImage: "/Delhi-darbar-Final-/fallback.jpg",
    heroInterval: 5200,
    testimonialInterval: 4600
  };

  /* ==========================================================================
     02) DOM HELPERS
     ========================================================================== */
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const safeText = (value) => String(value ?? "").trim();

  const debounce = (fn, delay = 200) => {
    let timer = null;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  };

  function patchImageFallbacks() {
    $$("img").forEach((img) => {
      img.addEventListener("error", () => {
        img.onerror = null;
        img.src = CONFIG.fallbackImage;
      });
    });
  }

  /* ==========================================================================
     03) IMAGE AUTO-DETECT (important patch)
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

  async function firstExisting(urls) {
    for (const url of urls) {
      try {
        const res = await fetch(url, { method: "HEAD", cache: "no-store" });
        if (res.ok) return url;
      } catch (_) {}
    }
    return CONFIG.fallbackImage;
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
      review_1_text: "Beste butter chicken die ik in Nederland heb geproefd. Perfecte balans.",
      review_2_text: "Elegante sfeer, snelle service en echt authentieke smaken.",
      review_3_text: "Ideaal voor familie-etentjes en speciale gelegenheden.",

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
      menu_empty: "Geen gerechten gevonden voor deze zoekopdracht.",
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
      review_1_text: "Best butter chicken I’ve tasted in the Netherlands. Perfect balance.",
      review_2_text: "Elegant ambience, fast service, and truly authentic flavor.",
      review_3_text: "Ideal for family dinners and special occasions.",

      res_kicker: "Reservation",
      res_title: "Reservation System",
      res_text: "Fill in your details. After submitting, WhatsApp opens with your reservation details.",
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

      faq_title: "Frequently Asked Questions",
      faq_q1: "Is reservation required?",
      faq_a1: "Reservations are strongly recommended, especially on weekends.",
      faq_q2: "Do you have vegetarian options?",
      faq_a2: "Yes, we offer an extensive selection of vegetarian dishes.",
      faq_q3: "Do you offer takeaway?",
      faq_a3: "Yes, takeaway is available during opening hours.",

      contact_title: "Contact",
      hours_title: "Opening Hours",
      hours_text: "Mon-Thu 13:00–22:00 · Fri-Sat 13:00–22:30 · Sunday closed",
      hours_cta: "Reserve your table",
      footer_note: "Premium Indian dining experience",

      status_ok_whatsapp: "Reservation prepared. Opening WhatsApp...",
      status_ok_email: "Opening email client...",
      status_error: "Please check the fields and try again.",

      err_required: "This field is required.",
      err_email: "Please enter a valid email address.",
      err_phone: "Please enter a valid phone number.",
      err_date: "Please choose a valid date.",
      err_time: "Please choose a valid time.",
      err_guests: "Please choose number of guests.",

      search_placeholder: "Search dish...",
      menu_empty: "No dishes found for this search.",
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

    const searchInput = $("#menuSearchInput");
    if (searchInput) searchInput.placeholder = t("search_placeholder");

    renderMenuGrid();
    renderTestimonials();
  }

  /* ==========================================================================
     05) HERO
     ========================================================================== */
  let heroIndex = 0;
  let heroTimer = null;

  async function setHeroImages() {
    const hero1 = await firstExisting(imageCandidates.hero1);
    const hero2 = await firstExisting(imageCandidates.hero2);
    const hero3 = await firstExisting(imageCandidates.hero3);

    const a = $("#heroA");
    const b = $("#heroB");
    const c = $("#heroC");

    if (a) a.style.backgroundImage = `url('${hero1}')`;
    if (b) b.style.backgroundImage = `url('${hero2}')`;
    if (c) c.style.backgroundImage = `url('${hero3}')`;
  }

  function goHero(index) {
    const slides = $$(".hero-slide");
    if (!slides.length) return;
    slides.forEach((s) => s.classList.remove("is-active"));
    heroIndex = (index + slides.length) % slides.length;
    slides[heroIndex].classList.add("is-active");
  }

  function nextHero() {
    goHero(heroIndex + 1);
  }

  function startHeroAutoplay() {
    stopHeroAutoplay();
    heroTimer = setInterval(nextHero, CONFIG.heroInterval);
  }

  function stopHeroAutoplay() {
    if (heroTimer) clearInterval(heroTimer);
    heroTimer = null;
  }

  function initHero() {
    const hero = $(".hero-section");
    if (!hero) return;

    hero.addEventListener("mouseenter", stopHeroAutoplay);
    hero.addEventListener("mouseleave", startHeroAutoplay);

    const downBtn = $("#heroDownBtn");
    if (downBtn) {
      downBtn.addEventListener("click", () => {
        const target = $("#story");
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    startHeroAutoplay();
  }

  /* ==========================================================================
     06) MENU
     ========================================================================== */
  const MENU_ITEMS = [
    { id: 1, name: "Butter Chicken", category: "Chicken", price: 16.5, spice: 2, imageKey: "dish1", desc: { nl: "Romige tomatencurry met boter en zachte kip.", en: "Creamy tomato curry with butter and tender chicken." } },
    { id: 2, name: "Paneer Tikka", category: "Veg", price: 13.0, spice: 2, imageKey: "dish2", desc: { nl: "Gemarineerde paneer, gegrild in tandoor.", en: "Marinated paneer grilled in tandoor." } },
    { id: 3, name: "Lamb Rogan Josh", category: "Lamb", price: 18.5, spice: 3, imageKey: "dish3", desc: { nl: "Langzaam gegaard lamsgerecht in rijke saus.", en: "Slow-cooked lamb in rich aromatic gravy." } },
    { id: 4, name: "Chicken Biryani", category: "Rice", price: 15.5, spice: 2, imageKey: "dish4", desc: { nl: "Aromatische basmatirijst met gekruide kip.", en: "Aromatic basmati rice with spiced chicken." } }
  ];

  let activeCategory = "All";
  let searchTerm = "";

  function spiceText(level) {
    if (level <= 0) return "Mild";
    return "🌶️".repeat(level);
  }

  function formatPrice(price) {
    return `${t("currency")}${Number(price).toFixed(2)}`;
  }

  function renderCategoryChips() {
    const wrap = $("#categoryChips");
    if (!wrap) return;

    const categories = ["All", ...new Set(MENU_ITEMS.map((item) => item.category))];

    wrap.innerHTML = categories
      .map((cat) => {
        const active = cat === activeCategory ? "is-active" : "";
        return `<button class="category-chip ${active}" data-category="${cat}">${cat}</button>`;
      })
      .join("");

    $$("[data-category]", wrap).forEach((chip) => {
      chip.addEventListener("click", () => {
        activeCategory = chip.getAttribute("data-category") || "All";
        renderCategoryChips();
        renderMenuGrid();
      });
    });
  }

  function filteredMenu() {
    return MENU_ITEMS.filter((item) => {
      const byCategory = activeCategory === "All" || item.category === activeCategory;
      const haystack = `${item.name} ${item.desc.nl} ${item.desc.en} ${item.category}`.toLowerCase();
      const bySearch = haystack.includes(searchTerm.toLowerCase());
      return byCategory && bySearch;
    });
  }

  async function renderMenuGrid() {
    const grid = $("#menuGrid");
    if (!grid) return;

    const items = filteredMenu();

    if (!items.length) {
      grid.innerHTML = `
        <article class="menu-card">
          <div class="menu-body">
            <h3>${t("menu_empty")}</h3>
          </div>
        </article>
      `;
      return;
    }

    const cards = await Promise.all(
      items.map(async (item) => {
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
                <span class="menu-price">${formatPrice(item.price)}</span>
              </div>
              <p class="menu-desc">${desc}</p>
              <p class="menu-meta">${spiceText(item.spice)}</p>
            </div>
          </article>
        `;
      })
    );

    grid.innerHTML = cards.join("");
    patchImageFallbacks();
    observeRevealElements();
  }

  function initMenuSearch() {
    const input = $("#menuSearchInput");
    if (!input) return;

    input.addEventListener(
      "input",
      debounce(async (e) => {
        searchTerm = safeText(e.target.value);
        await renderMenuGrid();
      }, 150)
    );
  }

  /* ==========================================================================
     07) TESTIMONIALS
     ========================================================================== */
  const TESTIMONIALS = {
    nl: [
      { text: "Beste butter chicken die ik in Nederland heb geproefd. Perfecte balans.", author: "Aarav M." },
      { text: "Elegante sfeer, snelle service en echt authentieke smaken.", author: "Sofia K." },
      { text: "Ideaal voor familie-etentjes en speciale gelegenheden.", author: "Luca D." }
    ],
    en: [
      { text: "Best butter chicken I’ve tasted in the Netherlands. Perfect balance.", author: "Aarav M." },
      { text: "Elegant ambience, fast service, and truly authentic flavor.", author: "Sofia K." },
      { text: "Ideal for family dinners and special occasions.", author: "Luca D." }
    ]
  };

  let testimonialIndex = 0;
  let testimonialTimer = null;

  function renderTestimonials() {
    const track = $("#testimonialTrack");
    const dots = $("#testimonialDots");
    if (!track || !dots) return;

    const list = TESTIMONIALS[currentLang] || TESTIMONIALS.nl;

    track.innerHTML = list
      .map(
        (item) => `
      <article class="testimonial-card">
        <div class="stars">★★★★★</div>
        <p>${item.text}</p>
        <small>— ${item.author}</small>
      </article>
    `
      )
      .join("");

    dots.innerHTML = list
      .map((_, i) => `<button class="testimonial-dot ${i === testimonialIndex ? "is-active" : ""}" data-dot="${i}" aria-label="Review ${i + 1}"></button>`)
      .join("");

    $$("[data-dot]", dots).forEach((dot) => {
      dot.addEventListener("click", () => {
        testimonialIndex = Number(dot.getAttribute("data-dot") || 0);
        updateTestimonialPosition();
      });
    });

    updateTestimonialPosition();
  }

  function updateTestimonialPosition() {
    const track = $("#testimonialTrack");
    if (!track) return;
    track.style.transform = `translateX(-${testimonialIndex * 100}%)`;

    $$(".testimonial-dot").forEach((dot, idx) => {
      dot.classList.toggle("is-active", idx === testimonialIndex);
    });
  }

  function startTestimonialAutoplay() {
    stopTestimonialAutoplay();
    testimonialTimer = setInterval(() => {
      const list = TESTIMONIALS[currentLang] || TESTIMONIALS.nl;
      testimonialIndex = (testimonialIndex + 1) % list.length;
      updateTestimonialPosition();
    }, CONFIG.testimonialInterval);
  }

  function stopTestimonialAutoplay() {
    if (testimonialTimer) clearInterval(testimonialTimer);
    testimonialTimer = null;
  }

  function initTestimonials() {
    const slider = $(".testimonial-slider");
    if (!slider) return;

    renderTestimonials();
    startTestimonialAutoplay();

    slider.addEventListener("mouseenter", stopTestimonialAutoplay);
    slider.addEventListener("mouseleave", startTestimonialAutoplay);
  }

  /* ==========================================================================
     08) GALLERY LIGHTBOX
     ========================================================================== */
  async function patchGalleryImages() {
    const map = [
      { selector: "#galleryGrid .gallery-item:nth-child(1) img", key: "gallery1" },
      { selector: "#galleryGrid .gallery-item:nth-child(2) img", key: "gallery2" },
      { selector: "#galleryGrid .gallery-item:nth-child(3) img", key: "gallery3" },
      { selector: "#galleryGrid .gallery-item:nth-child(4) img", key: "gallery4" }
    ];

    for (const item of map) {
      const el = $(item.selector);
      if (!el) continue;
      el.src = await firstExisting(imageCandidates[item.key]);
    }
  }

  function initLightbox() {
    const lightbox = $("#lightbox");
    const lightboxImage = $("#lightboxImage");
    const lightboxClose = $("#lightboxClose");
    if (!lightbox || !lightboxImage || !lightboxClose) return;

    $$("#galleryGrid img").forEach((img) => {
      img.addEventListener("click", () => {
        lightboxImage.src = img.src || CONFIG.fallbackImage;
        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      });
    });

    const close = () => {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };

    lightboxClose.addEventListener("click", close);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) close();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.classList.contains("is-open")) close();
    });
  }

  /* ==========================================================================
     09) NAV + QUICK ACTIONS
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
      const target = $("#reservation");
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  /* ==========================================================================
     10) REVEAL
     ========================================================================== */
  let revealObserver = null;

  function observeRevealElements() {
    if (revealObserver) revealObserver.disconnect();

    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    $$(".reveal").forEach((el) => revealObserver.observe(el));
  }

  /* ==========================================================================
     11) RESERVATION FORM
     ========================================================================== */
  function setError(fieldId, message = "") {
    const error = $(`[data-error-for="${fieldId}"]`);
    const input = $(`#${fieldId}`);
    if (error) error.textContent = message;

    if (input) {
      input.classList.remove("is-valid", "is-invalid");
      if (message) input.classList.add("is-invalid");
      else if (input.value.trim()) input.classList.add("is-valid");
    }
  }

  function validateForm() {
    const name = safeText($("#resName")?.value);
    const email = safeText($("#resEmail")?.value);
    const phone = safeText($("#resPhone")?.value);
    const date = safeText($("#resDate")?.value);
    const time = safeText($("#resTime")?.value);
    const guests = safeText($("#resGuests")?.value);

    let ok = true;

    ["resName", "resEmail", "resPhone", "resDate", "resTime", "resGuests"].forEach((id) => setError(id, ""));

    if (!name) {
      setError("resName", t("err_required"));
      ok = false;
    }

    if (!email) {
      setError("resEmail", t("err_required"));
      ok = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("resEmail", t("err_email"));
      ok = false;
    }

    if (!phone) {
      setError("resPhone", t("err_required"));
      ok = false;
    } else if (!/^[0-9+\s\-()]{6,}$/.test(phone)) {
      setError("resPhone", t("err_phone"));
      ok = false;
    }

    if (!date) {
      setError("resDate", t("err_date"));
      ok = false;
    }

    if (!time) {
      setError("resTime", t("err_time"));
      ok = false;
    }

    if (!guests) {
      setError("resGuests", t("err_guests"));
      ok = false;
    }

    return ok;
  }

  function reservationPayload() {
    return {
      name: safeText($("#resName")?.value),
      email: safeText($("#resEmail")?.value),
      phone: safeText($("#resPhone")?.value),
      date: safeText($("#resDate")?.value),
      time: safeText($("#resTime")?.value),
      guests: safeText($("#resGuests")?.value),
      occasion: safeText($("#resOccasion")?.value) || "-",
      notes: safeText($("#resNotes")?.value) || "-"
    };
  }

  function buildWhatsAppText(data) {
    const lines =
      currentLang === "nl"
        ? [
            "Nieuwe reservering - Delhi Darbaar",
            `Naam: ${data.name}`,
            `E-mail: ${data.email}`,
            `Telefoon: ${data.phone}`,
            `Datum: ${data.date}`,
            `Tijd: ${data.time}`,
            `Gasten: ${data.guests}`,
            `Gelegenheid: ${data.occasion}`,
            `Opmerkingen: ${data.notes}`
          ]
        : [
            "New reservation - Delhi Darbaar",
            `Name: ${data.name}`,
            `Email: ${data.email}`,
            `Phone: ${data.phone}`,
            `Date: ${data.date}`,
            `Time: ${data.time}`,
            `Guests: ${data.guests}`,
            `Occasion: ${data.occasion}`,
            `Notes: ${data.notes}`
          ];

    return encodeURIComponent(lines.join("\n"));
  }

  function buildMailto(data) {
    const subject = encodeURIComponent(currentLang === "nl" ? "Nieuwe reservering" : "New reservation");
    const body = encodeURIComponent(
      (currentLang === "nl"
        ? [
            `Naam: ${data.name}`,
            `E-mail: ${data.email}`,
            `Telefoon: ${data.phone}`,
            `Datum: ${data.date}`,
            `Tijd: ${data.time}`,
            `Gasten: ${data.guests}`,
            `Gelegenheid: ${data.occasion}`,
            `Opmerkingen: ${data.notes}`
          ]
        : [
            `Name: ${data.name}`,
            `Email: ${data.email}`,
            `Phone: ${data.phone}`,
            `Date: ${data.date}`,
            `Time: ${data.time}`,
            `Guests: ${data.guests}`,
            `Occasion: ${data.occasion}`,
            `Notes: ${data.notes}`
          ]
      ).join("\n")
    );

    return `mailto:${CONFIG.emailTarget}?subject=${subject}&body=${body}`;
  }

  function initReservationForm() {
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

      const payload = reservationPayload();
      const msg = buildWhatsAppText(payload);
      const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`;

      status.textContent = t("status_ok_whatsapp");
      status.classList.remove("is-danger");
      status.classList.add("is-success");

      window.open(url, "_blank", "noopener,noreferrer");
    });

    if (emailBtn) {
      emailBtn.addEventListener("click", () => {
        if (!validateForm()) {
          status.textContent = t("status_error");
          status.classList.remove("is-success");
          status.classList.add("is-danger");
          return;
        }

        const payload = reservationPayload();
        window.location.href = buildMailto(payload);

        status.textContent = t("status_ok_email");
        status.classList.remove("is-danger");
        status.classList.add("is-success");
      });
    }
  }

  /* ==========================================================================
     12) SCROLL UI
     ========================================================================== */
  function initScrollProgressAndTop() {
    const progress = $("#scrollProgress");
    const topBtn = $("#backToTopBtn");

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const percent = max > 0 ? (doc.scrollTop / max) * 100 : 0;

      if (progress) progress.style.width = `${percent}%`;
      if (topBtn) topBtn.classList.toggle("is-visible", doc.scrollTop > 450);
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
     14) LANGUAGE SWITCHER
     ========================================================================== */
  function initLanguageSwitch() {
    const switcher = $("#langSwitch");
    if (!switcher) return;

    switcher.value = "nl";
    applyLanguage("nl");

    switcher.addEventListener("change", () => {
      applyLanguage(switcher.value);
    });
  }

  /* ==========================================================================
     15) FOOTER YEAR
     ========================================================================== */
  function setFooterYear() {
    const year = $("#year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  /* ==========================================================================
     16) LOADER SAFETY
     ========================================================================== */
  function hideBootLoader() {
    const boot = $("#bootLoader");
    if (boot) boot.classList.add("hide");
  }

  function initLoaderSafety() {
    hideBootLoader();
    window.addEventListener("load", hideBootLoader);
    setTimeout(hideBootLoader, 2500);
  }

  /* ==========================================================================
     17) OPTIONAL: GOOGLE REVIEWS BUTTON HOOK
     (add a button in HTML with id="googleReviewsBtn" if needed)
     ========================================================================== */
  function initGoogleReviewsButton() {
    const btn = $("#googleReviewsBtn");
    if (!btn) return;
    btn.addEventListener("click", () => {
      window.open(
        "https://www.google.com/maps/search/?api=1&query=Delhi+Darbaar+Hilversum",
        "_blank",
        "noopener,noreferrer"
      );
    });
  }

  /* ==========================================================================
     18) PAGE VISIBILITY HANDLING
     ========================================================================== */
  function initVisibilityHandling() {
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        stopHeroAutoplay();
        stopTestimonialAutoplay();
      } else {
        startHeroAutoplay();
        startTestimonialAutoplay();
      }
    });
  }

  /* ==========================================================================
     19) INIT
     ========================================================================== */
  async function init() {
    initLoaderSafety();

    initLanguageSwitch();
    initMobileNav();
    initQuickReserve();

    await setHeroImages();
    initHero();

    renderCategoryChips();
    await renderMenuGrid();
    initMenuSearch();

    await patchGalleryImages();
    patchImageFallbacks();
    initLightbox();

    initTestimonials();
    initReservationForm();

    observeRevealElements();
    initScrollProgressAndTop();
    initCursorGlow();
    initGoogleReviewsButton();

    initVisibilityHandling();
    setFooterYear();

    hideBootLoader();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
