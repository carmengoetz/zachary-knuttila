<template>
  <v-container class="mt-16">
    <v-row>
      <v-col>
        <div class="box mx-auto" />
      </v-col>
      <v-col>
        <Header />
        <slot></slot>
      </v-col>
      <v-col>
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
  width: 400px;
  height: 600px;
  @media (prefers-color-scheme: dark) {
    background-color: #bec6f3;
  }
  @media (prefers-color-scheme: light) {
    background-color: #360000;
  }
}
</style>
