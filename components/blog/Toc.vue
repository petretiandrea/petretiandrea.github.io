<script setup>
    const { path } = useRoute()
    const articles = await queryContent(path).findOne()

    const links = articles?.body?.toc?.links || []
</script>

<template v-if="links?.length > 0">
  <div class="lg:col-span-3 sticky top-28 h-96 hidden lg:block justify-self-end">
    <div class="border dark:border-gray-800 p-3 rounded-md min-w-[200px] dark:bg-slate-900">
      <h1 class="text-sm font-bold mb-3 border-b dark:border-gray-800 pb-2">Table Of Content</h1>
      <template v-for="link in links" :key="link.id">
        <!-- Main link -->
        <NuxtLink
          :to="`#${link.id}`"
          class="block text-xs mb-3 hover:underline"
        >
          {{ link.text }}
        </NuxtLink>
        <!-- Sub-links (if any) -->
        <template v-for="child in link.children" :key="child.id">
            <div v-if="link.children" class="ml-4">
                <NuxtLink
                    :to="`#${child.id}`"
                    class="block text-xs mb-3 hover:underline"
                >
                    {{ child.text }}
                </NuxtLink>
            </div>
        </template>
      </template>
    </div>
  </div>
</template>