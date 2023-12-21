<template>
  <v-navigation-drawer
      v-model="isOpen"
      temporary
      tag="aside"
      :order="-depth"
      :width="300 + (100 * depth)"
      class="pt-5 pb-5"
  >
    <v-row v-if="depth > 0" class="pl-4 pr-4 mb-5">
      <v-col>
        <v-btn icon="mdi-chevron-left" variant="text" @click="$emit('update:modelValue', false)"/>
      </v-col>
    </v-row>
    <v-list density="compact" v-if="menu" :nav="nav">
      <v-list-item
          v-for="(menuItem, index) in menu"
          :value="menuItem.title"
          :to="menuItem.to"
          :active="menuItem.to ? undefined : false"
          :key="`${menuItem.title}-${index}`"
          :append-icon="menuItem.children ? 'mdi-chevron-right' : undefined"
          @click="submenuOpenModels[index] = true"
      >
        <v-list-item-title>
          {{ menuItem.title }}
        </v-list-item-title>


        <teleport to="body" v-if="menuItem.children">
          <multilevel-menu
              :menu="menuItem.children"
              v-model="submenuOpenModels[index]"
              :depth="depth + 1"
              :nav="nav"
          />
        </teleport>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">

import {useVModel} from "@vueuse/core";
import type {TMenu} from "~/components/multilevel-menu/types";

const props = withDefaults(defineProps<{
  modelValue?: boolean;
  menu: TMenu[];
  depth?: number;
  nav?: boolean;
}>(), {
  depth: 0,
});
const emit = defineEmits(['update:modelValue']);

const isOpen = useVModel(props, 'modelValue', emit);
const submenuOpenModels = ref<boolean[]>(Array(props.menu.length).fill(false));
</script>
