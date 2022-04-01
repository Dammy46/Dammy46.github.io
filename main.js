let nT = document.querySelector('.mobile-nav-toggle');
let body = document.querySelector("body")
nT.addEventListener("click", function () {
  body.classList.toggle("mobile-nav-active")
  this.classList.toggle("fa-bars")
  this.classList.toggle("fa-xmark")
  
})
const typed = document.querySelector('.typed');
if (typed) {
  let typed_strings = typed.getAttribute('data-typed-items');
  typed_strings = typed_strings.split(',');
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 200,
  });
}
 AOS.init();

new PureCounter();

new Swiper('.swiper', {
  speed: 600,
  loop: true,
  autoPlay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
