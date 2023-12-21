<template>
  <v-app>
    <multilevel-menu v-model="isDrawerOpen" :menu="menu" nav/>
    <v-app-bar app :class="[`base-layout__bar--${headerVariant}`]">
      <v-app-bar-nav-icon @click="isDrawerOpen = true"/>

      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <slot/>
      </v-container>
    </v-main>

    <v-footer app>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias asperiores consequuntur corporis dolor expedita
      fugit hic mollitia nisi, quaerat repellendus, reprehenderit sit vitae voluptatem voluptatibus. Adipisci alias
      blanditiis dolor odio officia officiis quae vel. Accusantium aut consectetur ex facilis illum natus quas, sapiente
      sed soluta sunt velit vitae, voluptates?
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import type {TMenu} from "@/components/multilevel-menu";
import MultilevelMenu from "@/components/multilevel-menu";

withDefaults(defineProps<{
  headerVariant?: 'transparent' | 'white'
}>(), {
  headerVariant: 'transparent'
});

const isDrawerOpen = ref<boolean>(false);

const menu: TMenu[] = [
  {
    title: 'Ссылка на 1 страницу',
    to: '/'
  },
  {
    title: 'Ссылка на 2 страницу',
    to: '/second'
  },
  {
    title: 'Пункт меню с 1 подменю',
    children: [
      {
        title: 'Элемент меню'
      },
      {
        title: 'Элемент меню'
      },
      {
        title: 'Еще ссылка на 1 страницу',
        to: '/'
      },
      {
        title: 'Еще ссылка на 2 страницу',
        to: '/second'
      },
    ]
  },
  {
    title: 'Пункт меню с 2 подменю',
    children: [
      {
        title: 'Пункт меню с 1 подменю',
        children: [
          {
            title: 'Элемент меню'
          }
        ],
      }
    ]
  },
  {
    title: 'Пункт меню с 3 подменю',
    children: [
      {
        title: 'Пункт меню с 2 подменю',
        children: [
          {
            title: 'Пункт меню с 1 подменю',
            children: [
              {
                title: 'Элемент меню'
              },
              {
                title: 'Элемент меню'
              },
              {
                title: 'Элемент меню'
              },
              {
                title: 'Очень вложенная ссылка на 1 страницу',
                to: '/'
              },
              {
                title: 'Очень вложенная ссылка на 2 страницу',
                to: '/second'
              },
            ],
          },
          {
            title: 'Элемент меню'
          },
          {
            title: 'Элемент меню'
          }
        ],
      },
      {
        title: 'Элемент меню'
      },
      {
        title: 'Элемент меню'
      }
    ]
  }
]
</script>

<style lang="scss" scoped src="./base-layout.scss"></style>
