<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description: string
  action: string
  email: string
}>()
</script>

<template>
  <section class="about-contact">
    <div class="about-contact__copy">
      <p class="about-contact__eyebrow">
        {{ eyebrow }}
      </p>
      <h2 class="about-contact__title">
        {{ title }}
      </h2>
      <p class="about-contact__description">
        {{ description }}
      </p>
    </div>

    <a
      class="about-contact__button"
      :href="`mailto:${email}`"
    >
      {{ action }}
    </a>
  </section>
</template>

<style scoped>
.about-contact {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: clamp(1.35rem, 2.5vw, 2rem);
  border: 1px solid var(--marketing-border);
  border-radius: 1.7rem;
  background:
    radial-gradient(circle at top left, rgba(243, 223, 154, 0.25), transparent 18rem),
    radial-gradient(circle at 82% 14%, rgba(190, 231, 234, 0.25), transparent 18rem),
    linear-gradient(145deg, rgba(255, 255, 255, 0.55) 0%, rgba(247, 250, 244, 0.55) 100%);
  box-shadow: 0 20px 42px rgba(28, 40, 31, 0.07);
}

.about-contact__eyebrow {
  margin: 0;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--marketing-accent);
}

.about-contact__title {
  margin: 0.65rem 0 0;
  font-size: clamp(1.55rem, 1.3rem + 0.72vw, 2.05rem);
  line-height: 1.08;
  color: var(--marketing-text);
}

.about-contact__description {
  max-width: 38rem;
  margin: 0.85rem 0 0;
  color: var(--marketing-muted);
  line-height: 1.75;
}

.about-contact__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: 0.8rem 1.15rem;
  border-radius: 0.95rem;
  background: var(--marketing-accent);
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 14px 32px rgba(71, 193, 99, 0.2);
  transition: transform 180ms ease, background-color 180ms ease;
}

.about-contact__button:hover {
  transform: translateY(-1px);
  background: color-mix(in srgb, var(--marketing-accent) 88%, white);
}

@media (max-width: 768px) {
  .about-contact {
    flex-direction: column;
    align-items: flex-start;
  }

  .about-contact__button {
    width: 100%;
  }
}
</style>
