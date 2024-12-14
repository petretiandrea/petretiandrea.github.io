<script setup>
    const { params, path } = useRoute();
    const { data: article } = await useAsyncData(
        'articles', 
        () => queryContent('/blog', params.slug).findOne()
    );
</script>

<template>
  <div class="px-6 container max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12">
    <div class="col-span-12 lg:col-span-9">
      <p class="text-center font-bold my-5 text-indigo-500">
            {{ formatDate(article?.date) }}
        </p>
        <h1 class="text-4xl text-gray-700 font-extrabold mb-10 text-center">
            {{ article?.title }}
        </h1>
        <div class="flex items-center font-medium mt-6 sm:mx-3 justify-center">
            <nuxt-img :src="siteMetadata.author_image" loading="lazy" alt=""
                class="mr-3 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800" />
            <div>
                <div class="text-slate-900 dark:text-slate-200">
                    {{ siteMetadata.author }}
                </div>
                <a target="_blank" :href="siteMetadata.github" class="text-sky-500 hover:text-sky-600 dark:text-sky-400">
                    @{{ siteMetadata.githubUser }}
                </a>
            </div>
        </div>
        <img class="mx-auto w-4/5 my-10 rounded-md drop-shadow-sm max-h-80 object-cover" :src="article?.image" />

      <div
        class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg prose-h1:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg"
      >
        <ContentRendererMarkdown :value="article"/>
      </div>
    </div>
    
    <BlogToc />

    <div class="col-span-12">
      <Giscus 
        id="comments"
        repo="petretiandrea/petretiandrea.github.io"
        repoId="MDEwOlJlcG9zaXRvcnkyODQyMjkyOTc="
        category="Q&A"
        categoryId="DIC_kwDOEPD-sc4ClIwk"
        mapping="specific"
        :term="params.slug"
        strict="1"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
        crossorigin="anonymous"
        async
    />
    </div>
  </div>
</template>


<script>
import siteInfo from "@/data/siteinfo";
import Giscus from "@giscus/vue";
import Toc from "../../components/blog/Toc.vue";

export default {
    data() {
        return {
            title: 0,
            siteMetadata: siteInfo,
        };
    },
    methods: {
        formatDate(date) {
            if (!date) return "";
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(date).toLocaleDateString("en", options);
        },
    },
    head() {
        return {
            title: article.title,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: article.description,
                },
            ],
        };
    },
    components: {
        Giscus: Giscus,
        BlocToc: Toc
    }
};
</script>
<style>
.nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
}

.nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
}

.nuxt-content p {
    margin-bottom: 20px;
}
</style>