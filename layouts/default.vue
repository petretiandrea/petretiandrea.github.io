<template>
  <!-- Section 1 -->
  <section class="w-full px-6 pb-12 antialiased bg-white">
    <div class="mx-auto max-w-8xl">
      <Header />
      <slot />
      <Footer/>
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