<template>
    <v-container class="py-16 px-4">
        <v-row>
            <v-col class="text-h4">Progetti Recenti</v-col>
        </v-row>
        <v-row dense class="mt-3">
            <v-col v-for="(project, index) in projects" :key="index" class="d-flex child-flex" cols="12" xl="3" lg="4" md="6" sm="6">
                <project-item :title="project.title" 
                        :thumbnail="project.thumbnail" 
                        :image_gallery="project.image_gallery">
                    <template #description><div v-html=project.description /></template>
                </project-item>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Project from '@/components/Project'
import works from '@/data/work.yml'

export default {
    components: {
        'project-item': Project
    },
    data: () => ({
        projects: works.works
    })
}
</script>