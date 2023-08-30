<template>
  <v-app-bar scroll-behavior="elevate" fixed :color="appBarColor" theme="dark">
      <v-container class="strict-container">
        <v-layout>
          <v-btn variant="text" class="text-white">Andrea Petreti</v-btn>
          <v-spacer></v-spacer>

          <v-toolbar-items class="text-end hidden-sm-and-down text-white" >
            <template v-for="item in menu" :key="item.tag">
              <dropdown-c-v v-if="item.tag === 'cv'">
                <template v-slot:default="{ props }">
                  <v-btn :x-small="$vuetify.display.smAndDown" variant="text" v-bind="props">{{ item.section_name }}</v-btn>
                </template>
              </dropdown-c-v>
              <v-btn
                v-else
                :x-small="$vuetify.display.smAndDown"
                @click="menuItemClick(item)"
                variant="text">{{ item.section_name }}</v-btn>
            </template>
          </v-toolbar-items>

          <v-menu v-if="isMobile" class="hidden-md-and-up">
            <template v-slot:activator="{ props }">
              <v-btn icon v-bind="props">
                <v-icon color="white">mdi-menu</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="item in hamburgerMenuItems" :key="item.tag">
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

import DropdownCV from "@/components/DropdownCV.vue";

export default {
  components: {DropdownCV},
  data: () => ({
    appBarScrolled: false,
    menu: [
      { section_name: "Su di me", tag: "about", goto_id: "#section-about-me"},
      { section_name: "Progetti", tag: "works", goto_id: "#recent-works"},
      { section_name: "Contatti", tag: "contact", goto_id: "#contact"},
      { section_name: "Curriculum", tag: "cv" }
    ]
  }),
  methods: {
    menuItemClick: function(item) {
      if('goto_id' in item) {
        this.$vuetify.goTo(item.goto_id, this.options)
      }
    },
    handleScroll: function () {
      const currentPosition = window.scrollY
      this.appBarScrolled = currentPosition !== 0;
    }
  },
  computed: {
    hamburgerMenuItems: function () {
      return this.menu.filter(item => item.tag !== 'cv')
    },
    appBarColor: function() {
      return this.appBarScrolled ? '#212529' : '#FFFFFF00';
    },
    isMobile() {
      return this.$vuetify.display.smAndDown;
    }
  },
  mounted: function() {
    window.addEventListener("scroll", this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
}
</script>

<style scoped>
.scrolled-bar {
  color: #616161 !important
}
</style>