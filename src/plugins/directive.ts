// import vSlideIn from '~/utils/directive/vSlideIn.client'
import { Directive } from 'vue'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.hook('app:beforeMount', app => {
    const DISTANCE = 150
    const DURATION = 1000
    const animationMap = new WeakMap()
    const ob = new window.IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const animation = animationMap.get(entry.target)
          animation.play()
          ob.unobserve(entry.target)
        }
      }
    })

    function vSlideIn() {
      const d: Directive = {
        mounted(el: HTMLElement, binding) {
          if (!isBelowViewport(el)) {
            return
          }

          const { delay = 1 } = binding.value || {}
          const animation = el.animate(
            [
              {
                transform: `translateY(${DISTANCE + delay * 20}px)`,
                opacity: 0.5
              },
              {
                transform: `translateY(0)`,
                opacity: 1
              }
            ],
            {
              duration: DURATION,
              easing: 'ease',
              direction: 'alternate',
              endDelay: delay
            }
          )

          animation.pause()
          animationMap.set(el, animation)
          ob.observe(el)
        },
        unmounted(el) {
          ob.unobserve(el)
        }
      }

      return d
    }

    function isBelowViewport(el: HTMLElement) {
      const rect = el.getBoundingClientRect()

      return rect.top > window.innerHeight
    }

    app.directive('motion', vSlideIn())
  })
  nuxtApp.vueApp.directive('motion', {})
})
