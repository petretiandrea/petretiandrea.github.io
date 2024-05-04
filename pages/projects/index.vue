<template>
  <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
    <div class="pt-6 pb-8 space-y-2 md:space-y-5">
      <h1
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
      >
        {{$t('project_page_title')}}
      </h1>
      <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">
        {{ $t('project_page_description') }}
      </p>
    </div>
    <main class="relative mb-auto">
      <div class="">
        <div class="container py-12">
          <div class="flex flex-wrap -m-4">
            <project-card
              v-for="item in projects"
              :key="item.title"
              :title="item.title"
              :description="item.description"
              :github="item.github"
              :thumbnail="item.thumbnail"
              :tags="item.tags"
            ></project-card>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const { locale } = useI18n();
const {data: projects} = await useAsyncData('projects', () => queryContent(`${locale.value}/projects`).findOne().then(data => data.works));
</script>

<script>
export default {
  head: {
    title: "Md Solaiman | Projects",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Some of Projects developed by Solaiman",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
};
</script>