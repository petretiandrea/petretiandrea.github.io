<template>
  <nav class="md:max-w-6xl mx-auto sticky top-0 z-50 ">
    <div
      class="bg-white dark:bg-gray-900 flex flex-wrap items-center justify-center px-10 md:py-4 py-2 overflow-hidden border-b dark:border-gray-700 border-gray-200 font-2xl sm:px-4 md:overflow-visible md:px-2"
    >
      <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
      <label
        class="menu-icon block cursor-pointer md:hidden px-2 relative select-none"
        for="menu-btn"
      >
        <span class="bg-grey-darkest flex items-center relative"></span>
      </label>

      <ul class="flex justify-center list-reset m-0 w-full md:w-auto">
        <li v-for="item in navLinks" :key="item.path">
          <NuxtLink
            :to="item.path"
            :external="item.external ?? false"
            class="block md:inline-block px-4 py-3 no-underline dark:text-white text-grey-darkest hover:text-grey-darker font-bold text-lg md:text-2xl"
            >{{ $t(item.name_key) }}</NuxtLink
          >
        </li>
        <!-- dark mode toggle -->
        <!-- <li>
          <button
            class="block md:inline-block px-4 py-3"
            @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')"
          >
            <Icon v-if="$colorMode.preference === 'dark'" name="icon-park-solid:dark-mode" color="white"/>
            <Icon v-else name="icon-park-solid:dark-mode" color="black"/>
          </button>
        </li> -->
      </ul>
      <ul class="flex items-center">
        <!-- lang switcher -->
        <li>
          <NuxtLink v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')" 
          class="block md:inline-block px-4 py-3 no-underline dark:text-white text-grey-darkest hover:text-grey-darker font-bold text-lg md:text-2xl">
            <Icon name="circle-flags:en" color="black" class="w-5 h-5 mr-1"/>
          </NuxtLink>
          <NuxtLink v-if="$i18n.locale !== 'it'" :to="switchLocalePath('it')"
          class="block md:inline-block px-4 py-3 no-underline dark:text-white text-grey-darkest hover:text-grey-darker font-bold text-lg md:text-2xl">
            <Icon name="circle-flags:it" color="black" class="w-5 h-5 mr-1"/>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import menu from "../data/menu";

export default {
  name: "Header",
  data() {
    return {
      navLinks: menu,
    };
  },
  methods: {
    setColorTheme: (newTheme) => {
      console.log(newTheme)
      useColorMode().preference = newTheme
    }
  }
};

</script>

<style>
.nuxt-link-exact-active {
  @apply text-indigo-600;
}
</style>