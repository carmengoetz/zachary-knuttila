<template>
  <v-container>
    <v-row class="ml-n16"
      ><router-link
        :to="{
          name: 'Home',
        }"
      >
        <v-card-title> Zachary Knuttila </v-card-title>
      </router-link></v-row
    >
    <v-row>
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

<style lang="scss">
.box1 {
  width: 500px;
  height: 600px;
  background-color: #bec6f3;
}

.box2 {
  width: 500px;
  height: 400px;
  background-color: #bec6f3;
}
</style>
