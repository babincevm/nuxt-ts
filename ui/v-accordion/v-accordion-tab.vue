<template>
  <v-expansion-panel :value="value">
    <v-expansion-panel-title v-if="title">
      <v-row no-gutters>
        {{ title }}
      </v-row>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <slot/>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  value?: string;
}>();
</script>
