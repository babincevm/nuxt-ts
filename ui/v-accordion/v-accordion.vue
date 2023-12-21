<template>
  <v-expansion-panels
      :variant="spacedWhenOpened ? undefined : 'accordion'"
      :disabled="disabled"
      :multiple="multiple"
  >
    <slot/>
  </v-expansion-panels>
</template>

<script setup lang="ts">
defineProps<{
  spacedWhenOpened?: boolean;
  multiple?: boolean;
  disabled?: boolean;
}>();
</script>
