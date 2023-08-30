<template>
  <v-container class="text-white py-16 px-4 strict-container">
    <v-row>
      <v-col class="text-h4">Su di me</v-col>
    </v-row>
    <v-row>
      <v-col class="mx-auto">
        Ho conseguito la laurea triennale in Informatica Applicata presso Urbino, ho in seguito deciso di approfondire
        il
        percorso di studi con una laurea magistrale in Ingegneria e Scienze Informatiche presso l'Università di Bologna
        (sede Cesena).
        Durante quest'ultimo percorso ho deciso di focalizzarmi verso il mondo dell'ingegneria del software; amo la
        qualità del codice.
        Il percorso di studi, inoltre, mi ha consentito di acquisire abilità relative alla Computer Vision sia mediante
        tecniche tradizionali sia tramite machine learning.
        Sono particolarmente appassionato al mondo relativo all'IoT, alla robotica e all'intelligenza artificiale. In
        generale mi diverto con ogni sfida relativa al mondo dell'IT.
      </v-col>
      <v-col cols="12" md="6" align-self="center" justify="center">
        <v-timeline theme="dark" clipped :density="$vuetify.display.smAndDown ? 'comfortable' : 'default'">
          <!-- eslint-disable-next-line vue/no-v-for-template-key -->
          <template v-for="(experience, index) in experiences" :key="index">
            <v-timeline-item :dot-color="experience.color" :icon="experience.icon" icon-color="white" fill-dot>
              <template v-slot:opposite>
                <span :class="`text-h5 font-weight-bold text-${experience.color}`">
                    {{ formatFromDate(experience.from) }}
                </span>
              </template>
              <div class="py-4">
                <h2 :class="`text-h5 font-weight-light mb-4 text-${experience.color} ${timelineTextAlign(index)}`"
                    v-html="experience.title"></h2>
                <div :class="`${timelineTextAlign(index)}`">{{ experience.description }}</div>
              </div>
            </v-timeline-item>
          </template>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import experiencesYaml from '@/data/experiences.yaml'

export default {
  data: () => ({
    experiences: experiencesYaml.experiences.reverse()
  }),
  methods: {
    timelineTextAlign: function (index) {
      if (this.$vuetify.display.smAndDown) return "text-start ";
      return (index % 2 === 0) ? "text-start" : "text-end";
    },
    formatFromDate: function (date) {
      return this.capitalize(this.format_date(date))
    },
    format_date: function (date_str) {
      if (!date_str) return ''
      let date = new Date(date_str);
      const month = date.toLocaleString('default', {month: 'long'});
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