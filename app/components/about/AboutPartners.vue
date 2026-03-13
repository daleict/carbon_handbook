<script setup lang="ts">
import type { LocalizedPartner } from '../../data/about'

defineProps<{
  eyebrow: string
  title: string
  partners: LocalizedPartner[]
  mockupLabel: string
}>()

function imageAlt(name: string, mockupLabel: string) {
  return `${name} ${mockupLabel.toLowerCase()}`
}
</script>

<template>
  <section class="about-section">
    <div class="about-section__intro">
      <p class="about-section__eyebrow">
        {{ eyebrow }}
      </p>
      <h2 class="about-section__title">
        {{ title }}
      </h2>
    </div>

    <div class="about-partners-grid">
      <article
        v-for="partner in partners"
        :key="partner.name"
        class="about-partner-card"
      >
        <component
          :is="partner.website ? 'a' : 'div'"
          class="about-partner-card__link"
          :href="partner.website"
          :target="partner.website ? '_blank' : undefined"
          :rel="partner.website ? 'noreferrer' : undefined"
        >
          <img
            class="about-partner-card__image"
            :src="partner.image"
            :alt="imageAlt(partner.name, mockupLabel)"
          >
          <h3 class="about-partner-card__name">
            {{ partner.name }}
          </h3>
        </component>
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

.about-partners-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.about-partner-card {
  display: block;
  height: 100%;
  text-decoration: none;
  color: inherit;
  border-radius: 1.35rem;
  overflow: hidden;
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.about-partner-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 44px rgba(28, 40, 31, 0.1);
}

.about-partner-card__image {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: contain;
  background: rgba(255, 255, 255, 0.96);
  border-radius: 1.35rem;
}

.about-partner-card__name {
  margin: 1rem 0 0;
  font-size: 1.1rem;
  font-weight: 700;
  text-align: center;
  color: var(--marketing-text);
}
</style>
