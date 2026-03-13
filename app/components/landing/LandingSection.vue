<script setup lang="ts">
const props = withDefaults(defineProps<{
  id?: string
  eyebrow?: string
  title?: string
  description?: string
  tone?: 'default' | 'contrast' | 'cta'
  align?: 'left' | 'center'
}>(), {
  tone: 'default',
  align: 'center',
})

const { isVisible, target } = useReveal()
</script>

<template>
  <section
    :id="props.id"
    ref="target"
    class="marketing-section marketing-reveal"
    :class="[
      `marketing-section--${props.tone}`,
      props.align === 'center' ? 'marketing-section--centered' : '',
      { 'is-visible': isVisible },
    ]"
  >
    <div class="marketing-shell">
      <div
        v-if="props.eyebrow || props.title || props.description || $slots.intro"
        class="marketing-section__intro"
      >
        <slot name="intro">
          <p
            v-if="props.eyebrow"
            class="marketing-kicker"
          >
            {{ props.eyebrow }}
          </p>
          <h2
            v-if="props.title"
            class="marketing-section__title"
          >
            {{ props.title }}
          </h2>
          <p
            v-if="props.description"
            class="marketing-section__description"
          >
            {{ props.description }}
          </p>
        </slot>
      </div>

      <div class="marketing-section__body">
        <slot />
      </div>
    </div>
  </section>
</template>
