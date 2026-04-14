:root{
  --bg:#0b0d12;
  --bg2:#121723;
  --panel:#171d2a;
  --line:rgba(255,255,255,.13);
  --text:#f5f7ff;
  --muted:#b9c3db;
  --gold:#d4af37;
  --orange:#e37014;
  --success:#19c37d;
  --danger:#ff5d5d;
  --radius:14px;
  --shadow:0 14px 40px rgba(0,0,0,.34);
}

*{box-sizing:border-box}
html,body{margin:0;padding:0}
html{scroll-behavior:smooth}
body{
  font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;
  color:var(--text);
  background:var(--bg);
  line-height:1.5;
  overflow-x:hidden;
}
h1,h2,h3{font-family:Cinzel,serif;color:var(--gold);margin:.2rem 0 .8rem}
p{color:var(--muted)}
a{text-decoration:none;color:inherit}
img{max-width:100%;display:block}
.container{width:min(1220px,calc(100% - 2rem));margin-inline:auto}

/* Loader */
.site-loader{
  position:fixed;inset:0;z-index:9999;background:#090b10;
  display:grid;place-items:center;transition:.45s ease;
}
.site-loader.is-hidden{opacity:0;pointer-events:none}
.loader-core{display:grid;place-items:center;gap:12px}
.loader-ring{
  width:72px;height:72px;border-radius:50%;
  border:3px solid rgba(255,255,255,.16);
  border-top-color:var(--gold);
  animation:spin 1s linear infinite;
}
@keyframes spin{to{transform:rotate(360deg)}}

