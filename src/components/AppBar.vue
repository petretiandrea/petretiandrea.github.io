<template>
  <v-app-bar fixed elevate-on-scroll v-scroll:#scroll-target="onScroll" color="transparent" dark height="120px">
    <v-layout justify-center>
      <v-container>
        <v-layout>
          <div :class="{'display-1 font-weight-bold': $vuetify.breakpoint.smAndUp,'title font-weight-bold': $vuetify.breakpoint.smAndDown, }">
            Andrea Petreti
          </div>
          <v-spacer></v-spacer>
          <v-toolbar-items class="text-right">
            <v-btn
              :x-small="$vuetify.breakpoint.smAndDown"
              @click="$vuetify.goTo('#about',options )"
              text
            >About Me</v-btn>
            <v-btn
              :x-small="$vuetify.breakpoint.smAndDown"
              @click="$vuetify.goTo('#portfolio',options )"
              text
            >My Work</v-btn>
            <v-btn
              :x-small="$vuetify.breakpoint.smAndDown"
              @click="$vuetify.goTo('#contact',options )"
              text
            >Contact</v-btn>
          </v-toolbar-items>
        </v-layout>
      </v-container>
    </v-layout>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    onScroll: (e) => {
      console.log(e)
    }
  }
}
</script>

<style scoped>
.scrolled-bar {
  color: #616161 !important
}
</style>