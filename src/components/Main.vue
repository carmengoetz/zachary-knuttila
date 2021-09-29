<template>
  <v-container class="mt-n4 mt-sm-8 mt-md-16">
    <v-row no-gutters>
      <v-col cols="6" lg="4" class="d-none d-sm-inline">
        <v-img
          max-width="350"
          src="../assets/DarkModeLeft.gif"
          lazy-src="../assets/DarkModeLeft.gif"
          ><template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row> </template
        ></v-img>
      </v-col>
      <v-col cols="12" sm="6" lg="4">
        <Header />
        <slot></slot>
      </v-col>
      <v-col cols="12" lg="4" class="d-inline d-sm-none d-lg-inline">
        <v-img
          max-width="350"
          src="../assets/DarkModeRight.gif"
          lazy-src="../assets/DarkModeRight.gif"
          ><template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row> </template
        ></v-img>
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
    width: 300px;
    height: 300px;
  }
}
</style>
