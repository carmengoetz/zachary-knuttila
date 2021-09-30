<template>
  <v-container class="mt-n4 mt-sm-8 mt-md-16">
    <v-row no-gutters>
      <v-col cols="6" lg="4" class="d-none d-sm-inline">
        <v-row no-gutters class="my-4">
          <v-img
            max-width="350"
            contain
            src="../assets/LightModeLeft.gif"
            lazy-src="../assets/LightModeLeft-low.gif"
            class="main--light mx-auto"
            ><template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
          <v-img
            max-width="350"
            contain
            src="../assets/DarkModeLeft.gif"
            lazy-src="../assets/DarkModeLeft-low.gif"
            class="main--dark mx-auto"
            ><template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
        </v-row>
        <v-row no-gutters>
          <p class="main--text mx-auto">
            Last Home of the Lemurians ‐ Habitat 1<br />
            Digital, 2021
          </p>
        </v-row>
      </v-col>
      <v-col cols="12" sm="6" lg="4">
        <Header />
        <slot></slot>
      </v-col>
      <v-col cols="12" lg="4" class="d-inline d-sm-none d-lg-inline">
        <v-row no-gutters class="my-4">
          <v-img
            max-width="350"
            contain
            src="../assets/LightModeRight.gif"
            lazy-src="../assets/LightModeRight-low.gif"
            class="main--light mx-auto"
            ><template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
          <v-img
            max-width="350"
            contain
            src="../assets/DarkModeRight.gif"
            lazy-src="../assets/DarkModeRight-low.gif"
            class="main--dark mx-auto"
            ><template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
        </v-row>
        <v-row no-gutters>
          <p class="main--text mx-auto">
            Last Home of the Lemurians ‐ Habitat 2<br />
            Digital, 2021
          </p>
        </v-row>
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
.main {
  &--text {
    font-family: "Raleway", sans-serif;
    font-weight: 600;
  }

  &--light {
    display: flex;
    @media (prefers-color-scheme: dark) {
      display: none;
    }
  }

  &--dark {
    display: none;
    @media (prefers-color-scheme: dark) {
      display: flex;
    }
  }
}
</style>
