(() => {
  "use strict";

  const CONFIG = {
    projectBase: "/Delhi-darbar-Final-",
    fallbackImage: "/Delhi-darbar-Final-/fallback.jpg",
    whatsappNumber: "31613533612",
    emailTarget: "info@delhidarbaar.nl",
    heroInterval: 5200,
    testimonialInterval: 5000
  };

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const safe = (v) => String(v ?? "").trim();

  const debounce = (fn, wait = 150) => {
    let t = null;
    return (...a) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...a), wait);
    };
  };

  const DATA = window.DELHI_DARBAAR_DATA || { meta: {}, categories: [], items: [] };

  const IMAGE_MAP = {
    hero1: `${CONFIG.projectBase}/hero-1.jpg`,
    hero2: `${CONFIG.projectBase}/hero-2.jpg`,
    hero3: `${CONFIG.projectBase}/hero-3.jpg`,
    gallery1: `${CONFIG.projectBase}/gallery-1.jpg`,
    gallery2: `${CONFIG.projectBase}/gallery-2.jpg`,
    gallery3: `${CONFIG.projectBase}/gallery-3.jpg`,
    gallery4: `${CONFIG.projectBase}/gallery-4.jpg`,
    dish1: `${CONFIG.projectBase}/dish-1.jpg`,
    dish2: `${CONFIG.projectBase}/dish-2.jpg`,
    dish3: `${CONFIG.projectBase}/dish-3.jpg`,
    dish4: `${CONFIG.projectBase}/dish-4.jpg`
  };

  let currentLang = (DATA.meta && DATA.meta.localeDefault) || "nl";
  let activeCategory = "all";
  let menuSearch = "";

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
      parallax_title: "Royal Flavors, Modern Elegance",
      parallax_text: "Een culinaire reis van India naar Hilversum, met passie bereid.",
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
      menu_empty: "Geen gerechten gevonden."
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
      hero_sub: "Traditional recipes, rich spices and warm hospitality in the heart of Hilversum.",
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
      parallax_title: "Royal Flavors, Modern Elegance",
      parallax_text: "A culinary journey from India to Hilversum, crafted with passion.",
      res_kicker: "Reservation",
      res_title: "Reservation System",
      res_text: "Fill your details. After submit, WhatsApp opens with reservation details.",
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
      menu_empty: "No dishes found."
    }
  };

  const t = (k) => (I18N[currentLang] && I18N[currentLang][k]) ? I18N[currentLang][k] : k;

  function setTextIf(id, value) {
    const el = document.getElementById(id);
    if (el && value) el.textContent = value;
  }

  function patchStaticNotices() {
    const n = DATA.meta?.notices || {};
    setTextIf("openHoursText", (n.openHours && (n.openHours[currentLang] || n.openHours.nl)) || "");
    setTextIf("minOrderText", (n.minDeliveryOrder && (n.minDeliveryOrder[currentLang] || n.minDeliveryOrder.nl)) || "");
    setTextIf("onlineOrderNoteText", (n.onlineOrderNote && (n.onlineOrderNote[currentLang] || n.onlineOrderNote.nl)) || "");
  }

  function applyLanguage(lang) {
    currentLang = I18N[lang] ? lang : "nl";
    document.documentElement.lang = currentLang;

    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });

    const search = $("#menuSearchInput");
    if (search) search.placeholder = t("search_placeholder");

    patchStaticNotices();
    renderCategories();
    renderMenu();
    renderTestimonials();
  }

  function imgByKey(key) {
    return IMAGE_MAP[key] || CONFIG.fallbackImage;
  }

  function setStaticImages() {
    const heroA = $("#heroA");
    const heroB = $("#heroB");
    const heroC = $("#heroC");
    if (heroA) heroA.style.backgroundImage = `url('${imgByKey("hero1")}')`;
    if (heroB) heroB.style.backgroundImage = `url('${imgByKey("hero2")}')`;
    if (heroC) heroC.style.backgroundImage = `url('${imgByKey("hero3")}')`;

    const map = [
      ["storyImg1", "gallery1"], ["storyImg2", "gallery2"], ["storyImg3", "gallery3"],
      ["galleryImg1", "gallery1"], ["galleryImg2", "gallery2"], ["galleryImg3", "gallery3"], ["galleryImg4", "gallery4"]
    ];
    map.forEach(([id, key]) => {
      const el = document.getElementById(id);
      if (el) el.src = imgByKey(key);
    });
  }

  function attachFallbackToAllImages() {
    $$("img").forEach((img) => {
      img.addEventListener("error", () => {
        img.onerror = null;
        img.src = CONFIG.fallbackImage;
      });
    });
  }

  function getCategories() {
    return DATA.categories || [];
  }

  function getItems() {
    return DATA.items || [];
  }

  function displayCategoryLabel(catId) {
    const cat = getCategories().find((c) => c.id === catId);
    if (!cat) return catId;
    return (cat.label && (cat.label[currentLang] || cat.label.nl)) || catId;
  }

  function renderCategories() {
    const wrap = $("#categoryChips");
    if (!wrap) return;

    wrap.innerHTML = getCategories()
      .map((cat) => {
        const label = (cat.label && (cat.label[currentLang] || cat.label.nl)) || cat.id;
        return `<button class="category-chip ${cat.id === activeCategory ? "is-active" : ""}" data-cat="${cat.id}">${label}</button>`;
      })
      .join("");

    $$("[data-cat]", wrap).forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.getAttribute("data-cat") || "all";
        renderCategories();
        renderMenu();
      });
    });
  }

  function formatPrice(v) {
    const currency = DATA.meta?.currency || "€";
    return `${currency}${Number(v).toFixed(2)}`;
  }

  function spiceLabel(level = 0) {
    return level > 0 ? "🌶️".repeat(level) : "Mild";
  }

  function filteredItems() {
    return getItems().filter((item) => {
      const inCat = activeCategory === "all" || item.category === activeCategory;
      const text = `${item.name?.nl || ""} ${item.name?.en || ""} ${item.description?.nl || ""} ${item.description?.en || ""} ${item.category}`.toLowerCase();
      const inSearch = text.includes(menuSearch.toLowerCase());
      return inCat && inSearch;
    });
  }

  function renderMenu() {
    const grid = $("#menuGrid");
    if (!grid) return;

    const list = filteredItems();

    if (!list.length) {
      grid.innerHTML = `<article class="menu-card"><div class="menu-body"><h3>${t("menu_empty")}</h3></div></article>`;
      return;
    }

    grid.innerHTML = list
      .map((item) => {
        const name = (item.name && (item.name[currentLang] || item.name.nl)) || "-";
        const desc = (item.description && (item.description[currentLang] || item.description.nl)) || "";
        const catLabel = displayCategoryLabel(item.category);
        const image = imgByKey(item.imageKey);

        return `
          <article class="menu-card reveal">
            <div class="menu-media">
              <img src="${image}" alt="${name}" onerror="this.onerror=null;this.src='${CONFIG.fallbackImage}'" />
              <span class="menu-badge">${catLabel}</span>
            </div>
            <div class="menu-body">
              <div class="menu-row">
                <h3>${name}</h3>
                <span class="menu-price">${formatPrice(item.price)}</span>
              </div>
              <p class="menu-desc">${desc}</p>
              <p class="menu-meta">${spiceLabel(item.spicy)}</p>
            </div>
          </article>
        `;
      })
      .join("");

    observeReveal();
  }

  function initSearch() {
    const input = $("#menuSearchInput");
    if (!input) return;
    input.addEventListener("input", debounce((e) => {
      menuSearch = safe(e.target.value);
      renderMenu();
    }, 120));
  }

  const TESTIMONIALS = {
    nl: [
      { text: "Beste butter chicken die ik in Nederland heb geproefd. Perfecte balans.", author: "Aarav M." },
      { text: "Elegante sfeer, snelle service en echt authentieke smaken.", author: "Sofia K." },
      { text: "Ideaal voor familie-etentjes en speciale gelegenheden.", author: "Luca D." }
    ],
    en: [
      { text: "Best butter chicken I’ve tasted in the Netherlands. Perfect balance.", author: "Aarav M." },
      { text: "Elegant ambience, fast service, and authentic flavors.", author: "Sofia K." },
      { text: "Ideal for family dinners and special occasions.", author: "Luca D." }
    ]
  };

  let heroIndex = 0;
  let heroTimer = null;
  let testiIndex = 0;
  let testiTimer = null;
  let revealObserver = null;

  function goHero(i) {
    const slides = $$(".hero-slide");
    if (!slides.length) return;
    slides.forEach((s) => s.classList.remove("is-active"));
    heroIndex = (i + slides.length) % slides.length;
    slides[heroIndex].classList.add("is-active");
  }

  function initHero() {
    const hero = $(".hero-section");
    if (!hero) return;

    const next = () => goHero(heroIndex + 1);
    const start = () => {
      stop();
      heroTimer = setInterval(next, CONFIG.heroInterval);
    };
    const stop = () => {
      if (heroTimer) clearInterval(heroTimer);
      heroTimer = null;
    };

    hero.addEventListener("mouseenter", stop);
    hero.addEventListener("mouseleave", start);

    const down = $("#heroDownBtn");
    if (down) {
      down.addEventListener("click", () => {
        const sec = $("#story");
        if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    start();
  }

  function renderTestimonials() {
    const track = $("#testimonialTrack");
    const dots = $("#testimonialDots");
    if (!track || !dots) return;

    const list = TESTIMONIALS[currentLang] || TESTIMONIALS.nl;
    track.innerHTML = list
      .map((r) => `
        <article class="testimonial-card">
          <div class="stars">★★★★★</div>
          <p>${r.text}</p>
          <small>— ${r.author}</small>
        </article>
      `)
      .join("");

    dots.innerHTML = list
      .map((_, i) => `<button class="testimonial-dot ${i === testiIndex ? "is-active" : ""}" data-dot="${i}" aria-label="review ${i + 1}"></button>`)
      .join("");

    $$("[data-dot]", dots).forEach((d) => {
      d.addEventListener("click", () => {
        testiIndex = Number(d.getAttribute("data-dot") || 0);
        updateTestimonials();
      });
    });

    updateTestimonials();
  }

  function updateTestimonials() {
    const track = $("#testimonialTrack");
    if (!track) return;
    track.style.transform = `translateX(-${testiIndex * 100}%)`;
    $$(".testimonial-dot").forEach((d, i) => d.classList.toggle("is-active", i === testiIndex));
  }

  function initTestimonials() {
    const slider = $(".testimonial-slider");
    if (!slider) return;

    const start = () => {
      stop();
      testiTimer = setInterval(() => {
        const len = (TESTIMONIALS[currentLang] || TESTIMONIALS.nl).length;
        testiIndex = (testiIndex + 1) % len;
        updateTestimonials();
      }, CONFIG.testimonialInterval);
    };
    const stop = () => {
      if (testiTimer) clearInterval(testiTimer);
      testiTimer = null;
    };

    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", start);
    start();
  }

  function initLightbox() {
    const lb = $("#lightbox");
    const lbImg = $("#lightboxImage");
    const closeBtn = $("#lightboxClose");
    if (!lb || !lbImg || !closeBtn) return;

    $$("#galleryGrid img").forEach((img) => {
      img.addEventListener("click", () => {
        lbImg.src = img.src || CONFIG.fallbackImage;
        lb.classList.add("is-open");
        lb.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      });
    });

    const close = () => {
      lb.classList.remove("is-open");
      lb.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };

    closeBtn.addEventListener("click", close);
    lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lb.classList.contains("is-open")) close();
    });
  }

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
    const b = $("#quickReserveBtn");
    if (!b) return;
    b.addEventListener("click", () => {
      const r = $("#reservation");
      if (r) r.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

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

  function initFaq() {
    const items = $$(".faq-item");
    items.forEach((it) => {
      it.addEventListener("toggle", () => {
        if (!it.open) return;
        items.forEach((o) => { if (o !== it) o.open = false; });
      });
    });
  }

  function setError(id, msg = "") {
    const err = $(`[data-error-for="${id}"]`);
    const inp = $(`#${id}`);
    if (err) err.textContent = msg;
    if (inp) {
      inp.classList.remove("is-valid", "is-invalid");
      if (msg) inp.classList.add("is-invalid");
      else if (safe(inp.value)) inp.classList.add("is-valid");
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

  function formPayload() {
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

  function waText(d) {
    const lines = currentLang === "nl"
      ? [
          "Nieuwe reservering - Delhi Darbaar",
          `Naam: ${d.name}`, `E-mail: ${d.email}`, `Telefoon: ${d.phone}`,
          `Datum: ${d.date}`, `Tijd: ${d.time}`, `Gasten: ${d.guests}`,
          `Gelegenheid: ${d.occasion}`, `Opmerkingen: ${d.notes}`
        ]
      : [
          "New reservation - Delhi Darbaar",
          `Name: ${d.name}`, `Email: ${d.email}`, `Phone: ${d.phone}`,
          `Date: ${d.date}`, `Time: ${d.time}`, `Guests: ${d.guests}`,
          `Occasion: ${d.occasion}`, `Notes: ${d.notes}`
        ];
    return encodeURIComponent(lines.join("\n"));
  }

  function mailtoUrl(d) {
    const subject = encodeURIComponent(currentLang === "nl" ? "Nieuwe reservering" : "New reservation");
    const lines = currentLang === "nl"
      ? [
          `Naam: ${d.name}`, `E-mail: ${d.email}`, `Telefoon: ${d.phone}`,
          `Datum: ${d.date}`, `Tijd: ${d.time}`, `Gasten: ${d.guests}`,
          `Gelegenheid: ${d.occasion}`, `Opmerkingen: ${d.notes}`
        ]
      : [
          `Name: ${d.name}`, `Email: ${d.email}`, `Phone: ${d.phone}`,
          `Date: ${d.date}`, `Time: ${d.time}`, `Guests: ${d.guests}`,
          `Occasion: ${d.occasion}`, `Notes: ${d.notes}`
        ];
    const body = encodeURIComponent(lines.join("\n"));
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

      const d = formPayload();
      const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${waText(d)}`;
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
        const d = formPayload();
        window.location.href = mailtoUrl(d);
        status.textContent = t("status_ok_email");
        status.classList.remove("is-danger");
        status.classList.add("is-success");
      });
    }
  }

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
      topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }
  }

  function initCursorGlow() {
    const glow = $("#cursorGlow");
    if (!glow) return;
    window.addEventListener("mousemove", (e) => {
      glow.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
    });
  }

  function initLangSwitch() {
    const sw = $("#langSwitch");
    if (!sw) return;
    sw.value = currentLang;
    applyLanguage(currentLang);
    sw.addEventListener("change", () => applyLanguage(sw.value));
  }

  function initVisibilityHandling() {
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        if (heroTimer) clearInterval(heroTimer);
        if (testiTimer) clearInterval(testiTimer);
      } else {
        initHero();
        initTestimonials();
      }
    });
  }

  function setYear() {
    const y = $("#year");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  function hideBoot() {
    const b = $("#bootLoader");
    if (b) b.classList.add("hide");
  }

  function init() {
    hideBoot();

    setStaticImages();
    attachFallbackToAllImages();

    initLangSwitch();
    initMobileNav();
    initQuickReserve();

    renderCategories();
    renderMenu();
    initSearch();

    initHero();
    renderTestimonials();
    initTestimonials();

    initLightbox();
    initFaq();
    initForm();

    observeReveal();
    initScrollUI();
    initCursorGlow();
    initVisibilityHandling();

    setYear();
    hideBoot();
    window.addEventListener("load", hideBoot);
    setTimeout(hideBoot, 2200);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
