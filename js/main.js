const sliderMain = new Swiper('.slider__main', {
  freeMode: true,
  centeredSlides: true,
  mousewheel: true,
  parallax: true,
  breakpoints: {
    0: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 3.5,
      spaceBetween: 60,
    },
  },
})

const sliderBg = new Swiper('.slider__bg', {
  centeredSlides: true,
  parallax: true,
  spaceBetween: 60,
  slidesPerView: 3.5,
})

sliderMain.controller.control = sliderBg

document.querySelectorAll('.slider__item').forEach((item) => {
  item.addEventListener('click', (event) => {
    item.classList.toggle('opened')
  })
})

let about = document.querySelector('.about')
sliderMain.on('slideChange', (e) => {
  sliderMain.activeIndex > 0 ? about.classList.add('hidden') : about.classList.remove('hidden')
})
