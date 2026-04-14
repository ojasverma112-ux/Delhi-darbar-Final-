/* ==========================================================================
   DELHI DARBAAR - PREMIUM SCRIPT (PART 3)
   GitHub Pages project: /Delhi-darbar-Final-/
   ========================================================================== */

(() => {
  "use strict";

  /* ==========================================================================
     01) DOM HELPERS
     ========================================================================== */
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const safeText = (value) => String(value ?? "").trim();

  const setText = (selector, text) => {
    const el = $(selector);
    if (el) el.textContent = text;
  };

  const toggleClass = (el, className, force) => {
    if (!el) return;
    el.classList.toggle(className, force);
  };

  const debounce = (fn, delay = 200) => {
    let timer = null;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  };

  /* ==========================================================================
     02) GLOBAL CONFIG
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
     03) I18N (NL default + EN switch)
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
      gallery_view: "Bekijk",
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
      gallery_view: "View",
      currency: "€"
    }
  };

  let currentLang = "nl";

  const t = (key) => {
    const table = I18N[currentLang] || I18N.nl;
    return table[key] ?? key;
  };

  function applyLanguage(lang) {
    currentLang = I18N[lang] ? lang : "nl";
    document.documentElement.lang = currentLang;

    $$("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      node.textContent = t(key);
    });

    const menuSearchInput = $("#menuSearchInput");
    if (menuSearchInput) menuSearchInput.placeholder = t("search_placeholder");

    // re-render dynamic sections that include language-dependent text
    renderMenuGrid();
    renderTestimonials();
    updateGalleryViewLabel();
  }

  /* ==========================================================================
     04) IMAGE SAFETY HELPERS
     ========================================================================== */
  function withFallbackSrc(imgEl) {
    if (!imgEl) return;
    imgEl.addEventListener("error", () => {
      imgEl.onerror = null;
      imgEl.src = CONFIG.fallbackImage;
    });
  }

  function patchAllImageFallbacks() {
    $$("img").forEach(withFallbackSrc);
  }

  function preloadImage(src) {
    return new Promise((resolve) => {
      const image = new Image();
      image.onload = () => resolve({ ok: true, src });
      image.onerror = () => resolve({ ok: false, src: CONFIG.fallbackImage });
      image.src = src;
    });
  }

  /* ==========================================================================
     05) MENU DATA + LOGIC
     ========================================================================== */
  const MENU_ITEMS = [
    {
      id: 1,
      name: "Butter Chicken",
      category: "Chicken",
      price: 16.5,
      spice: 2,
      image: `${CONFIG.projectBase}/dish-1.jpg`,
      description: {
        nl: "Romige tomatencurry met boter, kasoori methi en zachte kip.",
        en: "Creamy tomato curry with butter, kasoori methi, and tender chicken."
      }
    },
    {
      id: 2,
      name: "Paneer Tikka",
      category: "Veg",
      price: 13.0,
      spice: 2,
      image: `${CONFIG.projectBase}/dish-2.jpg`,
      description: {
        nl: "Gemarineerde paneer, gegrild in tandoor met rokerige aroma’s.",
        en: "Marinated paneer grilled in tandoor with smoky aromas."
      }
    },
    {
      id: 3,
      name: "Lamb Rogan Josh",
      category: "Lamb",
      price: 18.5,
      spice: 3,
      image: `${CONFIG.projectBase}/dish-3.jpg`,
      description: {
        nl: "Langzaam gegaard lamsgerecht in rijke Kashmiri saus.",
        en: "Slow-cooked lamb in rich Kashmiri-style gravy."
      }
    },
    {
      id: 4,
      name: "Chicken Biryani",
      category: "Rice",
      price: 15.5,
      spice: 2,
      image: `${CONFIG.projectBase}/dish-4.jpg`,
      description: {
        nl: "Aromatische basmatirijst met gekruide kip en saffraan.",
        en: "Aromatic basmati rice with spiced chicken and saffron."
      }
    },
    {
      id: 5,
      name: "Dal Makhani",
      category: "Veg",
      price: 12.0,
      spice: 1,
      image: `${CONFIG.projectBase}/dish-2.jpg`,
      description: {
        nl: "Langzaam gestoofde zwarte linzen met boter en room.",
        en: "Slow-simmered black lentils with butter and cream."
      }
    },
    {
      id: 6,
      name: "Garlic Naan",
      category: "Bread",
      price: 4.5,
      spice: 0,
      image: `${CONFIG.projectBase}/dish-1.jpg`,
      description: {
        nl: "Vers gebakken naan met knoflook en korianderboter.",
        en: "Freshly baked naan with garlic and coriander butter."
      }
    }
  ];

  const spiceToLabel = (level) => {
    if (level <= 0) return "Mild";
    return "🌶️".repeat(level);
  };

  let activeCategory = "All";
  let searchTerm = "";

  function getAllCategories() {
    const unique = new Set(MENU_ITEMS.map((item) => item.category));
    return ["All", ...unique];
  }

  function filteredMenuItems() {
    return MENU_ITEMS.filter((item) => {
      const byCategory = activeCategory === "All" || item.category === activeCategory;
      const fullText = `${item.name} ${item.description.nl} ${item.description.en} ${item.category}`.toLowerCase();
      const bySearch = fullText.includes(searchTerm.toLowerCase());
      return byCategory && bySearch;
    });
  }

  function renderCategoryChips() {
    const chipWrap = $("#categoryChips");
    if (!chipWrap) return;

    const categories = getAllCategories();

    chipWrap.innerHTML = categories
      .map((cat) => {
        const active = cat === activeCategory ? "is-active" : "";
        return `<button class="category-chip ${active}" data-category="${cat}">${cat}</button>`;
      })
      .join("");

    $$("[data-category]", chipWrap).forEach((chip) => {
      chip.addEventListener("click", () => {
        activeCategory = chip.getAttribute("data-category") || "All";
        renderCategoryChips();
        renderMenuGrid();
      });
    });
  }

  function formatPrice(amount) {
    return `${t("currency")}${Number(amount).toFixed(2)}`;
  }

  function renderMenuGrid() {
    const grid = $("#menuGrid");
    if (!grid) return;

    const items = filteredMenuItems();

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

    grid.innerHTML = items
      .map((item) => {
        const desc = item.description[currentLang] || item.description.nl;
        return `
          <article class="menu-card reveal">
            <div class="menu-media">
              <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src='${CONFIG.fallbackImage}'" />
              <span class="menu-badge">${item.category}</span>
            </div>
            <div class="menu-body">
              <div class="menu-row">
                <h3>${item.name}</h3>
                <span class="menu-price">${formatPrice(item.price)}</span>
              </div>
              <p class="menu-desc">${desc}</p>
              <p class="menu-meta">${spiceToLabel(item.spice)}</p>
            </div>
          </article>
        `;
      })
      .join("");

    patchAllImageFallbacks();
    reObserveReveal();
  }

  function initMenuSearch() {
    const input = $("#menuSearchInput");
    if (!input) return;

    const onInput = debounce((event) => {
      searchTerm = safeText(event.target.value);
      renderMenuGrid();
    }, 150);

    input.addEventListener("input", onInput);
  }

  /* ==========================================================================
     06) HERO SLIDER
     ========================================================================== */
  let heroIndex = 0;
  let heroTimer = null;

  async function prepareHeroSlides() {
    const slides = $$(".hero-slide");
    for (const slide of slides) {
      const bg = slide.getAttribute("data-bg");
      if (!bg) continue;
      const loaded = await preloadImage(bg);
      slide.style.backgroundImage = `url('${loaded.src}')`;
    }
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
        const story = $("#story");
        if (story) story.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    startHeroAutoplay();
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
    const dotsWrap = $("#testimonialDots");
    if (!track || !dotsWrap) return;

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

    dotsWrap.innerHTML = list
      .map((_, i) => `<button class="testimonial-dot ${i === testimonialIndex ? "is-active" : ""}" data-dot="${i}" aria-label="Go to review ${i + 1}"></button>`)
      .join("");

    $$("[data-dot]", dotsWrap).forEach((dot) => {
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
      const total = (TESTIMONIALS[currentLang] || TESTIMONIALS.nl).length;
      testimonialIndex = (testimonialIndex + 1) % total;
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
  function updateGalleryViewLabel() {
    // purely visual label in CSS ::after is static ("View"), keep as-is or
    // optionally add aria text updates here if needed in future.
  }

  function initGalleryLightbox() {
    const lightbox = $("#lightbox");
    const lightboxImage = $("#lightboxImage");
    const closeBtn = $("#lightboxClose");
    const items = $$(".gallery-item img");

    if (!lightbox || !lightboxImage || !closeBtn || !items.length) return;

    items.forEach((img) => {
      img.addEventListener("click", async () => {
        const src = img.getAttribute("src") || CONFIG.fallbackImage;
        const loaded = await preloadImage(src);
        lightboxImage.src = loaded.src;
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

    closeBtn.addEventListener("click", close);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) close();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.classList.contains("is-open")) {
        close();
      }
    });
  }

  /* ==========================================================================
     09) NAV + MOBILE MENU
     ========================================================================== */
  function initMobileNav() {
    const toggle = $("#mobileMenuToggle");
    const nav = $("#mainNav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    $$("a", nav).forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ==========================================================================
     10) REVEAL ON SCROLL
     ========================================================================== */
  let revealObserver = null;

  function createRevealObserver() {
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

  function reObserveReveal() {
    createRevealObserver();
  }

  /* ==========================================================================
     11) FORM VALIDATION + RESERVATION FLOW
     ========================================================================== */
  function setFieldError(fieldId, message = "") {
    const errorEl = $(`[data-error-for="${fieldId}"]`);
    const fieldEl = $(`#${fieldId}`);

    if (errorEl) errorEl.textContent = message;

    if (fieldEl) {
      fieldEl.classList.remove("is-valid", "is-invalid");
      if (message) fieldEl.classList.add("is-invalid");
      else if (fieldEl.value.trim()) fieldEl.classList.add("is-valid");
    }
  }

  function validateReservationForm() {
    const name = safeText($("#resName")?.value);
    const email = safeText($("#resEmail")?.value);
    const phone = safeText($("#resPhone")?.value);
    const date = safeText($("#resDate")?.value);
    const time = safeText($("#resTime")?.value);
    const guests = safeText($("#resGuests")?.value);

    let isValid = true;

    // reset
    ["resName", "resEmail", "resPhone", "resDate", "resTime", "resGuests"].forEach((id) => setFieldError(id, ""));

    if (!name) {
      setFieldError("resName", t("err_required"));
      isValid = false;
    }

    if (!email) {
      setFieldError("resEmail", t("err_required"));
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setFieldError("resEmail", t("err_email"));
      isValid = false;
    }

    if (!phone) {
      setFieldError("resPhone", t("err_required"));
      isValid = false;
    } else if (!/^[0-9+\s\-()]{6,}$/.test(phone)) {
      setFieldError("resPhone", t("err_phone"));
      isValid = false;
    }

    if (!date) {
      setFieldError("resDate", t("err_date"));
      isValid = false;
    }

    if (!time) {
      setFieldError("resTime", t("err_time"));
      isValid = false;
    }

    if (!guests) {
      setFieldError("resGuests", t("err_guests"));
      isValid = false;
    }

    return isValid;
  }

  function getReservationPayload() {
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

  function buildWhatsappMessage(payload) {
    const lines =
      currentLang === "nl"
        ? [
            "Nieuwe reservering - Delhi Darbaar",
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

    return encodeURIComponent(lines.join("\n"));
  }

  function buildMailto(payload) {
    const subject = encodeURIComponent(currentLang === "nl" ? "Nieuwe reservering" : "New reservation");
    const bodyLines =
      currentLang === "nl"
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

    const body = encodeURIComponent(bodyLines.join("\n"));
    return `mailto:${CONFIG.emailTarget}?subject=${subject}&body=${body}`;
  }

  function initReservationForm() {
    const form = $("#reservationForm");
    const status = $("#reservationStatus");
    const emailBtn = $("#emailFallbackBtn");

    if (!form || !status) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!validateReservationForm()) {
        status.textContent = t("status_error");
        status.classList.remove("is-success");
        status.classList.add("is-danger");
        return;
      }

      const payload = getReservationPayload();
      const message = buildWhatsappMessage(payload);
      const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${message}`;

      status.textContent = t("status_ok_whatsapp");
      status.classList.remove("is-danger");
      status.classList.add("is-success");

      window.open(url, "_blank", "noopener,noreferrer");
    });

    if (emailBtn) {
      emailBtn.addEventListener("click", () => {
        if (!validateReservationForm()) {
          status.textContent = t("status_error");
          status.classList.remove("is-success");
          status.classList.add("is-danger");
          return;
        }

        const payload = getReservationPayload();
        const mailto = buildMailto(payload);

        status.textContent = t("status_ok_email");
        status.classList.remove("is-danger");
        status.classList.add("is-success");

        window.location.href = mailto;
      });
    }
  }

  /* ==========================================================================
     12) SCROLL PROGRESS + BACK TO TOP
     ========================================================================== */
  function initScrollUI() {
    const progress = $("#scrollProgress");
    const backBtn = $("#backToTopBtn");

    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;

      if (progress) progress.style.width = `${pct}%`;

      if (backBtn) {
        backBtn.classList.toggle("is-visible", doc.scrollTop > 480);
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    update();

    if (backBtn) {
      backBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  /* ==========================================================================
     13) CURSOR GLOW PARALLAX
     ========================================================================== */
  function initCursorGlow() {
    const glow = $("#cursorGlow");
    if (!glow) return;

    const onMove = (e) => {
      glow.style.transform = `translate(${e.clientX - 140}px, ${e.clientY - 140}px)`;
    };

    window.addEventListener("mousemove", onMove);
  }

  /* ==========================================================================
     14) QUICK RESERVE + NAV SHORTCUTS
     ========================================================================== */
  function initQuickActions() {
    const quickReserveBtn = $("#quickReserveBtn");
    if (quickReserveBtn) {
      quickReserveBtn.addEventListener("click", () => {
        const target = $("#reservation");
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  /* ==========================================================================
     15) LANGUAGE SWITCH
     ========================================================================== */
  function initLanguageSwitch() {
    const switchEl = $("#langSwitch");
    if (!switchEl) return;

    switchEl.value = "nl";
    applyLanguage("nl");

    switchEl.addEventListener("change", () => {
      applyLanguage(switchEl.value);
    });
  }

  /* ==========================================================================
     16) YEAR FOOTER
     ========================================================================== */
  function setCurrentYear() {
    const year = $("#year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  /* ==========================================================================
     17) LOADER SAFETY
     ========================================================================== */
  function hideBootLoader() {
    const boot = $("#bootLoader");
    if (!boot) return;
    boot.classList.add("hide");
  }

  function initLoaderSafety() {
    hideBootLoader();
    window.addEventListener("load", hideBootLoader);
    setTimeout(hideBootLoader, 2200);
  }

  /* ==========================================================================
     18) FAQ ENHANCEMENT (single-open mode optional)
     ========================================================================== */
  function initFaqBehavior() {
    const faqs = $$(".faq-item");
    if (!faqs.length) return;

    faqs.forEach((faq) => {
      faq.addEventListener("toggle", () => {
        if (!faq.open) return;
        faqs.forEach((other) => {
          if (other !== faq) other.open = false;
        });
      });
    });
  }

  /* ==========================================================================
     19) HERO / TESTIMONIAL VISIBILITY PAUSE
     ========================================================================== */
  function initVisibilityPause() {
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
     20) INIT
     ========================================================================== */
  async function init() {
    initLoaderSafety();

    initLanguageSwitch();
    initMobileNav();
    initQuickActions();

    await prepareHeroSlides();
    initHero();

    renderCategoryChips();
    renderMenuGrid();
    initMenuSearch();

    initTestimonials();
    initGalleryLightbox();

    initReservationForm();
    initFaqBehavior();

    createRevealObserver();
    initScrollUI();
    initCursorGlow();
    initVisibilityPause();

    patchAllImageFallbacks();
    setCurrentYear();

    hideBootLoader();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
