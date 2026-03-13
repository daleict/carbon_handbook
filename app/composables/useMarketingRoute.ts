type LocalizedText = {
  en: string
  vi: string
}

type MarketingNavItem = {
  id: 'handbook' | 'whats-inside' | 'about'
  label: string
  to: string
}

function isLocalizedText(value: unknown): value is LocalizedText {
  return Boolean(value && typeof value === 'object' && 'en' in value && 'vi' in value)
}

export function useMarketingRoute() {
  const route = useRoute()
  const appConfig = useAppConfig()
  const { locale, switchLocalePath } = useDocusI18n()

  const currentLocale = computed<'en' | 'vi'>(() => {
    const routeLocale = route.params.lang

    if (typeof routeLocale === 'string' && (routeLocale === 'en' || routeLocale === 'vi')) {
      return routeLocale
    }

    return locale.value === 'vi' ? 'vi' : 'en'
  })

  function localizeLabel(value: unknown, fallback = '') {
    if (typeof value === 'string') {
      return value
    }

    if (isLocalizedText(value)) {
      return value[currentLocale.value] || value.en
    }

    return fallback
  }

  const homePath = computed(() => `/${currentLocale.value}`)
  const aboutPath = computed(() => `${homePath.value}/about-us`)
  const handbookPath = computed(() => {
    const paths = appConfig.marketing?.handbookPaths as Partial<Record<'en' | 'vi', string>> | undefined
    return paths?.[currentLocale.value] || homePath.value
  })

  const isLandingRoute = computed(() => route.path === homePath.value)
  const isAboutRoute = computed(() => route.path === aboutPath.value)
  const isMarketingRoute = computed(() => isLandingRoute.value || isAboutRoute.value)
  const alternateLocale = computed<'en' | 'vi'>(() => currentLocale.value === 'vi' ? 'en' : 'vi')
  const alternateLocalePath = computed(() => {
    const switched = switchLocalePath(alternateLocale.value)

    if (typeof switched === 'string' && switched) {
      return switched
    }

    return isAboutRoute.value ? `/${alternateLocale.value}/about-us` : `/${alternateLocale.value}`
  })

  const navItems = computed<MarketingNavItem[]>(() => {
    const labels = appConfig.marketing?.labels

    return [
      {
        id: 'handbook',
        label: localizeLabel(labels?.handbook, 'Handbook'),
        to: handbookPath.value,
      },
      {
        id: 'whats-inside',
        label: localizeLabel(labels?.whatsInside, "What's Inside"),
        to: `${homePath.value}#whats-inside`,
      },
      {
        id: 'about',
        label: localizeLabel(labels?.about, 'About Us'),
        to: aboutPath.value,
      },
    ]
  })

  return {
    currentLocale,
    homePath,
    aboutPath,
    handbookPath,
    isLandingRoute,
    isAboutRoute,
    isMarketingRoute,
    alternateLocale,
    alternateLocalePath,
    navItems,
    localizeLabel,
  }
}
