<template>
    <v-hover>
        <template v-slot:default="{ hover }">
            <v-card flat>
                <v-img class="white--text align-end" 
                        :src="getImage(thumbnail)"
                        aspect-ratio="1.6"
                        gradient="to top, rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.11) 36%, rgba(0, 0, 0, 0) 46%">

                    <v-card-title class="project-title">{{title}}</v-card-title>
                </v-img>
                <v-fade-transition>
                    <v-overlay v-if="hover" absolute dark >
                        <v-btn @click="gallery=true" tile>Galleria</v-btn>
                    </v-overlay>
                </v-fade-transition>

                <v-dialog v-model="gallery" overlay-opacity="0.8">
                    <v-card elevation="0" dark>
                        <v-carousel cycle hide-delimiters width="100%" height="auto" show-arrows-on-hover>
                            <template v-for="(image, i) in image_gallery">
                                <v-carousel-item :key="i">
                                    <v-img :src="getImage(image)" contain max-height="500px"></v-img>
                                </v-carousel-item>
                            </template>
                        </v-carousel>
                        <v-card-text class="mt-5 text-center" justify="center">
                            <v-row>
                                <v-col cols="12"><slot name="description"></slot></v-col>
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
        getImage: function(path) {
            return require(`@/assets/` + path)
        }
    }
}
</script>