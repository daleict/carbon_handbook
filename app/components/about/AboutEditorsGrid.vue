<script setup lang="ts">
import type { LocalizedTeamMember } from '../../data/about'

defineProps<{
  eyebrow: string
  title: string
  members: LocalizedTeamMember[]
}>()
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

    <div class="about-editors-grid">
      <article
        v-for="member in members"
        :key="member.name"
        class="about-editor-card"
      >
        <component
          :is="member.profileUrl ? 'a' : 'div'"
          class="about-editor-card__inner"
          :href="member.profileUrl"
          :target="member.profileUrl ? '_blank' : undefined"
          :rel="member.profileUrl ? 'noreferrer' : undefined"
        >
          <div class="about-editor-card__avatar">
            {{ member.initials }}
          </div>
          <div class="about-editor-card__body">
            <h3 class="about-editor-card__name">
              {{ member.name }}
            </h3>
            <p class="about-editor-card__meta">
              {{ member.title }}
            </p>
            <p
              v-if="member.organization"
              class="about-editor-card__meta"
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
  gap: 1.15rem;
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
  font-size: clamp(1.45rem, 1.26rem + 0.62vw, 1.95rem);
  line-height: 1.08;
  color: var(--marketing-text);
}

.about-editors-grid {
  display: grid;
  gap: 0.9rem;
  grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
}

.about-editor-card__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
  height: 100%;
  padding: 1rem 0.9rem;
  text-align: center;
  text-decoration: none;
  color: inherit;
  border: 1px solid var(--marketing-border);
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 0 12px 26px rgba(28, 40, 31, 0.05);
  transition: transform 180ms ease, border-color 180ms ease, background-color 180ms ease;
}

.about-editor-card:nth-child(3n + 1) .about-editor-card__inner {
  background: linear-gradient(180deg, rgba(244, 235, 195, 0.55) 0%, rgba(255, 255, 255, 0.7) 100%);
}

.about-editor-card:nth-child(3n + 2) .about-editor-card__inner {
  background: linear-gradient(180deg, rgba(208, 237, 238, 0.55) 0%, rgba(255, 255, 255, 0.7) 100%);
}

.about-editor-card:nth-child(3n) .about-editor-card__inner {
  background: linear-gradient(180deg, rgba(214, 238, 211, 0.55) 0%, rgba(255, 255, 255, 0.7) 100%);
}

.about-editor-card__inner:hover {
  transform: translateY(-2px);
  border-color: rgba(71, 193, 99, 0.2);
  background: rgba(255, 255, 255, 0.75);
}

.about-editor-card__avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(71, 193, 99, 0.92) 0%, rgba(145, 220, 160, 0.82) 100%);
  color: #fff;
  font-size: 0.92rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.about-editor-card__name {
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.35;
  color: var(--marketing-text);
}

.about-editor-card__meta {
  margin: 0.42rem 0 0;
  font-size: 0.85rem;
  line-height: 1.55;
  color: var(--marketing-muted);
}
</style>
