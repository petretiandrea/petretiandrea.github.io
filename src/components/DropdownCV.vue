<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <slot :props="props"></slot>
    </template>
    <v-list>
      <v-list-item href="/cv">Vedi</v-list-item>
      <v-list-item href="assets/cvs/andreapetreti-en.pdf">Scarica ENG</v-list-item>
      <v-list-item href="assets/cvs/andreapetreti-it.pdf">Scarica ITA</v-list-item>
    </v-list>
  </v-menu>
</template>