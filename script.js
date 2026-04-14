:root{
  --bg:#0c0e13;--bg2:#141925;--gold:#d4af37;--orange:#e37014;--text:#f4f7ff;--muted:#b9c2d6;--line:rgba(255,255,255,.13)
}
*{box-sizing:border-box}
body{margin:0;font-family:Inter,sans-serif;background:var(--bg);color:var(--text)}
h1,h2{font-family:Cinzel,serif;color:var(--gold)}
.container{width:min(1180px,calc(100% - 2rem));margin:auto}
.section{padding:80px 0;border-top:1px solid rgba(212,175,55,.18)}
.dark{background:var(--bg2)}
.kicker{color:var(--orange);text-transform:uppercase;letter-spacing:.22em;font-size:11px}
.loader{position:fixed;inset:0;background:#080a0f;display:grid;place-items:center;z-index:9999;transition:.4s}
.loader.hide{opacity:0;pointer-events:none}
.ring{width:64px;height:64px;border:3px solid rgba(255,255,255,.2);border-top-color:var(--gold);border-radius:50%;animation:spin 1s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}

.topbar{background:#0f1320;border-bottom:1px solid var(--line);font-size:13px}
.topbar-inner{height:38px;display:flex;justify-content:space-between;align-items:center}

.nav-wrap{position:sticky;top:0;z-index:50;background:rgba(12,14,19,.8);backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}
.nav{height:78px;display:flex;justify-content:space-between;align-items:center;gap:12px}
.brand{display:flex;align-items:center;gap:10px;font-weight:700;color:var(--gold)}
.logo{width:42px;height:42px;border-radius:8px;object-fit:cover;border:1px solid rgba(212,175,55,.4)}
.nav-links{display:flex;gap:16px;list-style:none}
.nav-links a{color:#fff}
.nav-links a:hover{color:var(--orange)}
.menu-toggle{display:none}
.lang-switch{background:#111827;color:#fff;border:1px solid var(--line);padding:8px;border-radius:8px}

.hero{position:relative;min-height:88vh;overflow:hidden}
.hero-slider,.hero-slide{position:absolute;inset:0}
.hero-slide{opacity:0;transition:.9s;background-size:cover;background-position:center}
.hero-slide.active{opacity:1}
.hero-overlay{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,.5),var(--bg))}
.hero-content{position:relative;z-index:2;min-height:88vh;display:flex;flex-direction:column;justify-content:center}
.hero h1{font-size:clamp(40px,8vw,96px);line-height:.95;max-width:900px}
.hero-buttons{display:flex;gap:12px;flex-wrap:wrap;margin-top:18px}

.btn{padding:11px 16px;border-radius:10px;border:1px solid transparent;font-weight:700;cursor:pointer}
.btn-primary{background:var(--orange);color:#fff}
.btn-outline{border-color:var(--gold);color:var(--gold)}

.two-col{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.card{border:1px solid var(--line);padding:20px;border-radius:14px;background:linear-gradient(160deg,#171c29,#111520)}
.story-image img{width:100%;height:100%;min-height:280px;object-fit:cover;border-radius:14px;border:1px solid var(--line)}

.section-head{display:flex;justify-content:space-between;gap:10px;align-items:end;flex-wrap:wrap}
.search{padding:10px 12px;border-radius:10px;border:1px solid var(--line);background:#111726;color:#fff}
.menu-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-top:15px}
.menu-card{border:1px solid var(--line);border-radius:12px;overflow:hidden;background:#161c29}
.menu-card img{width:100%;height:170px;object-fit:cover}
.menu-card .body{padding:12px}
.menu-card h3{margin:0 0 6px;font-size:20px}
.price{color:var(--gold);font-weight:700}

.gallery-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
.gallery-grid img{width:100%;height:200px;object-fit:cover;border-radius:10px;border:1px solid var(--line);transition:.35s}
.gallery-grid img:hover{transform:scale(1.03)}

.reservation-form{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.reservation-form textarea,.reservation-form button{grid-column:1/-1}
input,select,textarea{padding:11px;border-radius:10px;border:1px solid var(--line);background:#111726;color:#fff}
.footer{padding:28px 0;border-top:1px solid var(--line);background:#090b10;color:#aab3c8}

.reveal{opacity:0;transform:translateY(16px);transition:.6s}
.reveal.show{opacity:1;transform:none}

@media(max-width:980px){
  .two-col,.menu-grid,.gallery-grid,.reservation-form{grid-template-columns:1fr 1fr}
}
@media(max-width:700px){
  .menu-toggle{display:block;background:none;border:1px solid var(--line);color:#fff;padding:8px;border-radius:8px}
  .nav-links{display:none;position:absolute;top:78px;left:0;right:0;background:#101520;padding:12px;flex-direction:column}
  .nav-links.show{display:flex}
  .two-col,.menu-grid,.gallery-grid,.reservation-form{grid-template-columns:1fr}
}
