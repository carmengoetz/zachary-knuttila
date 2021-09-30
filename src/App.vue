<template>
  <v-app>
    <v-main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
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

<style lang="scss">
#app {
  background-color: #bec6f3;
  color: #360000;
  @media (prefers-color-scheme: dark) {
    background-color: #360000;
    color: #bec6f3 !important;
  }
}

.error--text {
  color: red !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
</style>
