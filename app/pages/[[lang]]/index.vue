<script setup lang="ts">
import type { Collections } from '@nuxt/content'

definePageMeta({
  layout: false,
  footer: false,
})

type LandingCollectionName = Extract<keyof Collections, `landing_${string}`>

const route = useRoute()
const landingCollections = {
  en: 'landing_en',
  vi: 'landing_vi',
} as const satisfies Record<string, LandingCollectionName>

const collectionName = computed<LandingCollectionName>(() => {
  const pathLocale = route.path.split('/')[1] ?? ''
  const currentLocale = pathLocale in landingCollections ? pathLocale : 'en'

  return (currentLocale in landingCollections)
    ? landingCollections[currentLocale as keyof typeof landingCollections]
    : landingCollections.en
})

const { data: page } = await useAsyncData(
  () => `landing-page-${route.path}`,
  () => queryCollection(collectionName.value).path(route.path).first() as Promise<Collections[LandingCollectionName] | null>,
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

useSeo({
  title,
  description,
  type: 'website',
  ogImage: page.value?.seo?.ogImage as string | undefined,
})

if (!page.value?.seo?.ogImage) {
  defineOgImageComponent('Landing', {
    title,
    description,
  })
}
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
  />
</template>
