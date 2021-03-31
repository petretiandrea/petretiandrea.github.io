<template>
    <v-container class="white--text py-16 px-4">
        <v-row><v-col class="text-h4" >About Me</v-col></v-row>
        <v-row>
            <v-col class="mx-auto">
                I have a master's degree in computer science.  I'm passionate about all IT world: quality code lover, IoT, software engineering and AI.
            </v-col>
            <v-col cols="12" md="6" align="center" justify="center">
                <v-timeline dark clipped :dense="$vuetify.breakpoint.smAndDown">
                    <template v-for="(experience, index) in experiences">
                        <v-timeline-item :key="index" small :color="experience.color" dark>
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