<template>
    <v-card>
        <v-img :src="thumbnail">
            <v-card-title>{{title}}</v-card-title>
        </v-img>
        <v-card-text>
            <slot name="description"></slot>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'project',
    props: {
        title: String,
        thumbnail: String,
        description: String
    }
}
</script>