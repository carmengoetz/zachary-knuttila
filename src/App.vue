<template>
  <v-app>
    <Header />
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
import Header from "./components/Header.vue";

export default {
  components: { Header, Footer },
  name: "App",
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

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #bec6f3;
}

::-webkit-scrollbar-thumb {
  background: #360000;

  &:hover {
    background: rgba(54, 0, 0, 0.8);
  }
}

@media (prefers-color-scheme: dark) {
  ::-webkit-scrollbar-track {
    background: #360000;
  }

  ::-webkit-scrollbar-thumb {
    background: #bec6f3;

    &:hover {
      background: rgba(190, 198, 243, 0.8);
    }
  }
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
