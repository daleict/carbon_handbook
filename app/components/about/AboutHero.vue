<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description: string
  primaryAction: string
  primaryTo: string
  secondaryAction: string
  secondaryTo: string
  summaryTitle: string
  summaryDescription: string
  institutionsLabel: string
  focusLabel: string
  institutions: string[]
  focusAreas: string[]
}>()
</script>

<template>
  <section class="about-hero">
    <div class="about-hero__copy">
      <p class="about-hero__eyebrow">
        {{ eyebrow }}
      </p>
      <h1 class="about-hero__title">
        {{ title }}
      </h1>
      <p class="about-hero__description">
        {{ description }}
      </p>

      <div class="about-hero__actions">
        <NuxtLink
          :to="primaryTo"
          class="about-hero__button about-hero__button--primary"
        >
          {{ primaryAction }}
        </NuxtLink>
        <NuxtLink
          :to="secondaryTo"
          class="about-hero__button about-hero__button--secondary"
        >
          {{ secondaryAction }}
        </NuxtLink>
      </div>
    </div>

    <aside class="about-hero__panel">
      <div class="about-hero__summary">
        <p class="about-hero__label">
          {{ summaryTitle }}
        </p>
        <p class="about-hero__summary-text">
          {{ summaryDescription }}
        </p>
      </div>

      <div class="about-hero__meta">
        <div class="about-hero__meta-card">
          <p class="about-hero__meta-title">
            {{ institutionsLabel }}
          </p>
          <ul class="about-hero__meta-list">
            <li
              v-for="institution in institutions"
              :key="institution"
            >
              {{ institution }}
            </li>
          </ul>
        </div>

        <div class="about-hero__meta-card">
          <p class="about-hero__meta-title">
            {{ focusLabel }}
          </p>
          <ul class="about-hero__meta-list">
            <li
              v-for="focusArea in focusAreas"
              :key="focusArea"
            >
              {{ focusArea }}
            </li>
          </ul>
        </div>
      </div>
    </aside>
  </section>
</template>

<style scoped>
.about-hero {
  position: relative;
  overflow: hidden;
  display: grid;
  gap: 1.25rem;
  padding: clamp(1.5rem, 3vw, 2.5rem);
  border: 1px solid var(--marketing-border);
  border-radius: 1.9rem;
  background:
    radial-gradient(circle at top right, rgba(190, 231, 234, 0.64), transparent 22rem),
    radial-gradient(circle at 14% 12%, rgba(243, 223, 154, 0.68), transparent 20rem),
    linear-gradient(140deg, rgba(255, 255, 255, 0.94) 0%, rgba(249, 246, 239, 0.96) 52%, rgba(243, 249, 243, 0.94) 100%);
  box-shadow: 0 22px 60px rgba(28, 40, 31, 0.08);
}

.about-hero::after {
  content: '';
  position: absolute;
  inset: auto -5rem -5rem auto;
  width: 13rem;
  height: 13rem;
  border-radius: 999px;
  background: var(--marketing-glow);
  filter: blur(20px);
  opacity: 0.9;
}

.about-hero__copy,
.about-hero__panel {
  position: relative;
  z-index: 1;
}

.about-hero__eyebrow,
.about-hero__label,
.about-hero__meta-title {
  margin: 0;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.about-hero__eyebrow {
  color: var(--marketing-accent);
}

.about-hero__title {
  margin: 0.8rem 0 0;
  font-size: clamp(2.45rem, 2rem + 1.8vw, 4.35rem);
  line-height: 0.98;
  letter-spacing: -0.045em;
  color: var(--marketing-text);
}

.about-hero__description,
.about-hero__summary-text,
.about-hero__meta-list {
  margin: 0;
  color: var(--marketing-muted);
  line-height: 1.75;
}

.about-hero__description {
  max-width: 42rem;
  margin-top: 1rem;
  font-size: 1rem;
}

.about-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.5rem;
}

.about-hero__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: 0.8rem 1.15rem;
  border-radius: 0.9rem;
  border: 1px solid transparent;
  font-weight: 700;
  text-decoration: none;
  transition: transform 180ms ease, border-color 180ms ease, background-color 180ms ease, color 180ms ease;
}

.about-hero__button:hover {
  transform: translateY(-1px);
}

.about-hero__button--primary {
  background: var(--marketing-accent);
  color: #fff;
  box-shadow: 0 14px 32px rgba(71, 193, 99, 0.22);
}

.about-hero__button--secondary {
  border-color: var(--marketing-border);
  background: rgba(255, 255, 255, 0.72);
  color: var(--marketing-text);
}

.about-hero__panel {
  display: grid;
  gap: 0.9rem;
}

.about-hero__summary,
.about-hero__meta-card {
  border: 1px solid var(--marketing-border);
  border-radius: 1.35rem;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 14px 28px rgba(28, 40, 31, 0.06);
}

.about-hero__summary {
  padding: 1.15rem 1.15rem 1.2rem;
}

.about-hero__label,
.about-hero__meta-title {
  color: var(--marketing-text);
}

.about-hero__summary-text {
  margin-top: 0.7rem;
  font-size: 0.94rem;
}

.about-hero__meta {
  display: grid;
  gap: 0.9rem;
}

.about-hero__meta-card {
  padding: 1rem 1.1rem 1.1rem;
}

.about-hero__meta-list {
  padding-left: 1rem;
  margin-top: 0.75rem;
  font-size: 0.92rem;
}

.about-hero__meta-list li + li {
  margin-top: 0.45rem;
}

@media (min-width: 960px) {
  .about-hero {
    grid-template-columns: minmax(0, 1.35fr) minmax(20rem, 0.9fr);
    align-items: stretch;
  }
}

@media (max-width: 639px) {
  .about-hero__actions {
    flex-direction: column;
  }

  .about-hero__button {
    width: 100%;
  }
}
</style>
