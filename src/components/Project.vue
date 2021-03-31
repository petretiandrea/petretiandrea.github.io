<template>
    <v-card @click="gallery=true">
        <v-img :src="getImage(thumbnail)" @load="$emit('ready')">
        </v-img>
        <v-card-title>{{title}}</v-card-title>
        <v-dialog v-model="gallery">
            <v-card>
                <template>
                    <v-carousel cycle hide-delimiters show-arrows-on-hover height="auto">
                        <template v-for="(image, i) in image_gallery">
                            <v-carousel-item :key="i">
                                <v-row class="fill-height" align="center" justify="center">
                                    <v-img :src="getImage(image)" ></v-img>
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