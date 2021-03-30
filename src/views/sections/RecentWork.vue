<template>
    <v-container>
        <v-row>
            <v-col class="text-h4">Progetti Recenti</v-col>
        </v-row>
        <v-row>
            <template v-for="(project, index) in projects">
                <v-col md6 xs12 class="mx-auto d-flex" :key="index"  style="flex-direction:column"> <!-- col-md-6  col-12-xsmall project mx-auto -->
                    <project class="flex-grow-1" :title="project.title" :thumbnail="project.thumbnail" :image_gallery="project.image_gallery">
                        <template #description><div v-html=project.description /></template>
                    </project>
                </v-col>
            </template>
        </v-row>
    </v-container>
</template>

<script>
import Project from '@/components/Project'
import works from '@/work.json'

export default {
    components: {
        'project': Project
    },
    data: () => ({
        projects: works
    })
}
</script>