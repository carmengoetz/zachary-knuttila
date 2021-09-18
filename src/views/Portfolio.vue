<template>
  <v-container>
    <v-row class="ml-lg-n16"
      ><router-link
        :to="{
          name: 'Home',
        }"
      >
        <v-card-title> Zachary Knuttila </v-card-title>
      </router-link></v-row
    >
    <v-row class="mt-n8">
      <v-col>
        <v-row class="my-16">
          <div class="box1 mx-auto" />
        </v-row>
        <v-row class="my-16">
          <div class="box2 mx-auto" />
        </v-row>
        <v-row class="my-16">
          <div class="box1 mx-auto" />
        </v-row>
        <v-row class="my-16">
          <div class="box2 mx-auto" />
        </v-row>
      </v-col>
      <v-col>
        <v-row class="my-16">
          <div class="box2 mx-auto" />
        </v-row>
        <v-row class="my-16">
          <div class="box1 mx-auto" />
        </v-row>
        <v-row class="my-16">
          <div class="box2 mx-auto" />
        </v-row>
        <v-row class="my-16">
          <div class="box1 mx-auto" />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Portfolio",
};
</script>

<style lang="scss" scoped>
.box1 {
  width: 500px;
  height: 600px;
  @media (prefers-color-scheme: dark) {
    background-color: #bec6f3;
  }
  @media (prefers-color-scheme: light) {
    background-color: #360000;
  }
}

.box2 {
  width: 500px;
  height: 400px;
  @media (prefers-color-scheme: dark) {
    background-color: #bec6f3;
  }
  @media (prefers-color-scheme: light) {
    background-color: #360000;
  }
}
</style>
