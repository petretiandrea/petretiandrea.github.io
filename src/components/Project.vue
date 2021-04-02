<template>
    <v-hover>
        <template v-slot:default="{ hover }">
            <v-card>
                <v-img class="white--text align-end" 
                        :src="getImage(thumbnail)"
                        aspect-ratio="1.6"
                        @load="$emit('ready')" 
                        gradient="to top, rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.11) 36%, rgba(0, 0, 0, 0) 46%">

                    <v-card-title>{{title}}</v-card-title>
                </v-img>
                <v-fade-transition>
                    <v-overlay v-if="hover" absolute dark >
                        <v-btn @click="gallery=true">Galleria</v-btn>
                    </v-overlay>
                </v-fade-transition>

                <v-dialog v-model="gallery">
                    <v-card>
                        <template>
                            <v-carousel cycle hide-delimiters show-arrows-on-hover>
                                <template v-for="(image, i) in image_gallery">
                                    <v-carousel-item :key="i">
                                        <v-row>
                                            <v-img :lazy-src="getImage(image)" contain></v-img>
                                        </v-row>
                                        <v-row>
                                            <div class="black--text"><slot name="description"></slot></div>
                                        </v-row>
                                    </v-carousel-item>
                                </template>
                            </v-carousel>
                        </template>
                    </v-card>
                </v-dialog>
            </v-card>
        </template>
    </v-hover>
</template>

<style scoped>

</style>

<script>
export default {
    name: 'project',
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