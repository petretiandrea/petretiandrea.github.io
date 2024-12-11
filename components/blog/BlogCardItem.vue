<script setup>
  const localePath = useLocalePath();
</script>

<template>
  <article
    class="group border dark:border-gray-800 m-2 rounded-2xl overflow-hidden shadow-sm text-zinc-700 dark:text-zinc-300"
  >
    <NuxtLink :to="localePath({ name: 'blog-slug', params: { slug: postSlug } })" class="grid grid-cols-1 sm:grid-cols-10 gap-1">
      <div class="sm:col-span-3">
        <NuxtImg
          class="h-full w-full object-cover object-center rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none shadow-lg group-hover:scale-[1.02] transition-all duration-500"
          width="300"
          height="150"
          :src="postImage"
        />
      </div>
      <div class="sm:col-span-7 p-5">
        <h2
          class="text-xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400"
        >
          {{ postTitle }}
        </h2>
        <p class="text-ellipsis line-clamp-2">
          {{ postDescription }}
        </p>
        <div class="text-black dark:text-zinc-300 text-sm mt-2 mb-1 md:flex md:space-x-6">
          <time class="flex items-center" datetime="2022-02-24T12:00:00.000Z">
            {{ formatDate(postDate) }}
          </time>
          <div class="flex items-center gap-1 flex-wrap">
            <p
              v-for="tag in postTags"
              :key="tag"
              class="bg-gray-200 dark:bg-slate-900 rounded-md px-2 py-1 font-semibold"
            >
              {{ tag }}
            </p>
          </div>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>

<script>
  export default {
    props: ["title", "description", "date", "slug", "image", "tags"],
    data() {
      return {
        postTitle: this.title,
        postDescription: this.description,
        postSlug: this.slug,
        postDate: this.date,
        postImage: this.image,
        postTags: this.tags,
      };
    },
    methods: {
      formatDate(date) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(date).toLocaleDateString("en", options);
      },
    },
  };
</script>