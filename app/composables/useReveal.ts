type UseRevealOptions = {
  once?: boolean
  rootMargin?: string
  threshold?: number
}

export function useReveal(options: UseRevealOptions = {}) {
  const target = ref<HTMLElement | null>(null)
  const isVisible = ref(false)

  let observer: IntersectionObserver | null = null
  let mediaQuery: MediaQueryList | null = null

  const cleanup = () => {
    observer?.disconnect()
    observer = null

    if (mediaQuery) {
      mediaQuery.removeEventListener('change', syncReducedMotion)
      mediaQuery = null
    }
  }

  const reveal = () => {
    isVisible.value = true
  }

  const syncReducedMotion = () => {
    if (mediaQuery?.matches) {
      reveal()
      observer?.disconnect()
      observer = null
      return
    }

    if (target.value && !observer) {
      observer = new IntersectionObserver((entries) => {
        const [entry] = entries

        if (!entry) {
          return
        }

        if (entry.isIntersecting) {
          reveal()

          if (options.once !== false) {
            observer?.disconnect()
            observer = null
          }
        }
        else if (options.once === false) {
          isVisible.value = false
        }
      }, {
        rootMargin: options.rootMargin ?? '0px 0px -12% 0px',
        threshold: options.threshold ?? 0.18,
      })

      observer.observe(target.value)
    }
  }

  onMounted(() => {
    mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    mediaQuery.addEventListener('change', syncReducedMotion)
    syncReducedMotion()
  })

  watch(target, () => {
    if (!import.meta.client || mediaQuery?.matches) {
      reveal()
      return
    }

    observer?.disconnect()
    observer = null
    syncReducedMotion()
  })

  onBeforeUnmount(cleanup)

  return {
    target,
    isVisible,
  }
}
