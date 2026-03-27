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
      'menu.html': 'menu.html',
      'gallery.html': 'gallery.html',
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

    const isMobile = window.innerWidth < 992;
    const scrollPos = window.scrollY + (isMobile ? 200 : 150);

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
      description: 'Pink freshcream rosette engagement cake with pearls, yellow roses, and red fondant lettering.',
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
    },
    {
      name: 'Elegant Custom Cake',
      description: 'A beautifully crafted custom cake for special celebrations.',
      price: '₹1,200',
      image: 'img/IMG-20260112-WA0025.jpg'
    },
    {
      name: 'Elegant Custom Cake',
      description: 'A beautifully crafted custom cake for special celebrations.',
      price: '₹1,200',
      image: 'img/IMG-20260112-WA0026.jpg'
    },
    {
      name: 'Elegant Custom Cake',
      description: 'A beautifully crafted custom cake for special celebrations.',
      price: '₹1,200',
      image: 'img/IMG-20260112-WA0027.jpg'
    },
    {
      name: 'Elegant Custom Cake',
      description: 'A beautifully crafted custom cake for special celebrations.',
      price: '₹1,200',
      image: 'img/IMG-20260112-WA0028.jpg'
    },
    {
      name: 'Elegant Custom Cake',
      description: 'A beautifully crafted custom cake for special celebrations.',
      price: '₹1,200',
      image: 'img/IMG-20260112-WA0029.jpg'
    },
    {
      name: 'Elegant Custom Cake',
      description: 'A beautifully crafted custom cake for special celebrations.',
      price: '₹1,200',
      image: 'img/IMG-20260112-WA0030.jpg'
    },
    {
      name: 'Elegant Custom Cake',
      description: 'A beautifully crafted custom cake for special celebrations.',
      price: '₹1,200',
      image: 'img/IMG-20260112-WA0018.jpg'
    },
    {
      name: 'Elegant Custom Cake',
      description: 'A beautifully crafted custom cake for special celebrations.',
      price: '₹1,200',
      image: 'img/IMG-20260112-WA0019.jpg'
    },
    {
      name: 'Elegant Custom Cake',
      description: 'A beautifully crafted custom cake for special celebrations.',
      price: '₹1,200',
      image: 'img/IMG-20260112-WA0020.jpg'
    },
    {
      name: 'Elegant Custom Cake',
      description: 'A beautifully crafted custom cake for special celebrations.',
      price: '₹1,200',
      image: 'img/IMG-20260112-WA0021.jpg'
    },
    {
      name: 'Elegant Custom Cake',
      description: 'A beautifully crafted custom cake for special celebrations.',
      price: '₹1,200',
      image: 'img/IMG-20260112-WA0022.jpg'
    },
    {
      name: 'Elegant Custom Cake',
      description: 'A beautifully crafted custom cake for special celebrations.',
      price: '₹1,200',
      image: 'img/IMG-20260112-WA0023.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/image.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241108_175022341.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241109_145925247.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241111_134804265.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241112_153825618.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241112_153836265.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241114_132553150.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241119_171014741.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241121_190306129.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241123_172452979.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241124_121029040.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241125_185100266.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241125_185704728.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241126_125850092.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241126_151814724.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241201_181127878.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241202_170223920.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241203_162457354.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241203_171423596.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241205_164000711.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241208_134010199.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241209_161542987.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241211_200927783.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241211_210231134.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241212_185822918.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241214_152833383.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241222_130228545.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241222_135439482.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241222_190945340.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241223_174346749.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241223_215343070.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241225_113517523.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241225_133000236.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241226_140542654.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241227_203809792.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241228_160235627.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241228_190803526.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20241229_123046168.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250102_113319321.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250103_153731241.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250103_183442007.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250104_202753086.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250106_173716128.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250108_114511068.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250111_164026981.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250111_230500289.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250111_230819062.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250111_230921023.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250113_203249366.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250114_200624506.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250115_165752774.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250116_155343516.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250116_171440256.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250118_122454022.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250118_194625525.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250123_204808148.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250124_153223731.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250125_123159000.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250126_145217981.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250127_133740369.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250128_161452605.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250130_113306086.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250130_131150313.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250205_121659997.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250207_180755006.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250208_183528821.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250209_103538981.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250209_111531506.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250209_155430667.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250211_140937403.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250211_174625827.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250212_174837485.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250212_201121221.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250215_180314210.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250216_085639688.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250216_164929257.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250222_154500130.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250223_181014910.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250223_182609473.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250224_170536799.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250224_215143742.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250226_160655891.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250227_172513694.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250305_160054985.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250305_190608046.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250306_201627613.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250314_202055654.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250315_195508106.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250323_163931991.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250330_164532646.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250331_160938751.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250331_162431428.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250406_174228328.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250413_201654389.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250416_165743194.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250416_165747907.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250416_165803301.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250416_165804806.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250416_170259834.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250416_170303902.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250419_115729787.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250421_155944819.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250422_212555500.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250426_175642012.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250501_144815470.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250501_161759100.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250512_163930940.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250513_174811976.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250513_183435943.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250521_140413991.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250521_165639798.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250524_190140904.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250525_183020218.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250526_213257038.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250609_193820839.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250610_143031524.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250611_141055019.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250611_195933358.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250613_164601145.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250613_205038938.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250614_192832276.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250615_180719789.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250617_173558368.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250620_172224829.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250622_144541769.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250623_193219488.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250624_173131657.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250626_183158329.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250630_175946379.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250708_183656523.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250710_165843754.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250710_200055656.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250713_153321302.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250714_200944752.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250720_162442530.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250722_161430203.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250727_174758970.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250731_190311353.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250802_114132797.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250808_181041448.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250809_155855626.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250809_203606385.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250810_171301015.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250810_183726398.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250815_191446362.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250817_165724799.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250820_184700936.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250821_183314043.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250827_191208230.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250829_192544290.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250831_145503677.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250831_161235701.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250905_154543798.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250905_205327331.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250907_155059131.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250907_181137974.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250908_160955275.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250911_133511123.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250913_170858232.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250914_185311469 copy.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250914_185311469.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250914_203652145.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250920_212105327.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250921_130750121.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250921_133433233.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250922_150559887.jpg'
    },
    {
      name: 'Exquisite Custom Cake',
      description: 'A beautifully handcrafted cake for your special celebrations.',
      price: '₹1,000',
      image: 'img/IMG_20250928_210505902.jpg'
    }
  ];

  const brownies = [
    {
      name: 'Nutella Brownie',
      description: 'Rich, fudgy Nutella brownie dripping with hazelnut chocolate goodness — irresistibly indulgent!',
      price: '₹1,400',
      image: 'img/Nutella Brownie.png'
    },
    {
      name: 'Nutella & Biscoff Brownie',
      description: 'Loaded with creamy Nutella & crunchy Biscoff spread inside a deep cocoa batter — pure bliss.',
      price: '₹1,400',
      image: 'img/Nutella & Biscoff Brownie.jpg'
    },
    {
      name: 'Triple Chocolate Brownie & Blondies',
      description: 'The ultimate indulgence — dark, milk, and white chocolate fused into fudgy brownies and golden blondies.',
      price: '₹1,400',
      image: 'img/Triple Chocolate Brownie & Blondies.jpg'
    }
  ];

  // ---------- Menu Category Data ----------
  const cakesMenu = [
    { name: 'Vanilla Cake', description: 'Classic vanilla sponge cake with smooth freshcream frosting.', price: '₹1,000', image: 'img/Vanila cake.jpg', objectPosition: 'center bottom' },
    { name: 'Strawberry Cake', description: 'Fresh strawberry flavoured cake with a fruity, sweet finish.', price: '₹1,000', image: 'img/strawbery cake.jpg' },
    { name: 'Butterscotch Cake', description: 'Rich butterscotch cake with crunchy caramel praline topping.', price: '₹1,000', image: 'img/Butterscoch cake.jpg' },
    { name: 'Black Currant Cake', description: 'Tangy black currant cake with a deep berry flavour.', price: '₹1,000', image: 'img/Black Currant Cake.jpg' },
    { name: 'Chocolate Cake', description: 'Moist, rich chocolate cake for all chocolate lovers.', price: '₹1,200', image: 'img/Chocolate Cake.jpg' },
    { name: 'Chocolate Truffle Cake', description: 'Indulgent chocolate truffle cake with a velvety ganache finish.', price: '₹1,400', image: 'img/Chocolate Truffle Cake.jpg' },
    { name: 'Lotus Biscoff Cake', description: 'Creamy Lotus Biscoff cake with caramelised biscuit crumble.', price: '₹1,400', image: 'img/Lotus Biscoff Cake.jpg' },
    { name: 'Nutella Cake', description: 'Heavenly Nutella hazelnut cake with a chocolatey spread layer.', price: '₹1,400', image: 'img/Nutella Cake.jpg' },
    { name: 'Blueberry Cake', description: 'Delicate blueberry cake with a burst of fresh berry flavour.', price: '₹1,000', image: 'img/Blueberry Cake.jpg' },
    { name: 'Dream Cake', description: 'A blissful 5-in-1 torte dream cake that simply melts in your mouth.', price: '₹1,500', image: 'img/dream cakes.jpg' },
    { name: 'Customised Cake', description: 'Specially crafted customised cakes tailored to your celebrations.', price: 'Starting from ₹1,000', image: 'img/customize cakes.jpg' }
  ];

  const cupCakes = [
    { name: 'Cup Cakes', description: 'Freshly baked cup cakes available in multiple delicious varieties.', price: '₹30', image: 'img/cup cakes.jpg' }
  ];

  const jarCakes = [
    { name: 'Jar Cake', description: 'Layered jar cake with cream and sponge — perfect on the go!', price: '₹120', image: 'img/jar cake.jpg' }
  ];

  const chocolates = [
    { name: 'Chocolate Dates', description: 'Premium chocolate coated dates that taste incredible.', price: 'Starting from ₹130', image: 'img/chocolate dates.jpg' },
    { name: 'Customised Chocolates', description: 'Beautifully customised chocolates for every occasion — perfect for gifting!', price: 'Starting from ₹130', image: 'img/customize chocolate.jpg' }
  ];

  const mousseCup = [
    { name: 'Mousse Cup', description: 'Light, fluffy, and creamy mousse cups in irresistible flavours.', price: 'Starting from ₹40', image: 'img/mouse cakes.jpg' }
  ];

  // ---------- Render Product Cards (with price + order button) ----------
  function createProductCard(item, delayClass, appendKg = false) {
    const whatsappMsg = encodeURIComponent(`Hi, I want to order ${item.name} from CakesnBakes`);
    const whatsappLink = `https://wa.me/919597485022?text=${whatsappMsg}`;

    const imgStyle = item.objectPosition ? `style="object-position: ${item.objectPosition}"` : '';
    const imgHtml = item.image
      ? `<img src="${item.image}" alt="${item.name}" loading="lazy" ${imgStyle}>`
      : `<div class="product-img-placeholder"><i class="fas fa-birthday-cake"></i></div>`;

    const displayPrice = appendKg && item.price && !item.price.includes('/kg') ? `${item.price}/kg` : item.price;

    return `
      <div class="col-lg-4 col-md-6 mb-4 reveal ${delayClass}">
        <div class="product-card">
          <div class="product-img">
            ${imgHtml}
            <span class="price-badge">${displayPrice}</span>
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

  // ---------- Render Gallery Cards (image only) ----------
  function createGalleryCard(item, delayClass) {
    return `
      <div class="col-lg-4 col-md-6 mb-4 reveal ${delayClass}">
        <div class="gallery-card">
          <div class="gallery-img">
            <img src="${item.image}" alt="" loading="lazy">
          </div>
        </div>
      </div>
    `;
  }

  // ---------- Home Page: Cakes product cards from cakesMenu ----------
  const homeCakesGrid = document.getElementById('home-cakes-grid');
  if (homeCakesGrid) {
    cakesMenu.forEach((cake, i) => {
      homeCakesGrid.innerHTML += createProductCard(cake, `reveal-delay-${(i % 5) + 1}`, true);
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

  // ---------- Dedicated Cakes Page: Product cards from cakesMenu ----------
  const cakesProductGrid = document.getElementById('cakes-product-grid');
  if (cakesProductGrid) {
    cakesMenu.forEach((cake, i) => {
      cakesProductGrid.innerHTML += createProductCard(cake, `reveal-delay-${(i % 5) + 1}`, true);
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
      allBrowniesGrid.innerHTML += createProductCard(brownie, `reveal-delay-${(i % 5) + 1}`, true);
    });
  }

  // ---------- Menu Page: Category Containers ----------
  const menuCategoryGrid = document.getElementById('menu-category-grid');
  const menuExpandedArea = document.getElementById('menu-expanded-area');

  if (menuCategoryGrid) {
    const categories = [
      { key: 'cakes', name: 'Cakes', icon: 'fas fa-birthday-cake', data: cakesMenu, color: '#e8899e' },
      { key: 'cupcakes', name: 'Cup Cakes', icon: 'fas fa-cookie', data: cupCakes, color: '#f5a623' },
      { key: 'jarcakes', name: 'Jar Cakes', icon: 'fas fa-jar-wheat', data: jarCakes, color: '#8b6f47' },
      { key: 'chocolates', name: 'Chocolates', icon: 'fas fa-candy-cane', data: chocolates, color: '#6b3a2a' },
      { key: 'mousse', name: 'Mousse Cup', icon: 'fas fa-ice-cream', data: mousseCup, color: '#c76b82' },
      { key: 'brownies', name: 'Brownies', icon: 'fas fa-cookie-bite', data: brownies, color: '#5c3317' }
    ];

    let activeCategory = null;

    // Render category containers
    categories.forEach(cat => {
      const container = document.createElement('div');
      container.className = 'menu-category-container reveal';
      container.dataset.category = cat.key;
      container.innerHTML = `
      <div class="menu-category-icon" style="background: ${cat.color}">
          <i class="${cat.icon}"></i>
        </div>
        <div class="menu-category-info">
          <h3>${cat.name}</h3>
          <span class="menu-category-count">${cat.data.length} ${cat.data.length === 1 ? 'item' : 'items'}</span>
        </div>
        <div class="menu-category-arrow">
          <i class="fas fa-chevron-right"></i>
        </div>
      `;

      container.addEventListener('click', () => {
        // Hide the category grid to act like a new page
        menuCategoryGrid.style.display = 'none';
        activeCategory = cat.key;

        // Render product cards
        let cardsHtml = `<div class="menu-expanded-header reveal">
          <h2>${cat.name}</h2>
          <button class="menu-close-btn" id="closeExpanded"><i class="fas fa-arrow-left"></i> Back to Categories</button>
        </div><div class="row">`;

        cat.data.forEach((item, i) => {
          const isKg = cat.key === 'cakes' || cat.key === 'brownies';
          cardsHtml += createProductCard(item, `reveal-delay-${(i % 5) + 1}`, isKg);
        });

        cardsHtml += '</div>';
        menuExpandedArea.innerHTML = cardsHtml;
        menuExpandedArea.classList.add('active');

        // Close/Back button to return to categories
        document.getElementById('closeExpanded').addEventListener('click', (e) => {
          e.stopPropagation();
          activeCategory = null;
          menuExpandedArea.innerHTML = '';
          menuExpandedArea.classList.remove('active');
          menuCategoryGrid.style.display = 'grid'; // Restore grid
          // Scroll back up slightly
          setTimeout(() => {
            document.getElementById('menu-categories').scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 50);
        });

        // Scroll top to simulate new page load
        setTimeout(() => {
          document.getElementById('menu-categories').scrollIntoView({ behavior: 'smooth', block: 'start' });
          revealOnScroll();
        }, 50);
      });

      menuCategoryGrid.appendChild(container);
    });
  }

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

  // ---------- Global Universal Native Search ----------
  const searchInputs = document.querySelectorAll('.global-search-input');
  const voiceBtns = document.querySelectorAll('.global-voice-btn');

  // Build a single universal product array
  const allProducts = [
    ...(typeof cakes !== 'undefined' ? cakes : []).map(p => ({...p, category: 'Cakes', link: 'cakes.html'})),
    ...(typeof brownies !== 'undefined' ? brownies : []).map(p => ({...p, category: 'Brownies', link: 'brownies.html'})),
    ...(typeof cupCakes !== 'undefined' ? cupCakes : []).map(p => ({...p, category: 'Cup Cakes', link: 'menu.html#cupcakes'})),
    ...(typeof jarCakes !== 'undefined' ? jarCakes : []).map(p => ({...p, category: 'Jar Cakes', link: 'menu.html#jarcakes'})),
    ...(typeof chocolates !== 'undefined' ? chocolates : []).map(p => ({...p, category: 'Chocolates', link: 'menu.html#chocolates'})),
    ...(typeof mousseCup !== 'undefined' ? mousseCup : []).map(p => ({...p, category: 'Mousse Cup', link: 'menu.html#moussecup'}))
  ];

  // Remove duplicates
  const uniqueProducts = [];
  const seenNames = new Set();
  allProducts.forEach(product => {
    if (!seenNames.has(product.name)) {
      seenNames.add(product.name);
      uniqueProducts.push(product);
    }
  });

  // Create UI element for native page search results
  const searchResultPageSection = document.createElement('section');
  searchResultPageSection.id = 'globalSearchNativeSection';
  searchResultPageSection.className = 'py-5 bg-white d-none'; 
  searchResultPageSection.style.minHeight = '100vh';
  searchResultPageSection.style.paddingTop = '120px'; // clear fixed navbar
  
  searchResultPageSection.innerHTML = `
    <div class="container" style="margin-top: 50px;">
      <div class="row mb-5 align-items-center">
        <div class="col-md-8 text-center text-md-start">
          <h2 class="fw-bold mb-2 h1" style="font-family: var(--font-heading);">Search <span class="text-rose">Results</span></h2>
          <p class="text-muted mb-0 fs-5" id="nativeSearchCount">Found 0 products</p>
        </div>
        <div class="col-md-4 text-center text-md-end mt-4 mt-md-0">
          <button class="btn btn-outline-dark rounded-pill px-4 py-2 fw-bold shadow-sm" id="closeNativeSearch">
            <i class="fas fa-arrow-left me-2"></i>Back to Page
          </button>
        </div>
      </div>
      <div class="row" id="nativeSearchResultsGrid"></div>
    </div>
  `;
  document.body.appendChild(searchResultPageSection);

  const nativeSearchResultsGrid = document.getElementById('nativeSearchResultsGrid');
  const nativeSearchCount = document.getElementById('nativeSearchCount');
  const closeNativeSearch = document.getElementById('closeNativeSearch');

  function openNativeSearch() {
    searchResultPageSection.classList.remove('d-none');
    
    // Hide all original content sections safely (excluding navbar, script, and search UI itself)
    const children = document.body.children;
    for (let i = 0; i < children.length; i++) {
      const el = children[i];
      if (el.tagName !== 'NAV' && el.tagName !== 'SCRIPT' && el.id !== 'globalSearchNativeSection') {
        if (!el.dataset.originalDisplaySet) {
          el.dataset.originalDisplay = el.style.display || '';
          el.dataset.originalDisplaySet = 'true';
        }
        el.style.display = 'none';
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function closeNativeSearchUI() {
    searchResultPageSection.classList.add('d-none');
    
    // Restore original page content
    const children = document.body.children;
    for (let i = 0; i < children.length; i++) {
      const el = children[i];
      if (el.dataset.originalDisplaySet === 'true') {
        el.style.display = el.dataset.originalDisplay;
      }
    }
    
    // Clear all search inputs
    searchInputs.forEach(inp => inp.value = '');
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Return to top nicely
  }

  closeNativeSearch.addEventListener('click', closeNativeSearchUI);

  function renderNativeResults(query) {
    if (!query || query.trim().length === 0) {
      nativeSearchResultsGrid.innerHTML = `
        <div class="col-12 text-center py-5">
          <h4 class="text-muted" style="font-family: var(--font-heading);">Start typing to search across all products...</h4>
        </div>
      `;
      nativeSearchCount.textContent = 'Ready to search';
      return;
    }

    const q = query.toLowerCase();
    const filtered = uniqueProducts.filter(p => 
      p.name.toLowerCase().includes(q) || 
      (p.description && p.description.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q)
    );

    nativeSearchCount.textContent = `Showing exact matches for "${query}" (${filtered.length} products)`;

    if (filtered.length === 0) {
      nativeSearchResultsGrid.innerHTML = `
        <div class="col-12 text-center py-5 mt-5">
          <i class="fas fa-search-minus fa-4x mb-4 text-muted" style="opacity: 0.2;"></i>
          <h3 class="text-dark fw-bold" style="font-family: var(--font-heading);">No products found</h3>
          <p class="text-muted fs-5 mt-2">Try adjusting your search terms or exploring our menu.</p>
        </div>
      `;
    } else {
      let html = '';
      filtered.forEach(item => {
        // Reuse the exact same function that renders products on normal pages
        // to guarantee identical CSS styling, pricing badge, and WhatsApp buttons.
        // We inject 'filterable-item active' to prevent initial reveal delay hiding.
        const isKg = ['Cakes', 'Brownies'].includes(item.category);
        html += createProductCard(item, 'filterable-item active', isKg);
      });
      nativeSearchResultsGrid.innerHTML = html;
    }
  }

  // Handle escape key to close search
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !searchResultPageSection.classList.contains('d-none')) {
      closeNativeSearchUI();
    }
  });

  searchInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      const q = e.target.value;
      if (q.trim().length > 0) openNativeSearch();
      else closeNativeSearchUI();
      
      renderNativeResults(q);

      // Sync inputs across desktop/mobile
      searchInputs.forEach(inp => {
        if (inp !== input) inp.value = q;
      });
    });

    // Opening click directly into populated input
    input.addEventListener('click', (e) => {
      if (e.target.value.trim().length > 0) {
        openNativeSearch();
        renderNativeResults(e.target.value);
      }
    });
  });

  // Voice Search
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    voiceBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (btn.classList.contains('listening')) {
          recognition.stop();
        } else {
          try {
            recognition.start();
            voiceBtns.forEach(b => b.classList.add('listening'));
            searchInputs.forEach(input => input.placeholder = 'Listening...');
          } catch(err) {
            console.error("Speech recognition error:", err);
          }
        }
      });
    });

    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      searchInputs.forEach(inp => inp.value = transcript);
      openNativeSearch();
      renderNativeResults(transcript);
      resetVoiceUI();
    };

    recognition.onerror = resetVoiceUI;
    recognition.onend = resetVoiceUI;

    function resetVoiceUI() {
      voiceBtns.forEach(b => b.classList.remove('listening'));
      searchInputs.forEach(input => input.placeholder = 'Search for cakes...');
    }
  } else {
    voiceBtns.forEach(btn => btn.style.display = 'none');
  }

});
