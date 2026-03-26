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
      price: '₹1,050',
      image: 'img/1771153087995.png'
    },
    {
      name: 'Nutella & Biscoff Brownie',
      description: 'Loaded with creamy Nutella & crunchy Biscoff spread inside a deep cocoa batter — pure bliss.',
      price: '₹1,050',
      image: 'img/1771152907690.png'
    },
    {
      name: 'Triple Chocolate Brownie & Blondies',
      description: 'The ultimate indulgence — dark, milk, and white chocolate fused into fudgy brownies and golden blondies.',
      price: '₹1,050',
      image: 'img/1771152758090.png'
    }
  ];

  // ---------- Render Product Cards ----------
  function createProductCard(item, delayClass) {
    const whatsappMsg = encodeURIComponent(`Hi, I want to order ${item.name} from CakesnBakes`);
    const whatsappLink = `https://wa.me/919597485022?text=${whatsappMsg}`;

    return `
      <div class="col-lg-4 col-md-6 mb-4 reveal ${delayClass}">
        <div class="product-card">
          <div class="product-img">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
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

  // ---------- Home Page: Show limited cards + View All ----------
  const cakesGrid = document.getElementById('cakes-grid');
  if (cakesGrid) {
    const homeLimit = 3;
    const cakesToShow = cakes.slice(0, homeLimit);
    cakesToShow.forEach((cake, i) => {
      cakesGrid.innerHTML += createProductCard(cake, `reveal-delay-${(i % 5) + 1}`);
    });
    // Add "View All" button
    if (cakes.length > homeLimit) {
      cakesGrid.insertAdjacentHTML('afterend',
        `<div class="view-all-wrapper reveal reveal-delay-3">
           <a href="cakes.html" class="btn-view-all">View All Cakes <i class="fas fa-arrow-right"></i></a>
         </div>`
      );
    }
  }

  const browniesGrid = document.getElementById('brownies-grid');
  if (browniesGrid) {
    const homeLimit = 3;
    const browniesToShow = brownies.slice(0, homeLimit);
    browniesToShow.forEach((brownie, i) => {
      browniesGrid.innerHTML += createProductCard(brownie, `reveal-delay-${(i % 5) + 1}`);
    });
    // Add "View All" button
    if (brownies.length > homeLimit) {
      browniesGrid.insertAdjacentHTML('afterend',
        `<div class="view-all-wrapper reveal reveal-delay-3">
           <a href="brownies.html" class="btn-view-all">View All Brownies <i class="fas fa-arrow-right"></i></a>
         </div>`
      );
    }
  }

  // ---------- Dedicated Pages: Show all cards ----------
  const allCakesGrid = document.getElementById('all-cakes-grid');
  if (allCakesGrid) {
    cakes.forEach((cake, i) => {
      allCakesGrid.innerHTML += createProductCard(cake, `reveal-delay-${(i % 5) + 1}`);
    });
  }

  const allBrowniesGrid = document.getElementById('all-brownies-grid');
  if (allBrowniesGrid) {
    brownies.forEach((brownie, i) => {
      allBrowniesGrid.innerHTML += createProductCard(brownie, `reveal-delay-${(i % 5) + 1}`);
    });
  }

  // Re-check reveals after dynamic content is added
  setTimeout(revealOnScroll, 100);

  // ---------- Year in Footer ----------
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
