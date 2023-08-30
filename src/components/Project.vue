<template>
  <div></div>
  <v-hover>
    <template v-slot="{ isHovering, props }">
      <v-card variant="flat" v-bind="props">
        <v-img class="text-white align-end"
               :src="getImage(thumbnail)"
               aspect-ratio="1.6"
               cover=""
               gradient="to top, rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.11) 36%, rgba(0, 0, 0, 0) 46%">

          <v-card-title class="project-title align-end">{{ title }}</v-card-title>
        </v-img>
        <v-overlay :model-value="isHovering" theme="dark" contained="" transition="fade-transition" class="align-center justify-center">
          <v-btn @click="gallery=true" tile class>Galleria</v-btn>
        </v-overlay>

        <v-dialog v-model="gallery" overlay-opacity="0.8" scroll-strategy="reposition">
          <v-card elevation="0" theme="dark">
            <v-carousel cycle="" hide-delimiters width="100%" height="auto" show-arrows="hover">
              <template v-for="(image, i) in image_gallery" :key="i">
                <v-carousel-item eager="">
                  <v-img :src="getImage(image)" contain max-height="500px" eager=""></v-img>
                </v-carousel-item>
              </template>
            </v-carousel>
            <v-card-text class="mt-5 text-center" justify="center">
              <v-row>
                <v-col cols="12">
                  <slot name="description"></slot>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-card>
    </template>
  </v-hover>
</template>

<style scoped>
.project-title {
  letter-spacing: .1em;
  text-transform: uppercase;
}
</style>

<script>
export default {
  name: 'project-item',
  data: () => ({
    gallery: false
  }),
  props: {
    title: String,
    thumbnail: String,
    description: String,
    image_gallery: Array
  },
  methods: {
    getImage: function (path) {
      return `src/assets/` + path
    }
  }
}
</script>