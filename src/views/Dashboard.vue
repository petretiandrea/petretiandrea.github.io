<template>
    <div>
        <v-parallax class="fill-viewport"
            height="100vh"
            dark
            src="https://images.unsplash.com/photo-1554034483-04fda0d3507b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=1080">
            <v-row fill-height align="center" justify="center">
                <v-content class="text-center">
                    <v-row align="center" justify="center">   
                        <v-col class="text-right">
                            <v-avatar size="100">
                                <img :src="require('@/assets/my-avatar.png')" alt="Andrea Petreti"/>
                            </v-avatar>
                        </v-col>
                        <v-col class="text-left">
                            Ciao, sono Andrea Petreti!
                        </v-col>
                        <v-col cols="12">
                            <v-btn text icon href="https://github.com/petretiandrea" target="_blank"><v-icon >mdi-github</v-icon></v-btn>
                            <v-btn text icon href="https://www.linkedin.com/in/andrea-petreti/" target="_blank"><v-icon>mdi-linkedin</v-icon></v-btn>
                            <v-btn text icon href="mailto:petretiandrea@gmail.com" target="_blank"><v-icon>mdi-email</v-icon></v-btn>
                            <v-btn text icon href="https://profile.codersrank.io/user/petretiandrea" target="_blank">
                                <icon data="@/assets/icons/coders-rank.svg" width="24" color="#0000008a"/>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-content>
            </v-row>
        </v-parallax>
    
        <section class="section-about-me dark-grey" id="section-about-me">
            <about-me />
        </section>

        <section class="section-project" id="recent-works">
            <work-section/>
        </section>
    </div>
</template>



<script>
import workSection from '@/views/sections/RecentWork'
import aboutMe from '@/views/sections/AboutMe'

export default {
    components: {
        'work-section': workSection,
        'about-me': aboutMe
    }
}
</script>

<style scoped>
.dark-grey {
    background-color: #212529 !important;
}
.fill-viewport {
    height: 100vh;
}
.section-about-me {
    background-color: white;/*#eee!important;*/
}
.section-project {
    background-color: #eee;
}
</style>