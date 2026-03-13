<script setup lang="ts">
const props = defineProps<{
  mobile?: boolean
}>()

const appConfig = useAppConfig()
const { handbookPath, isLandingRoute, isMarketingRoute, localizeLabel } = useMarketingRoute()

const label = computed(() => {
  const labels = appConfig.marketing?.labels

  return isLandingRoute.value
    ? localizeLabel(labels?.openHandbook, 'Open the handbook')
    : localizeLabel(labels?.exploreHandbook, 'Explore the handbook')
})
</script>

<template>
  <NuxtLink
    v-if="isMarketingRoute"
    :to="handbookPath"
    class="marketing-button"
    :class="[
      isLandingRoute ? 'marketing-button--primary' : 'marketing-button--secondary',
      props.mobile ? 'marketing-button--block' : '',
    ]"
  >
    {{ label }}
  </NuxtLink>

  <div v-else />
</template>
