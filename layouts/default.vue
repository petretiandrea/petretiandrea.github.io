<template>
  <!-- Section 1 -->
  <section class="w-full px-6 pb-12 antialiased bg-white fill-viewport">
    <div class="mx-auto max-w-8xl fill-viewport">
      <Header />
      <slot />
      <Footer class="sticky top-[100vh]"/>
    </div>
  </section>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  component: {
    Header,
    Footer
  },
};
</script>

<style scoped>
.fill-viewport {
  height: 100vh;
}

</style>