<template>
  <v-app-bar fixed elevate-on-scroll ref="appbar" :color="appBarColor" dark>
      <v-container>
        <v-layout>
          <div>
            <v-btn text>Andrea Petreti</v-btn>
          </div>
          <v-spacer></v-spacer>

          <v-toolbar-items class="text-right hidden-sm-and-down">
            <template v-for="item in menu">
              <v-btn :key="item.goto_id"
                :x-small="$vuetify.breakpoint.smAndDown"
                @click="$vuetify.goTo(item.goto_id,options)" 
                text> {{ item.section_name }}</v-btn>
            </template>
          </v-toolbar-items>

          <v-menu class="hidden-md-and-up">
            <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
            <v-list>
              <v-list-tile v-for="item in menu" :key="item.goto_id">
                <v-list-tile-content><v-list-tile-title>{{ item.section_name }}</v-list-tile-title></v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-layout>
      </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    appBarScrolled: false,
    menu: [
      { section_name: "About Me", goto_id: "#section-about-me"},
      { section_name: "My Work", goto_id: "#portfolio"},
      { section_name: "Contact", goto_id: "#contact"}
    ]
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