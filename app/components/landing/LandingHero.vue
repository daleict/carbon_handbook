<script setup lang="ts">
const props = defineProps<{
  eyebrow: string
  title: string
  lead: string
  body: string
  primaryLabel: string
  primaryTo: string
  secondaryLabel: string
  secondaryTo: string
  guideLabel: string
  guideDescription: string
  statLabel: string
  statValue: string
  statDescription: string
  imageAlt?: string
}>()

const { currentLocale } = useMarketingRoute()
const { isVisible, target } = useReveal()

const coverImage = computed(() => currentLocale.value === 'vi' ? '/cover_vi.webp' : '/cover_en.webp')
const imageAlt = computed(() => props.imageAlt || props.title)
</script>

<template>
  <section
    ref="target"
    class="marketing-hero marketing-reveal"
    :class="{ 'is-visible': isVisible }"
  >
    <div class="marketing-shell marketing-hero__shell">
      <div class="marketing-hero__copy">
        <p class="marketing-kicker">
          {{ props.eyebrow }}
        </p>

        <h1 class="marketing-hero__title">
          {{ props.title }}
        </h1>

        <p class="marketing-hero__lead">
          {{ props.lead }}
        </p>

        <p class="marketing-hero__body">
          {{ props.body }}
        </p>

        <div class="marketing-hero__actions">
          <NuxtLink
            :to="props.primaryTo"
            class="marketing-button marketing-button--primary"
          >
            {{ props.primaryLabel }}
          </NuxtLink>

          <NuxtLink
            :to="props.secondaryTo"
            class="marketing-button marketing-button--secondary"
          >
            {{ props.secondaryLabel }}
          </NuxtLink>
        </div>
      </div>

      <div class="marketing-hero__visual">
        <img
          :src="coverImage"
          :alt="imageAlt"
          class="marketing-hero__image"
        >
      </div>
    </div>
  </section>
</template>
