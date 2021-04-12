<template>
    <v-container class="white--text py-16 px-4">
        <v-row><v-col class="text-h4" >About Me</v-col></v-row>
        <v-row>
            <v-col class="mx-auto">
                Ho conseguito la laurea triennale in Informatica Applicata presso Urbino, ho in seguito deciso di approfondire il 
      percorso di studi con una laurea magistrale in Ingegneria e Scienze Informatiche presso l'Università di Bologna (sede Cesena).
      Durante quest'ultimo percorso ho deciso di focalizzarmi verso il mondo dell'ingegneria del software; amo la qualità del codice.
      Il percorso di studi, inoltre, mi ha consentito di acquisire abilità relative alla Computer Vision sia mediante tecniche tradizionali sia tramite machine learning.
      Sono particolarmente appassionato al mondo relativo all'IoT, alla robotica e all'intelligenza artificiale. In generale mi diverto con ogni sfida relativa al mondo dell'IT. 
            </v-col>
            <v-col cols="12" md="6" align="center" justify="center">
                <v-timeline dark clipped :dense="$vuetify.breakpoint.smAndDown">
                    <template v-for="(experience, index) in experiences">
                        <v-timeline-item :key="index" :color="experience.color" :icon="experience.icon" fill-dot dark>
                            <template v-slot:opposite>
                                <span :class="`headline font-weight-bold ${experience.color}--text`">
                                    {{ experience.from | format_date | capitalize }}
                                </span>
                            </template>
                            <div class="py-4">
                                <h2 :class="`headline font-weight-light mb-4 ${experience.color}--text ${timelineTextAlign(index)}`" 
                                v-html="experience.title"></h2>
                                <div :class="`${timelineTextAlign(index)}`">{{experience.description}}</div>
                            </div>
                        </v-timeline-item>
                    </template>
                </v-timeline>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import experiences from '@/data/experiences.json'

export default {
    data: () => ({
        experiences: experiences.reverse()
    }),
    methods: {
        timelineTextAlign: function(index) {
            if (this.$vuetify.breakpoint.smAndDown) return "text-left";
            return (index % 2 == 0) ? "text-left" : "text-right";
        }
    },
    filters: {
        format_date: function (date_str) {
            if (!date_str) return ''
            let date = new Date(date_str);
            const month = date.toLocaleString('default', { month: 'long' });
            const year = date.getFullYear();
            return `${month.toString()} ${year}`
        },
        capitalize: function (text) {
            if (!text) return ''
            return text.charAt(0).toUpperCase() + text.slice(1)
        }
    }
}
</script>