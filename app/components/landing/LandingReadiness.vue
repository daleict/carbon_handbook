<script setup lang="ts">
type ReadinessItem = {
  title: string
  description: string
}

defineProps<{
  eyebrow: string
  title: string
  description: string
  items: ReadinessItem[]
}>()

const { currentLocale } = useMarketingRoute()
const outcomeLabel = computed(() => currentLocale.value === 'vi' ? 'Năng lực' : 'Outcome')
</script>

<template>
  <LandingSection
    tone="contrast"
    align="center"
    :eyebrow="eyebrow"
    :title="title"
    :description="description"
  >
    <div class="marketing-readiness">
      <article
        v-for="item in items"
        :key="item.title"
        class="marketing-card marketing-card--readiness"
      >
        <p class="marketing-card__label">
          {{ outcomeLabel }}
        </p>
        <h3 class="marketing-card__title">
          {{ item.title }}
        </h3>
        <p class="marketing-card__description">
          {{ item.description }}
        </p>
      </article>
    </div>
  </LandingSection>
</template>
