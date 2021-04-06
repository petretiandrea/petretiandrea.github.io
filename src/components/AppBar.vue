<template>
  <v-app-bar fixed elevate-on-scroll ref="appbar" :color="appBarColor" dark>
      <v-container>
        <v-layout>
          <v-btn text>Andrea Petreti</v-btn>
          <v-spacer></v-spacer>

          <v-toolbar-items class="text-right hidden-sm-and-down">
            <template v-for="item in menu">
              <v-btn :key="item.goto_id"
                :x-small="$vuetify.breakpoint.smAndDown"
                @click="menuItemClick(item)" 
                text> {{ item.section_name }}</v-btn>
            </template>
          </v-toolbar-items>

          <v-menu v-if="isMobile" class="hidden-md-and-up">
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon color="white">mdi-menu</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="item in menu" :key="item.goto_id">
                  <v-list-item-title @click="menuItemClick(item)">
                    {{ item.section_name }}
                  </v-list-item-title>
              </v-list-item>
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
      { section_name: "Su di me", goto_id: "#section-about-me"},
      { section_name: "Progetti", goto_id: "#recent-works"},
      { section_name: "Contatti", goto_id: "#contact"},
      { section_name: "Curriculum", ref: "/cv"}
    ]
  }),
  methods: {
    menuItemClick: function(item) {
      if('goto_id' in item) {
        this.$vuetify.goTo(item.goto_id, this.options)
      } else if('ref' in item) {
        window.location.href = item.ref
      }
    }
  },
  computed: {
    appBarColor: function() {
      return this.appBarScrolled ? '#212529' : 'transparent';
    },
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
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