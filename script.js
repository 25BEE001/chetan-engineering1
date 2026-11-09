/* ============================================================
   Chetan Engineering Corporation – script.js
   Production-ready, vanilla JS, no external dependencies
   ============================================================ */

(function () {
  'use strict';

  /* ──────────────────────────────────────────────────────────
     1. Sticky Navbar Shadow on Scroll
  ────────────────────────────────────────────────────────── */
  const navbar = document.getElementById('navbar');
  const SCROLL_THRESHOLD = 60;

  function handleNavbarScroll() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  /* ──────────────────────────────────────────────────────────
     2. Mobile Hamburger Menu Toggle
  ────────────────────────────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  function toggleMobileMenu(open) {
    const isOpen = open !== undefined ? open : !hamburger.classList.contains('open');
    hamburger.classList.toggle('open', isOpen);
    mobileNav.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () { toggleMobileMenu(); });

    // Close on mobile nav link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { toggleMobileMenu(false); });
    });

    // Close on ESC
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        toggleMobileMenu(false);
      }
    });
  }

  /* ──────────────────────────────────────────────────────────
     3. Smooth Scroll for Anchor Links
  ────────────────────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const navH = navbar ? navbar.offsetHeight : 72;
      const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navH;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    });
  });

  /* ──────────────────────────────────────────────────────────
     4. Active Nav Link Highlighting on Scroll
  ────────────────────────────────────────────────────────── */
  const navLinks = document.querySelectorAll('#navbar .nav-links a[href^="#"], #mobile-nav .nav-links a[href^="#"]');
  const sections = Array.from(navLinks)
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(Boolean);

  function updateActiveNav() {
    const scrollPos = window.scrollY + (navbar ? navbar.offsetHeight : 72) + 10;
    let current = '';
    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        current = '#' + section.id;
      }
    });
    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === current);
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  /* ──────────────────────────────────────────────────────────
     5. Hero Animation on Load
  ────────────────────────────────────────────────────────── */
  const hero = document.getElementById('hero');
  if (hero) {
    setTimeout(function () { hero.classList.add('loaded'); }, 100);
  }

  /* ──────────────────────────────────────────────────────────
     6. Scroll-Triggered Fade-In (IntersectionObserver)
  ────────────────────────────────────────────────────────── */
  if ('IntersectionObserver' in window) {
    const fadeEls = document.querySelectorAll('.fade-in');
    const fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(function (el) { fadeObserver.observe(el); });
  } else {
    // Fallback: show all
    document.querySelectorAll('.fade-in').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ──────────────────────────────────────────────────────────
     7. Gallery Filter System
  ────────────────────────────────────────────────────────── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const filter = this.dataset.filter;

      // Update active button
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');

      // Show/hide items
      galleryItems.forEach(function (item) {
        const cats = (item.dataset.category || '').split(' ');
        const show = filter === 'all' || cats.includes(filter);

        if (show) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  /* ──────────────────────────────────────────────────────────
     8. Lightbox
  ────────────────────────────────────────────────────────── */
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbCaption = document.getElementById('lb-caption');
  const lbCounter = document.getElementById('lb-counter');
  const lbClose = document.getElementById('lb-close');
  const lbPrev = document.getElementById('lb-prev');
  const lbNext = document.getElementById('lb-next');

  let currentIndex = 0;
  let visibleItems = [];

  function getVisibleItems() {
    return Array.from(galleryItems).filter(function (item) {
      return !item.classList.contains('hidden');
    });
  }

  function openLightbox(index) {
    visibleItems = getVisibleItems();
    if (!visibleItems.length) return;
    currentIndex = Math.max(0, Math.min(index, visibleItems.length - 1));
    showLbImage(currentIndex);
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    if (lbImg) lbImg.src = '';
  }

  function showLbImage(index) {
    const item = visibleItems[index];
    if (!item) return;
    const img = item.querySelector('img');
    if (!img) return;
    if (lbImg) {
      lbImg.src = img.src;
      lbImg.alt = img.alt;
    }
    if (lbCaption) {
      const h4 = item.querySelector('.gallery-overlay-text h4');
      lbCaption.textContent = h4 ? h4.textContent : img.alt;
    }
    if (lbCounter) {
      lbCounter.textContent = (index + 1) + ' / ' + visibleItems.length;
    }
  }

  function showPrev() {
    visibleItems = getVisibleItems();
    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    showLbImage(currentIndex);
  }

  function showNext() {
    visibleItems = getVisibleItems();
    currentIndex = (currentIndex + 1) % visibleItems.length;
    showLbImage(currentIndex);
  }

  // Attach to gallery items
  galleryItems.forEach(function (item, idx) {
    item.addEventListener('click', function () {
      visibleItems = getVisibleItems();
      const visIdx = visibleItems.indexOf(item);
      openLightbox(visIdx >= 0 ? visIdx : 0);
    });
  });

  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbPrev)  lbPrev.addEventListener('click', showPrev);
  if (lbNext)  lbNext.addEventListener('click', showNext);

  // Click outside image to close
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', function (e) {
    if (!lightbox || !lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft')  showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

  // Touch swipe support
  if (lightbox) {
    var touchStartX = 0;
    var touchStartY = 0;
    lightbox.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].clientX;
      touchStartY = e.changedTouches[0].clientY;
    }, { passive: true });
    lightbox.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - touchStartX;
      var dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx < 0) showNext();
        else showPrev();
      }
    }, { passive: true });
  }

  /* ──────────────────────────────────────────────────────────
     9. Contact Form Validation
  ────────────────────────────────────────────────────────── */
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = validateForm();
      if (valid) {
        // Build mailto link
        var name    = document.getElementById('cf-name').value.trim();
        var phone   = document.getElementById('cf-phone').value.trim();
        var email   = document.getElementById('cf-email').value.trim();
        var product = document.getElementById('cf-product').value;
        var message = document.getElementById('cf-message').value.trim();

        var subject = encodeURIComponent('Enquiry from ' + name + ' – Chetan Engineering');
        var body = encodeURIComponent(
          'Name: ' + name + '\n' +
          'Phone: ' + phone + '\n' +
          'Email: ' + email + '\n' +
          'Product Interest: ' + product + '\n\n' +
          'Message:\n' + message
        );

        window.location.href = 'mailto:chetan_eng_corp@yahoo.com?subject=' + subject + '&body=' + body;

        // Show success
        var successEl = document.getElementById('form-success');
        if (successEl) {
          successEl.style.display = 'block';
          setTimeout(function () { successEl.style.display = 'none'; }, 6000);
        }
        contactForm.reset();
      }
    });

    // Live validation on blur
    contactForm.querySelectorAll('input, select, textarea').forEach(function (field) {
      field.addEventListener('blur', function () { validateField(this); });
      field.addEventListener('input', function () {
        if (this.classList.contains('error')) validateField(this);
      });
    });
  }

  function validateForm() {
    var fields = contactForm.querySelectorAll('[required]');
    var valid = true;
    fields.forEach(function (field) {
      if (!validateField(field)) valid = false;
    });
    return valid;
  }

  function validateField(field) {
    var errorEl = field.parentNode.querySelector('.field-error');
    var value = field.value.trim();
    var ok = true;
    var msg = '';

    if (field.hasAttribute('required') && !value) {
      ok = false;
      msg = 'This field is required.';
    } else if (field.type === 'email' && value) {
      var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(value)) {
        ok = false;
        msg = 'Please enter a valid email address.';
      }
    } else if (field.id === 'cf-phone' && value) {
      var phoneRe = /^[6-9]\d{9}$|^\+91\s?[6-9]\d{9}$|^\+\d{7,15}$/;
      if (!phoneRe.test(value.replace(/[\s\-()]/g, ''))) {
        ok = false;
        msg = 'Please enter a valid phone number.';
      }
    }

    field.classList.toggle('error', !ok);
    if (errorEl) {
      errorEl.textContent = msg;
      errorEl.style.display = ok ? 'none' : 'block';
    }
    return ok;
  }

  /* ──────────────────────────────────────────────────────────
     10. WhatsApp Click Tracking (console log / analytics hook)
  ────────────────────────────────────────────────────────── */
  document.querySelectorAll('a[href*="wa.me"]').forEach(function (link) {
    link.addEventListener('click', function () {
      // Fire analytics event if gtag is available
      if (typeof gtag === 'function') {
        gtag('event', 'whatsapp_click', {
          event_category: 'engagement',
          event_label: 'WhatsApp Button'
        });
      }
      console.log('[CEC] WhatsApp button clicked');
    });
  });

})();
