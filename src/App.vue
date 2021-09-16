<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
  components: { Footer },
  name: "App",
  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
@media (prefers-color-scheme: light) {
  #app {
    background-color: #bec6f3;
    color: #360000;
  }
  .primary-color {
    color: #360000;
  }
}
@media (prefers-color-scheme: dark) {
  #app {
    background-color: #360000;
    color: #bec6f3 !important;
  }
  .v-application .primary--text {
    color: #bec6f3 !important;
  }
}
</style>
