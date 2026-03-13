<script setup lang="ts">
import type { LocalizedTeamMember } from '../../data/about'

defineProps<{
  eyebrow: string
  title: string
  description: string
  members: LocalizedTeamMember[]
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
      <p class="about-section__description">
        {{ description }}
      </p>
    </div>

    <div class="about-leadership-grid">
      <article
        v-for="member in members"
        :key="member.name"
        class="about-leadership-card"
      >
        <component
          :is="member.profileUrl ? 'a' : 'div'"
          class="about-leadership-card__inner"
          :href="member.profileUrl"
          :target="member.profileUrl ? '_blank' : undefined"
          :rel="member.profileUrl ? 'noreferrer' : undefined"
        >
          <img
            v-if="member.image"
            class="about-leadership-card__image"
            :src="member.image"
            :alt="imageAlt(member.name, mockupLabel)"
          >
          <div class="about-leadership-card__body">
            <h3 class="about-leadership-card__name">
              {{ member.name }}
            </h3>
            <p class="about-leadership-card__role">
              {{ member.title }}
            </p>
            <p
              v-if="member.organization"
              class="about-leadership-card__org"
            >
              {{ member.organization }}
            </p>
          </div>
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
  font-size: clamp(1.6rem, 1.32rem + 0.8vw, 2.2rem);
  line-height: 1.05;
  color: var(--marketing-text);
}

.about-section__description {
  max-width: 44rem;
  margin: 0.9rem 0 0;
  color: var(--marketing-muted);
  line-height: 1.75;
}

.about-leadership-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.about-leadership-card__inner {
  display: block;
  height: 100%;
  text-decoration: none;
  color: inherit;
  border: 1px solid var(--marketing-border);
  border-radius: 1.35rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.55);
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
}

.about-leadership-card:nth-child(3n + 1) .about-leadership-card__inner {
  background: linear-gradient(180deg, rgba(244, 235, 195, 0.55) 0%, rgba(255, 255, 255, 0.7) 100%);
}

.about-leadership-card:nth-child(3n + 2) .about-leadership-card__inner {
  background: linear-gradient(180deg, rgba(208, 237, 238, 0.55) 0%, rgba(255, 255, 255, 0.7) 100%);
}

.about-leadership-card:nth-child(3n) .about-leadership-card__inner {
  background: linear-gradient(180deg, rgba(214, 238, 211, 0.55) 0%, rgba(255, 255, 255, 0.7) 100%);
}

.about-leadership-card__inner:hover {
  transform: translateY(-2px);
  border-color: rgba(71, 193, 99, 0.2);
  box-shadow: 0 18px 44px rgba(28, 40, 31, 0.1);
}

.about-leadership-card__image {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  background: #d9e5d9;
}

.about-leadership-card__body {
  padding: 1rem 1rem 1.1rem;
}

.about-leadership-card__name {
  margin: 0;
  font-size: 1.08rem;
  color: var(--marketing-text);
}

.about-leadership-card__role,
.about-leadership-card__org {
  margin: 0.45rem 0 0;
  color: var(--marketing-muted);
  line-height: 1.65;
}
</style>
