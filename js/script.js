const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//making mobile nav work
const btnNav = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.main-header');

btnNav.addEventListener('click', () => {
  headerEl.classList.toggle('nav-open');
});

// sticky
const sectionEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    // console.log(ent);
    if (ent.isIntersecting === false) {
      headerEl.classList.add('sticky');
    }
    if (ent.isIntersecting === true) {
      headerEl.classList.remove('sticky');
    }
  },
  {
    root: null,
    threshold: 0,
  }
);

obs.observe(sectionEl);

//scrolling animation
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach((link) =>
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');

    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    if (href !== '#' && href.startsWith('#')) {
      const el = document.querySelector(href);

      el.scrollIntoView({
        behavior: 'smooth',
      });
    }

    if (link.classList.contains('nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  })
);

//const allLinks = document.querySelectorAll('a:link');

// allLinks.forEach(function (link) {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const href = link.getAttribute('href');

//     console.log(href);
//   });
// });
