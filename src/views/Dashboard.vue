<template>
    <div>
        <v-img 
            class="fill-viewport"
            dark
            src="https://images.unsplash.com/photo-1554034483-04fda0d3507b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=1080">
        
            <v-layout fill-height align-center>
                <v-container>
                    <v-row align="center" justify="center">
                        <v-col cols="12">
                            Hi Im Andrea Petreti!
                        </v-col>
                    </v-row>
                </v-container>
            </v-layout>
        </v-img>
    
        <v-container>
            <v-row>
                <v-col class="text-h4">Recent Works</v-col>
            </v-row>
            <v-row>
                <template v-for="(project, index) in projects">
                    <v-col md6 xs12 class="mx-auto" :key="index"> <!-- col-md-6  col-12-xsmall project mx-auto -->
                        <project :title="project.title" >
                            <template #description>{{ project.description }}</template>
                        </project>
                    </v-col> 
                </template>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import Project from '@/components/Project'

export default {
    components: {
        'project': Project
    },
    data: () => ({
        projects: [
            {
                title: 'Subspedia',
                description: `Application developed for <a target="_blank" href="https://www.subspedia.tv/"> subspedia.tv</a>. It allows the management of their favorite TV series and the download of subtitles produced by the Subpsedia community.`
            },
            {
                title: 'Subspedia',
                description: `Application developed for <a target="_blank" href="https://www.subspedia.tv/"> subspedia.tv</a>. It allows the management of their favorite TV series and the download of subtitles produced by the Subpsedia community.`
            },
            {
                title: 'Subspedia',
                description: `Application developed for <a target="_blank" href="https://www.subspedia.tv/"> subspedia.tv</a>. It allows the management of their favorite TV series and the download of subtitles produced by the Subpsedia community.`
            },
            {
                title: 'Subspedia',
                description: `Application developed for <a target="_blank" href="https://www.subspedia.tv/"> subspedia.tv</a>. It allows the management of their favorite TV series and the download of subtitles produced by the Subpsedia community.`
            }
        ]
    })
}
</script>

<style scoped>
.fill-viewport {
    height: 100vh;
}
</style>