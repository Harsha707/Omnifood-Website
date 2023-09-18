const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

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
