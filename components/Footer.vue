<template>
  <footer>
    <div class="flex flex-col items-center pt-16 dark:bg-gray-900">
      <div class="flex mb-3 space-x-4">
        <a
          class="text-sm text-gray-500 transition hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
          :href="siteMetadata.github"
          ><span class="sr-only">github</span>
          <Icon class="w-8 h-8" name="fa:github" /> </a
        ><a
          class="text-sm text-gray-500 transition hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
          :href="siteMetadata.linkedin"
          ><span class="sr-only">Linkedin</span>
          <Icon class="w-8 h-8" name="fa:linkedin-square" /> </a
        ><a
          class="text-sm text-gray-500 transition hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
          :href="`mailto:${siteMetadata.email}`"
          ><span class="sr-only">mail</span>
          <Icon class="w-8 h-8" name="fa:envelope" /></a
        >
      </div>
      <div class="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div>Copyright © {{ new Date().getFullYear() }}</div>
        <div>•</div>
        <a href="/"
          >{{ siteMetadata.author }}'s blog - {{ siteMetadata.slogan }}</a
        >
      </div>
      <div class="mb-8 text-sm text-gray-500 dark:text-gray-400">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/mdrathik/tailwind-nuxtjs-starter-blog"
        ></a>
      </div>
      <!-- <BuyMeACoffee></BuyMeACoffee> -->
    </div>
  </footer>
</template>

<script>
import siteMetaInfo from "@/data/siteinfo";
// import BuyMeACoffee from "./BuyMeACoffee.vue";
export default {
  data() {
    return {
      siteMetadata: siteMetaInfo,
    };
  },
//   components: { BuyMeACoffee },
};
</script>