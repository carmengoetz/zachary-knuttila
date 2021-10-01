<template>
  <v-container>
    <v-row no-gutters>
      <v-col class="d-none d-sm-inline">
        <v-row no-gutters class="mb-4">
          <v-img
            max-width="600"
            contain
            :src="imgDark"
            :lazy-src="lazyDark"
            class="main--dark mx-auto"
            ><template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
          <v-img
            max-width="600"
            contain
            :src="imgLight"
            :lazy-src="lazyLight"
            class="main--light mx-auto"
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
          <p class="main--text ml-8">
            {{ title }}<br />
            {{ medium }}
          </p>
        </v-row>
      </v-col>
      <v-col>
        <slot></slot>
      </v-col>
      <v-col cols="12" class="d-inline d-sm-none">
        <v-row no-gutters class="mb-4">
          <v-img
            max-width="600"
            contain
            :src="imgDark"
            :lazy-src="lazyDark"
            class="main--dark mx-auto"
            ><template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
          <v-img
            max-width="600"
            contain
            :src="imgLight"
            :lazy-src="lazyLight"
            class="main--light mx-auto"
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
            {{ title }}<br />
            {{ medium }}
          </p>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Main",
  props: ["imgDark", "lazyDark", "imgLight", "lazyLight", "title", "medium"],
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
