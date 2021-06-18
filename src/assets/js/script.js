import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const panelEls = Array.from(document.querySelectorAll('.panels__item'))
let currentIndex = 0

ScrollTrigger.create({
  trigger: '.container',
  pin: true,
  end: function () {
    return '+=' + window.innerHeight * panelEls.length
  },
  toggleClass: 'is-active',
  onEnter: function () {
    panelEls[0].classList.add('is-active')
  },
  onLeaveBack: function () {
    panelEls[0].classList.remove('is-active')
  },
  onUpdate: function (self) {
    const previousIndex = currentIndex

    currentIndex = Math.floor(self.progress * panelEls.length)

    if (previousIndex >= panelEls.length || currentIndex >= panelEls.length) {
      return
    }

    if (previousIndex !== currentIndex) {
      panelEls[previousIndex].classList.remove('is-active')
      panelEls[currentIndex].classList.add('is-active')
    }
  },
})
