<template>
  <v-app-bar fixed elevate-on-scroll ref="appbar" :color="appBarColor" dark>
    <v-layout justify-center>
      <v-container>
        <v-layout>
          <div>
            <v-btn text>Andrea Petreti</v-btn>
          </div>
          <v-spacer></v-spacer>
          <v-toolbar-items class="text-right">
            <v-btn
              :x-small="$vuetify.breakpoint.smAndDown"
              @click="$vuetify.goTo('#section-about-me',options )"
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
  data: () => ({
    appBarScrolled: false
  }),
  computed: {
    appBarColor: function() {
      return this.appBarScrolled ? 'grey' : 'transparent';
    }
  },
  mounted: function() {
    this.$watch("$refs.appbar.hideShadow", newValue => {
      this.appBarScrolled = !newValue
    });
  }
}
</script>

<style scoped>
.scrolled-bar {
  color: #616161 !important
}
</style>