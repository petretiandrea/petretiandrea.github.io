<template>
  <div>
    <v-parallax class="fill-viewport"
                height="100vh"
                src="https://images.unsplash.com/photo-1554034483-04fda0d3507b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=1080"
    >
      <v-row align="center" justify="center" class="fill-height">
        <v-container class="text-center strict-container">
          <v-row align="center">
            <v-col class="text-end">
              <v-avatar size="150">
                <img height="150" src="@/assets/my-avatar.jpeg" alt="Andrea Petreti"/>
              </v-avatar>
            </v-col>
            <v-col class="text-start text-white text-h6">
              Ciao, sono Andrea Petreti!
            </v-col>
            <v-col cols="12">
              <v-btn variant="plain" icon="mdi-github" density="comfortable" href="https://github.com/petretiandrea" target="_blank"/>
              <v-btn variant="plain" icon="mdi-linkedin" density="comfortable"  href="https://www.linkedin.com/in/andrea-petreti/" target="_blank"/>
              <v-btn variant="plain" icon="mdi-email" density="comfortable" href="mailto:petretiandrea@gmail.com" target="_blank"/>
              <!--              <v-btn variant="text" icon href="https://profile.codersrank.io/user/petretiandrea" target="_blank">-->
              <!--                <icon-svg data="@/assets/icons/coders-rank.svg" width="24" color="#0000008a"/>-->
              <!--              </v-btn>-->
            </v-col>
            <v-col cols="12" v-if="$vuetify.display.smAndDown">
              <dropdown-c-v>
                <template v-slot:default="{ props }">
                  <v-btn variant="outlined" color="white" large v-bind="props">Il mio curriculum</v-btn>
                </template>
              </dropdown-c-v>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </v-parallax>

    <section class="section-about-me dark-grey" id="section-about-me">
      <about-me/>
    </section>

    <section class="section-project" id="recent-works">
      <work-section/>
    </section>

    <v-footer class="dark-grey" padless id="contact">
      <v-card variant="flat" tile class="dark-grey lighten-1 text-white text-center" width="100%">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon.icon"
                 class="mx-4 text-white"
                 variant="plain"
                 color="white"
                 :icon="icon.icon"
                 :href="icon.link"
                 density="comfortable"
                 target="_blank"/>
          <!-- TODO: add vertical divider <v-divider :key="icon" vertical color="white"/> -->
        </v-card-text>
        <v-divider theme="dark" class="inset-both"></v-divider>
        <v-card-text class="text-white">
          {{ new Date().getFullYear() }} — <strong>Andrea Petreti</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>


<script setup>
import workSection from '@/views/sections/RecentWork'
import aboutMe from '@/views/sections/AboutMe'
import DropdownCV from "@/components/DropdownCV";

const icons = [
  {
    icon: 'mdi-github',
    link: 'https://github.com/petretiandrea'
  },
  {
    icon: 'mdi-linkedin',
    link: 'https://www.linkedin.com/in/andrea-petreti/'
  },
  {
    icon: 'mdi-email',
    link: 'mailto:petretiandrea@gmail.com'
  }
]
</script>

<style scoped>
.inset-both {
  margin-left: 72px;
  margin-right: 72px;
}

.dark-grey {
  background-color: #212529 !important;
}

.fill-viewport {
  height: 100vh;
}

.section-about-me {
  background-color: white; /*#eee!important;*/
}

.section-project {
  background-color: #eee;
}
</style>