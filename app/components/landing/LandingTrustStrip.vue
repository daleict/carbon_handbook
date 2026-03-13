<script setup lang="ts">
type TrustItem = {
  icon?: string
  name: string
  description: string
}

defineProps<{
  label?: string
  items: TrustItem[]
}>()

const { isVisible, target } = useReveal()
</script>

<template>
  <section
    ref="target"
    class="marketing-trust marketing-reveal"
    :class="{ 'is-visible': isVisible }"
  >
    <div class="marketing-shell marketing-trust__shell">
      <p
        v-if="label"
        class="marketing-trust__label"
      >
        {{ label }}
      </p>

      <div class="marketing-trust__items">
        <article
          v-for="item in items"
          :key="item.name"
          class="marketing-trust__item"
        >
          <span class="marketing-trust__icon">
            <UIcon :name="item.icon || 'i-lucide-badge-check'" />
          </span>

          <div>
            <p class="marketing-trust__name">
              {{ item.name }}
            </p>
            <p class="marketing-trust__description">
              {{ item.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
