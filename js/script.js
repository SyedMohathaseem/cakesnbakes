/* ===========================
   CakesnBakes - Main Script
   =========================== */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Page Loader ----------
  const loader = document.querySelector('.page-loader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 600);
  });

  // ---------- Navbar Scroll Effect ----------
  const navbar = document.querySelector('.navbar');
  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar shrink on scroll
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }

    // Reveal animations
    revealOnScroll();
  });

  // ---------- Back to Top ----------
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ---------- Smooth Scroll for Navbar Links ----------
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });

        // Close mobile navbar
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      }
    });
  });

  // ---------- Active Nav Link ----------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Page-based active link for dedicated pages
  function setActiveNavForPage() {
    const pageMap = {
      'cakes.html': 'cakes.html',
      'brownies.html': 'brownies.html',
      'index.html': null  // handled by scroll
    };

    const activePage = pageMap[currentPage];
    if (activePage) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === activePage) {
          link.classList.add('active');
        }
      });
    }
  }

  // Scroll-based active link for index.html
  function updateActiveNav() {
    if (currentPage !== 'index.html' && currentPage !== '') return;

    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  setActiveNavForPage();
  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();

  // ---------- Scroll Reveal Animation ----------
  function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 120;

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add('active');
      }
    });
  }

  // Initial check for elements already in view
  revealOnScroll();

  // ---------- Product Cards Data ----------
  const cakes = [
    {
      name: 'Vanilla Engagement Cake',
      description: 'Elegant 2-tier white vanilla cake with pearl decorations, baby\'s breath, and red roses — perfect for engagements.',
      price: '₹1,000',
      image: 'img/IMG-20260112-WA0014.jpg'
    },
    {
      name: 'Chocolate Anniversary Cake',
      description: 'Stunning dark chocolate ganache cake with white cream, pearl sprinkles, and a "Happy Anniversary" topper.',
      price: '₹1,200',
      image: 'img/IMG-20260114-WA0002.jpg'
    },
    {
      name: 'Chocolate Truffle Cake',
      description: 'Rich square chocolate truffle cake with gold pearl accents, swirled chocolate piping, and a glossy finish.',
      price: '₹1,400',
      image: 'img/IMG-20260114-WA0004.jpg'
    },
    {
      name: 'Vanilla Birthday Cake',
      description: 'Beautiful white birthday cake with gold leaf accents, pearl decorations, and a fresh white rose topper.',
      price: '₹1,000',
      image: 'img/IMG-20260114-WA0006.jpg'
    },
    {
      name: 'Butterfly Birthday Cake',
      description: 'Gorgeous green & white 2-tier birthday cake with butterfly decorations, gold spheres, and baby\'s breath.',
      price: '₹1,000',
      image: 'img/IMG-20260114-WA0007.jpg'
    },
    {
      name: 'Pink Floral Engagement Cake',
      description: 'Stunning 2-tier pink ombré engagement cake with roses, golden butterflies, and peach floral accents.',
      price: '₹1,000',
      image: 'img/IMG-20260112-WA0015.jpg'
    },
    {
      name: 'Rose Engagement Cake',
      description: 'Exquisite 3-tier white engagement cake with deep red roses, baby\'s breath bouquets, and gold foil details.',
      price: '₹1,000',
      image: 'img/IMG-20260112-WA0016.jpg'
    },
    {
      name: 'Designer Birthday Cake',
      description: 'Premium pink & black designer cake with gold drip, macarons, and gold spheres — a showstopper!',
      price: '₹1,200',
      image: 'img/IMG-20260114-WA0005.jpg'
    },
    {
      name: 'Pink Bow Birthday Cake',
      description: 'Charming white cake with a beautiful pink bow, pearl details, and a "Happy Birthday" golden topper.',
      price: '₹1,000',
      image: 'img/IMG-20260114-WA0003.jpg'
    },
    {
      name: 'Rosette Engagement Cake',
      description: 'Pink buttercream rosette engagement cake with pearls, yellow roses, and red fondant lettering.',
      price: '₹1,000',
      image: 'img/IMG-20260112-WA0024.jpg'
    },
    {
      name: 'Congratulations Cake',
      description: 'Elegant 2-tier white cake with pink brush strokes, roses, pearl beads, and a custom topper.',
      price: '₹1,000',
      image: 'img/IMG-20260114-WA0001.jpg'
    },
    {
      name: 'Pearl Engagement Cake',
      description: 'Luxurious 3-tier white cake with pink peonies, pearl cascades, and a golden "Engaged" ring topper.',
      price: '₹1,000',
      image: 'img/IMG-20260112-WA0017.jpg'
    }
  ];

  const brownies = [
    {
      name: 'Nutella Brownie',
      description: 'Rich, fudgy Nutella brownie dripping with hazelnut chocolate goodness — irresistibly indulgent!',
      price: '₹1,400',
      image: 'img/1771153087995.png'
    },
    {
      name: 'Nutella & Biscoff Brownie',
      description: 'Loaded with creamy Nutella & crunchy Biscoff spread inside a deep cocoa batter — pure bliss.',
      price: '₹1,400',
      image: 'img/1771152907690.png'
    },
    {
      name: 'Triple Chocolate Brownie & Blondies',
      description: 'The ultimate indulgence — dark, milk, and white chocolate fused into fudgy brownies and golden blondies.',
      price: '₹1,400',
      image: 'img/1771152758090.png'
    }
  ];

  // ---------- Menu Category Data ----------
  const cakesMenu = [
    { name: 'Vanilla Cake', description: 'Classic vanilla sponge cake with smooth buttercream frosting.', price: '₹1,000', image: '' },
    { name: 'Strawberry Cake', description: 'Fresh strawberry flavoured cake with a fruity, sweet finish.', price: '₹1,000', image: '' },
    { name: 'Butterscotch Cake', description: 'Rich butterscotch cake with crunchy caramel praline topping.', price: '₹1,000', image: '' },
    { name: 'Black Currant Cake', description: 'Tangy black currant cake with a deep berry flavour.', price: '₹1,000', image: '' },
    { name: 'Chocolate Cake', description: 'Moist, rich chocolate cake for all chocolate lovers.', price: '₹1,200', image: '' },
    { name: 'Chocolate Truffle Cake', description: 'Indulgent chocolate truffle cake with a velvety ganache finish.', price: '₹1,400', image: '' },
    { name: 'Lotus Biscoff Cake', description: 'Creamy Lotus Biscoff cake with caramelised biscuit crumble.', price: '₹1,400', image: '' },
    { name: 'Nutella Cake', description: 'Heavenly Nutella hazelnut cake with a chocolatey spread layer.', price: '₹1,400', image: '' },
    { name: 'Blueberry Cake', description: 'Delicate blueberry cake with a burst of fresh berry flavour.', price: '₹1,000', image: '' }
  ];

  const cupCakes = [
    { name: 'Cup Cake', description: 'Freshly baked cup cakes available in multiple delicious varieties.', price: '₹30', image: '' }
  ];

  const jarCakes = [
    { name: 'Jar Cake', description: 'Layered jar cake with cream and sponge — perfect on the go!', price: '₹120', image: '' }
  ];

  const chocolates = [
    { name: 'Customised Chocolates', description: 'Beautifully customised chocolates for every occasion — perfect for gifting!', price: 'Starting from ₹130', image: '' }
  ];

  const mousseCup = [
    { name: 'Mousse Cup', description: 'Light, fluffy, and creamy mousse cups in irresistible flavours.', price: 'Starting from ₹40', image: '' }
  ];

  // ---------- Render Product Cards (with price + order button) ----------
  function createProductCard(item, delayClass) {
    const whatsappMsg = encodeURIComponent(`Hi, I want to order ${item.name} from CakesnBakes`);
    const whatsappLink = `https://wa.me/919597485022?text=${whatsappMsg}`;

    const imgHtml = item.image
      ? `<img src="${item.image}" alt="${item.name}" loading="lazy">`
      : `<div class="product-img-placeholder"><i class="fas fa-birthday-cake"></i></div>`;

    return `
      <div class="col-lg-4 col-md-6 mb-4 reveal ${delayClass}">
        <div class="product-card">
          <div class="product-img">
            ${imgHtml}
            <span class="price-badge">${item.price}</span>
          </div>
          <div class="product-body">
            <h5>${item.name}</h5>
            <p>${item.description}</p>
            <a href="${whatsappLink}" target="_blank" rel="noopener" class="btn-whatsapp">
              <i class="fab fa-whatsapp"></i> Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    `;
  }

  // ---------- Render Gallery Cards (image + name only, no price/order) ----------
  function createGalleryCard(item, delayClass) {
    return `
      <div class="col-lg-4 col-md-6 mb-4 reveal ${delayClass}">
        <div class="gallery-card">
          <div class="gallery-img">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
          </div>
          <div class="gallery-body">
            <h5>${item.name}</h5>
          </div>
        </div>
      </div>
    `;
  }

  // ---------- Home Page: Cakes product cards from cakesMenu ----------
  const homeCakesGrid = document.getElementById('home-cakes-grid');
  if (homeCakesGrid) {
    cakesMenu.forEach((cake, i) => {
      homeCakesGrid.innerHTML += createProductCard(cake, `reveal-delay-${(i % 5) + 1}`);
    });
  }

  // ---------- Home Page: Gallery cards ----------
  const galleryGrid = document.getElementById('gallery-grid');
  if (galleryGrid) {
    const homeLimit = 6;
    const cakesToShow = cakes.slice(0, homeLimit);
    cakesToShow.forEach((cake, i) => {
      galleryGrid.innerHTML += createGalleryCard(cake, `reveal-delay-${(i % 5) + 1}`);
    });
  }

  // ---------- Dedicated Pages ----------
  const allGalleryGrid = document.getElementById('all-gallery-grid');
  if (allGalleryGrid) {
    cakes.forEach((cake, i) => {
      allGalleryGrid.innerHTML += createGalleryCard(cake, `reveal-delay-${(i % 5) + 1}`);
    });
  }

  const allBrowniesGrid = document.getElementById('all-brownies-grid');
  if (allBrowniesGrid) {
    brownies.forEach((brownie, i) => {
      allBrowniesGrid.innerHTML += createProductCard(brownie, `reveal-delay-${(i % 5) + 1}`);
    });
  }

  // ---------- Menu Page: Render all categories ----------
  const menuCategories = [
    { id: 'cakes-menu-grid', data: cakesMenu },
    { id: 'cupcakes-grid', data: cupCakes },
    { id: 'jarcakes-grid', data: jarCakes },
    { id: 'chocolates-grid', data: chocolates },
    { id: 'mousse-grid', data: mousseCup }
  ];

  menuCategories.forEach(cat => {
    const grid = document.getElementById(cat.id);
    if (grid) {
      cat.data.forEach((item, i) => {
        grid.innerHTML += createProductCard(item, `reveal-delay-${(i % 5) + 1}`);
      });
    }
  });

  // Re-check reveals after dynamic content is added
  setTimeout(revealOnScroll, 100);

  // ---------- Year in Footer ----------
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---------- Testimonial Carousel ----------
  const testimonialTrack = document.getElementById('testimonialTrack');
  const testimonialDots = document.querySelectorAll('.testimonial-dot');
  const testimonialPrev = document.getElementById('testimonialPrev');
  const testimonialNext = document.getElementById('testimonialNext');

  if (testimonialTrack && testimonialDots.length > 0) {
    let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.testimonial-slide').length;
    let autoplayInterval;

    function goToSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      currentSlide = index;
      testimonialTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
      
      // Update dots
      testimonialDots.forEach(dot => dot.classList.remove('active'));
      testimonialDots[currentSlide].classList.add('active');
    }

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }

    function prevSlide() {
      goToSlide(currentSlide - 1);
    }

    // Autoplay
    function startAutoplay() {
      autoplayInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoplay() {
      clearInterval(autoplayInterval);
    }

    startAutoplay();

    // Pause on hover
    const carousel = document.getElementById('testimonialCarousel');
    if (carousel) {
      carousel.addEventListener('mouseenter', stopAutoplay);
      carousel.addEventListener('mouseleave', startAutoplay);
    }

    // Dot navigation
    testimonialDots.forEach(dot => {
      dot.addEventListener('click', () => {
        stopAutoplay();
        goToSlide(parseInt(dot.dataset.slide));
        startAutoplay();
      });
    });

    // Arrow navigation
    if (testimonialPrev) {
      testimonialPrev.addEventListener('click', () => {
        stopAutoplay();
        prevSlide();
        startAutoplay();
      });
    }

    if (testimonialNext) {
      testimonialNext.addEventListener('click', () => {
        stopAutoplay();
        nextSlide();
        startAutoplay();
      });
    }
  }
});
