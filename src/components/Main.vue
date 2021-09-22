<template>
  <v-container class="mt-4 mt-sm-8 mt-md-16 px-16 px-md-0">
    <v-row>
      <v-col cols="6" lg="4" class="d-none d-sm-inline">
        <div class="box mx-auto" />
      </v-col>
      <v-col cols="12" sm="6" lg="4">
        <Header />
        <slot></slot>
      </v-col>
      <v-col cols="12" lg="4" class="d-inline d-sm-none d-lg-inline">
        <div class="box mx-auto" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "Main",

  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 350px;
  height: 600px;
  @media (prefers-color-scheme: dark) {
    background-color: #bec6f3;
  }
  @media (prefers-color-scheme: light) {
    background-color: #360000;
  }
  @media (max-width: 960px) {
    width: 200px;
    height: 300px;
  }

  @media (max-width: 600px) {
    width: 200px;
    height: 300px;
  }
}
</style>
