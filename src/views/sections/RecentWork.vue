<template>
    <v-container class="py-16 px-4">
        <v-row>
            <v-col class="text-h4">Progetti Recenti</v-col>
        </v-row>
        <v-row v-masonry="`project-gallery`" item-selector=".item" class="masonry-container" transition-duration="0.3s">
            <template  v-for="(project, index) in projects">
                <v-col md="4" sm="6" v-masonry-tile class="item" :key="index">
                    <project @ready="$redrawVueMasonry('project-gallery')" :title="project.title" :thumbnail="project.thumbnail" :image_gallery="project.image_gallery">
                        <template #description><div v-html=project.description /></template>
                    </project>
                </v-col>
            </template>
        </v-row>
    </v-container>
</template>

<script>
import Project from '@/components/Project'
import works from '@/data/work.json'

export default {
    components: {
        'project': Project
    },
    data: () => ({
        projects: works
    })
}
</script>