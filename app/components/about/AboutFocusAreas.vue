<script setup lang="ts">
import type { LocalizedFocusArea } from '../../data/about'

defineProps<{
  eyebrow: string
  title: string
  items: LocalizedFocusArea[]
}>()
</script>

<template>
  <section class="about-section about-section--contrast">
    <div class="about-section__intro">
      <p class="about-section__eyebrow">
        {{ eyebrow }}
      </p>
      <h2 class="about-section__title">
        {{ title }}
      </h2>
    </div>

    <div class="about-focus-grid">
      <article
        v-for="item in items"
        :key="item.icon"
        class="about-focus-card"
      >
        <div class="about-focus-card__icon">
          <UIcon :name="item.icon" />
        </div>
        <h3 class="about-focus-card__title">
          {{ item.title }}
        </h3>
        <p class="about-focus-card__description">
          {{ item.description }}
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  display: grid;
  gap: 1.2rem;
  padding: clamp(1.25rem, 2.2vw, 1.9rem);
  background: transparent;
}

.about-section--contrast {
  background: transparent;
}

.about-section__eyebrow {
  margin: 0;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--marketing-accent);
}

.about-section__title {
  margin: 0.6rem 0 0;
  font-size: clamp(1.55rem, 1.3rem + 0.72vw, 2.05rem);
  line-height: 1.08;
  color: var(--marketing-text);
}

.about-focus-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.about-focus-card {
  padding: 1.15rem;
  border: 1px solid var(--marketing-border);
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 0 12px 26px rgba(28, 40, 31, 0.05);
}

.about-focus-card:nth-child(3n + 1) {
  background: linear-gradient(180deg, rgba(244, 235, 195, 0.55) 0%, rgba(255, 255, 255, 0.7) 100%);
}

.about-focus-card:nth-child(3n + 2) {
  background: linear-gradient(180deg, rgba(208, 237, 238, 0.55) 0%, rgba(255, 255, 255, 0.7) 100%);
}

.about-focus-card:nth-child(3n) {
  background: linear-gradient(180deg, rgba(214, 238, 211, 0.55) 0%, rgba(255, 255, 255, 0.7) 100%);
}

.about-focus-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.85rem;
  height: 2.85rem;
  border-radius: 0.95rem;
  background: var(--marketing-accent-soft);
  color: var(--marketing-accent);
  font-size: 1.25rem;
}

.about-focus-card__title {
  margin: 0.85rem 0 0;
  font-size: 1rem;
  line-height: 1.35;
  color: var(--marketing-text);
}

.about-focus-card__description {
  margin: 0.65rem 0 0;
  color: var(--marketing-muted);
  line-height: 1.7;
}
</style>
