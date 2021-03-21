<template>
    <v-card @click="gallery=true" max-width="600">
        <v-img :src="getImage(thumbnail)" max-height="150">
        </v-img>
        <v-card-title>{{title}}</v-card-title>
        <v-card-text>
            <slot name="description"></slot>
        </v-card-text>
        <v-dialog v-model="gallery">
            <v-card>
                <template>
                    <v-carousel cycle hide-delimiters show-arrows-on-hover height="auto">
                        <template v-for="(image, i) in image_gallery">
                            <v-carousel-item :key="i">
                                <v-img :src="getImage(image)"></v-img>
                            </v-carousel-item>
                        </template>
                    </v-carousel>
                </template>
            </v-card>
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