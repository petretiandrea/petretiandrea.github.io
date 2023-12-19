<template>
  <div class="opacity-100 mt-10">
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
      <template v-for="(experience, index) in experiences" :key="index">
        <li class="mb-10 ml-6">
          <span 
            class="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
            :class="`bg-${experience.color}-500`"
          >
            <Icon :name="experience.icon" color="white" class="w-3 h-3"/>
          </span>
          <h3 class="flex items-center mb-1 text-lg font-semibold dark:text-white"
            :class="`text-${experience.color}-500`"
          >
            {{experience.title}}
            <span v-if="experience.currently" class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Attualmente</span>
          </h3>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ formatFromDate(experience.from) }}</time>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{{experience.description}}</p>
        </li>
      </template>
    </ol>
  </div>
</template>

<script>
import experiencesYaml from '@/data/experiences.yaml'

export default {
  data: () => ({
    experiences: experiencesYaml.experiences.reverse()
  }),
  methods: {
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
    },
    colorToBackground: function(text, intensity) {
      return `bg-${text}-${intensity}`
    }
  },
}
</script>

<style></style>