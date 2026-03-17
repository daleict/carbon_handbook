export default defineNuxtRouteMiddleware((to) => {
  if (to.hash === '#book') {
    // Extract locale from path (e.g., /en/, /vi/, or just /)
    const pathSegments = to.path.split('/').filter(Boolean)
    const locale = pathSegments[0] || 'en'

    // Redirect to the locale root (without hash)
    return navigateTo(`/${locale}`, { redirectCode: 301 })
  }
})
