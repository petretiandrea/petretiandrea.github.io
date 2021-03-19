<template>
    <v-card @click.stop="gallery=true">
        <v-img :src="getImage(thumbnail)" max-width="250" max-height="100">
        </v-img>
        <v-card-title>{{title}}</v-card-title>
        <v-card-text>
            <slot name="description"></slot>
        </v-card-text>

        <v-dialog v-model="gallery" max-width="300">
            <template>
                <v-carousel cycle hide-delimiters show-arrows-on-hover>
                    <template v-for="(image, i) in image_gallery">
                        <v-carousel-item :key="i">
                            <v-img :src="getImage(image)" contain></v-img>
                        </v-carousel-item>
                    </template>
                </v-carousel>
            </template>
        </v-dialog>
    </v-card>
</template>



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