<template>
  <div class="p-4 md:w-1/2 md" style="max-width: 544px">
    <div
      class="col-span-1 h-full p-6 flex flex-col overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700"
    >
    <h2 class="text-2xl font-bold leading-8 tracking-tight mb-3">
          {{ projectTitle }}
        </h2>
        <NuxtImg :src="projectThumbnail"/>
        <p class="prose text-gray-500 max-w-none dark:text-gray-400 mb-3 h-auto" v-html="projectDescription"></p>
        <div class="flex flex-wrap mt-auto justify-between">
          <div class="mx-1" v-if="projectGithub">
              <a
                class="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                :href="projectGithub"
                ><span class="sr-only">github</span
                ><Icon class="w-4 h-4" name="fa:github"
              /></a>
            </div>
        </div>
        <div class="flex flex-wrap mt-2">
          <div class="text-gray-400 text-sm font-extralight">
              {{ formatTags(projectTags) }}
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "thumbnail", "github", "tags"],
  data() {
    return {
      projectTitle: this.title,
      projectDescription: this.description,
      projectGithub: this.github,
      projectTags: this.tags,
      projectThumbnail: this.thumbnail
    };
  },
  methods: {
    formatTags: (tags) => {
      console.log(tags)
      return (tags ?? []).join(' • ')
    }
  }
};
</script>

<style></style>