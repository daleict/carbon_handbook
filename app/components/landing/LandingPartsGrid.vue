<script setup lang="ts">
type PartItem = {
  icon?: string
  label?: string
  title: string
  description: string
  to: string
}

defineProps<{
  eyebrow: string
  title: string
  description: string
  items: PartItem[]
}>()

const { currentLocale } = useMarketingRoute()
const sectionLabel = computed(() => currentLocale.value === 'vi' ? 'Mở phần này' : 'Open section')
</script>

<template>
  <LandingSection
    id="whats-inside"
    align="center"
    :eyebrow="eyebrow"
    :title="title"
    :description="description"
  >
    <div class="marketing-card-grid marketing-card-grid--parts">
      <NuxtLink
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        class="marketing-card marketing-card--link"
      >
        <div class="marketing-card__header">
          <span class="marketing-card__icon">
            <UIcon :name="item.icon || 'i-lucide-book-open'" />
          </span>
          <span
            v-if="item.label"
            class="marketing-card__label"
          >
            {{ item.label }}
          </span>
        </div>

        <div class="marketing-card__body">
          <h3 class="marketing-card__title">
            {{ item.title }}
          </h3>
          <p class="marketing-card__description">
            {{ item.description }}
          </p>
        </div>

        <div class="marketing-card__footer">
          <span>{{ sectionLabel }}</span>
          <UIcon name="i-lucide-arrow-up-right" />
        </div>
      </NuxtLink>
    </div>
  </LandingSection>
</template>
