/* ==========================================================================
   DELHI DARBAAR HILVERSUM - PREMIUM JAVASCRIPT
   Table of Contents:
   1. Custom Cursor Glow
   2. Header Scroll Effect
   3. Mobile Menu Toggle
   4. Scroll Reveal Animations (Intersection Observer)
   5. 3D Tilt Effect on Cards
   6. Menu Category Filtering
========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  
  /* =========================================
     1. CUSTOM CURSOR GLOW
  ========================================= */
  const cursorGlow = document.getElementById("cursorGlow");
  
  if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener("mousemove", (e) => {
      // Moves the glow orb exactly to the cursor position
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    });
  } else if (cursorGlow) {
    // Hide custom cursor glow on mobile/touch devices
    cursorGlow.style.display = "none";
  }

  /* =========================================
     2. HEADER SCROLL EFFECT
  ========================================= */
  const header = document.getElementById("siteHeader");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  /* =========================================
     3. MOBILE MENU TOGGLE
  ========================================= */
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileNavLinks = document.querySelectorAll("[data-mobile-nav]");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !isExpanded);
    });

    // Close menu when a link is clicked
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* =========================================
     4. SCROLL REVEAL ANIMATIONS
  ========================================= */
  const revealElements = document.querySelectorAll(".reveal");

  const revealOptions = {
    root: null,
    rootMargin: "0px 0px -100px 0px", // Trigger slightly before it comes into view
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, revealOptions);

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });

  /* =========================================
     5. 3D TILT EFFECT
  ========================================= */
  const tiltElements = document.querySelectorAll(".tilt");

  // Only apply tilt on devices with a mouse
  if (window.matchMedia("(pointer: fine)").matches) {
    tiltElements.forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate rotation (max 10 degrees)
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        
        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });
      
      el.addEventListener("mouseenter", () => {
        el.style.transition = "none"; // Remove transition for instant tracking
      });
      
      el.addEventListener("mouseleave", () => {
        el.style.transition = "transform 0.5s ease"; // Smooth snap back
        el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      });
    });
  }

  /* =========================================
     6. MENU CATEGORY FILTERING
  ========================================= */
  const filterChips = document.querySelectorAll(".chip");
  const dishCards = document.querySelectorAll(".dish-card");

  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      // 1. Remove active class from all chips
      filterChips.forEach((c) => c.classList.remove("active"));
      
      // 2. Add active class to clicked chip
      chip.classList.add("active");
      
      // 3. Get filter value
      const filterValue = chip.getAttribute("data-filter");
      
      // 4. Filter dishes
      dishCards.forEach((card) => {
        const categories = card.getAttribute("data-category").split(" ");
        
        if (filterValue === "all" || categories.includes(filterValue)) {
          card.style.display = "block";
          // Small timeout to allow display:block to apply before changing opacity
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0) scale(1)";
          }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(20px) scale(0.95)";
          // Wait for fade out transition before hiding completely
          setTimeout(() => {
            card.style.display = "none";
          }, 300);
        }
      });
      
      // Re-trigger scroll reveals for newly shown items
      setTimeout(() => {
        window.dispatchEvent(new Event("scroll"));
      }, 350);
    });
  });

});
