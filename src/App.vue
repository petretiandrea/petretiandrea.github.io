<template>
  <v-app>
    <AppBar/>
    <v-main class="pt-0">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import AppBar from './components/AppBar.vue'
</script>