/* Ambient */
.ambient{position:fixed;inset:0;pointer-events:none;z-index:-1;overflow:hidden}
.orb{
  position:absolute;border-radius:999px;filter:blur(32px);opacity:.3;
  animation:float 10s ease-in-out infinite;
}
.orb-a{width:320px;height:320px;background:#d4af37;top:-100px;left:-70px}
.orb-b{width:300px;height:300px;background:#4a7cff;right:-90px;top:22%}
.orb-c{width:260px;height:260px;background:#e37014;left:32%;bottom:-120px}
@keyframes float{
  0%,100%{transform:translate(0,0)}
  50%{transform:translate(12px,-16px)}
}
.grid-mask{
  position:absolute;inset:0;
  background-image:
    linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
  background-size:28px 28px;
  mask-image:radial-gradient(circle at center, black, transparent 75%);
}

/* Topbar */
.topbar{background:#0f131d;border-bottom:1px solid var(--line)}
.topbar-inner{
  min-height:40px;display:flex;justify-content:space-between;align-items:center;
  gap:10px;font-size:12px;color:#d5ddf0;flex-wrap:wrap;padding:6px 0;
}
.topbar-left{display:flex;gap:14px;flex-wrap:wrap}

/* Header/Nav */
.header{
  position:sticky;top:0;z-index:100;
  backdrop-filter:blur(8px);
  background:rgba(11,13,18,.78);
  border-bottom:1px solid rgba(212,175,55,.2);
}
.nav{height:78px;display:flex;align-items:center;justify-content:space-between;gap:12px}
.brand{display:flex;align-items:center;gap:10px}
.brand-logo{
  width:44px;height:44px;border-radius:10px;object-fit:cover;
  border:1px solid rgba(212,175,55,.45);
  background:#0f1420;
}
.brand-text{
  letter-spacing:.12em;text-transform:uppercase;font-weight:800;
  font-size:13px;color:var(--gold);
}
.menu-toggle{
  display:none;background:none;border:1px solid var(--line);color:#fff;
  width:42px;height:42px;border-radius:10px;font-size:20px;
}
.nav-links{display:flex;list-style:none;gap:16px;padding:0;margin:0}
.nav-links a{font-weight:600;color:#edf2ff}
.nav-links a:hover{color:var(--orange)}
.nav-actions{display:flex;align-items:center;gap:10px}
.lang-switch{
  background:#111726;color:#fff;border:1px solid var(--line);border-radius:10px;
  padding:8px 10px;font-weight:600;
}

/* Buttons */
.btn{
  border:1px solid transparent;background:transparent;color:#fff;
  padding:11px 16px;border-radius:10px;cursor:pointer;
  font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;
  transition:.2s ease;
}
.btn:hover{transform:translateY(-1px)}
.btn-primary{background:linear-gradient(130deg,#f0913a,#e37014);border-color:#e37014}
.btn-outline{border-color:var(--gold);color:var(--gold)}
.btn-ghost{border-color:rgba(255,255,255,.32)}

/* Sections */
.section{padding:84px 0;border-top:1px solid rgba(212,175,55,.16)}
.section-bleed{border-top:none}
.section-dark{background:linear-gradient(180deg,#111622,#0d1119)}
.kicker{
  font-size:11px;letter-spacing:.24em;text-transform:uppercase;
  color:var(--orange);font-weight:800;
}

/* Hero */
.hero{position:relative;min-height:88vh;overflow:hidden}
.hero-slides,.hero-slide{position:absolute;inset:0}
.hero-slide{
  opacity:0;transition:opacity .9s ease;background-size:cover;background-position:center;
  transform:scale(1.02);
}
.hero-slide.is-active{opacity:1}
.hero-overlay{
  position:absolute;inset:0;
  background:
    radial-gradient(circle at 16% 20%, rgba(212,175,55,.22), transparent 42%),
    radial-gradient(circle at 84% 80%, rgba(227,112,20,.16), transparent 38%),
    linear-gradient(to bottom, rgba(0,0,0,.55), #0b0d12 86%);
}
.hero-content{
  position:relative;z-index:2;min-height:88vh;display:flex;flex-direction:column;justify-content:center;
}
.hero h1{font-size:clamp(40px,8vw,98px);line-height:.92;max-width:900px}
.hero-sub{max-width:720px}
.hero-cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:14px}
.hero-badges{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px}
.hero-badges span{
  border:1px solid rgba(255,255,255,.2);background:rgba(15,20,30,.5);
  padding:7px 12px;border-radius:999px;font-size:12px;color:#d6def2;
}

/* Panels */
.panel{
  background:linear-gradient(160deg,#181f2d,#111722);
  border:1px solid var(--line);border-radius:var(--radius);padding:20px;
  box-shadow:var(--shadow);
}

/* Story */
.story-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:16px}
.feature-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}
.feature-card{
  border:1px solid var(--line);border-radius:12px;padding:12px;
  background:rgba(255,255,255,.02)
}
.feature-card h3{font-size:17px;margin:0 0 .3rem}
.feature-card p{font-size:14px;margin:0}
.story-media{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.story-media img{
  border-radius:12px;border:1px solid var(--line);
  width:100%;height:100%;min-height:170px;object-fit:cover
}
.story-media img:first-child{grid-column:span 2;min-height:250px}

/* Head */
.section-head{
  display:flex;justify-content:space-between;align-items:end;gap:12px;flex-wrap:wrap
}
.search-input{
  background:#111726;border:1px solid var(--line);color:#fff;
  border-radius:10px;padding:10px 12px;min-width:240px;
}
.search-input:focus{outline:none;border-color:var(--gold)}

/* Chips */
.chips{display:flex;gap:8px;flex-wrap:wrap;margin:14px 0}
.chip{
  border:1px solid var(--line);background:#171d2a;color:#d5ddef;
  padding:8px 12px;border-radius:999px;font-size:12px;cursor:pointer;
}
.chip.is-active{
  border-color:var(--gold);color:var(--gold);background:rgba(212,175,55,.1)
}

/* Menu cards */
.menu-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}
.menu-card{
  background:#171d2a;border:1px solid var(--line);border-radius:12px;overflow:hidden;
  transition:.22s ease;
}
.menu-card:hover{transform:translateY(-3px)}
.menu-card img{width:100%;height:175px;object-fit:cover;background:#0e1320}
.menu-body{padding:12px}
.menu-row{display:flex;justify-content:space-between;gap:10px;align-items:start}
.menu-row h3{margin:0;font-size:20px}
.price{color:var(--gold);font-weight:800}
.menu-text{margin:7px 0 8px;font-size:14px}
.menu-meta{font-size:12px;color:#d2daf0}

/* Gallery */
.gallery-grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:10px}
.gallery-grid figure{margin:0;border-radius:12px;overflow:hidden;border:1px solid var(--line);cursor:pointer}
.gallery-grid figure:first-child{grid-row:span 2}
.gallery-grid img{width:100%;height:100%;min-height:190px;object-fit:cover;transition:.4s}
.gallery-grid figure:hover img{transform:scale(1.05)}

/* Reservation */
.reservation-wrap{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.contact-points{padding-left:18px;color:#d0d8ec}
.contact-points li{margin:6px 0}
.reservation-form{
  display:grid;grid-template-columns:1fr 1fr;gap:10px
}
.field{display:flex;flex-direction:column;gap:6px}
.field-full{grid-column:1/-1}
.field label{font-size:12px;color:#dce3f6}
.field input,.field select,.field textarea{
  background:#111827;border:1px solid var(--line);color:#fff;
  border-radius:10px;padding:10px 12px;font:inherit;
}
.field input:focus,.field select:focus,.field textarea:focus{
  outline:none;border-color:var(--gold)
}
.error{min-height:16px;color:var(--danger);font-size:12px}
.form-actions{display:flex;gap:10px;flex-wrap:wrap}
.form-status{font-weight:600}

/* Contact */
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}

/* Footer */
.footer{padding:24px 0;border-top:1px solid rgba(212,175,55,.2);background:#090c12}
.footer-inner{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;color:#aab4cc}

/* Lightbox */
.lightbox{
  position:fixed;inset:0;background:rgba(0,0,0,.88);z-index:140;
  display:none;place-items:center;padding:20px;
}
.lightbox.is-open{display:grid}
.lightbox img{
  max-width:min(1100px,92vw);max-height:84vh;border-radius:12px;border:1px solid rgba(255,255,255,.22)
}
.lightbox-close{
  position:absolute;top:14px;right:14px;width:40px;height:40px;border-radius:10px;
  border:1px solid var(--line);background:#111722;color:#fff;cursor:pointer;
}

/* Reveal */
.reveal{opacity:0;transform:translateY(16px);transition:.6s ease}
.reveal.is-visible{opacity:1;transform:none}

/* Responsive */
@media (max-width:1080px){
  .menu-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .story-grid,.reservation-wrap,.contact-grid{grid-template-columns:1fr}
}
@media (max-width:760px){
  .menu-toggle{display:block}
  .nav-links{
    display:none;position:absolute;left:0;right:0;top:78px;
    flex-direction:column;gap:12px;background:#0f1522;padding:14px 1rem;border-bottom:1px solid var(--line)
  }
  .nav-links.is-open{display:flex}
  .gallery-grid,.feature-grid,.reservation-form,.menu-grid{grid-template-columns:1fr}
  .gallery-grid figure:first-child{grid-row:auto}
  .topbar-right{display:none}
}
