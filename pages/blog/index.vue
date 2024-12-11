<template>
    <div>
        <header class="pt-16 pb-9 sm:pb-16 sm:text-center">
            <h1 class="mb-4 text-8xl sm:text-4xl tracking-tight text-slate-800 font-extrabold dark:text-slate-200">
                Blog
            </h1>
        </header>
        <div class="space-y-16 mx-auto max-w-7xl">
            <blog-item v-for="article in articles" :key="article.title" 
                :title="article.title"
                :description="article.description" 
                :date="article.date" 
                :slug="article.slug"
                :image="article.image"
                :tags="article.tags"
            ></blog-item>
        </div>
    </div>
</template>

<script setup>
const { data: articles } = await useAsyncData('articles', () => queryContent('/blog')
    .only([
        "title",
        "description",
        "image",
        "slug",
        "tags",
        "author",
        "date",
        "draft",
    ])
    .where({ draft: false })
    .sort({ date: -1 })
    .find()
);
</script>

<script>
import BlogItem from "../../components/blog/BlogCardItem.vue";

export default {
    components: [
        BlogItem
    ],
    head: {
        title: "Md Solaiman | Blogs",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: "Its Solaiman's Pen and Paper to write ",
            },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
};
</script>
  
<style></style>