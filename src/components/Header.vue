<template>
  <v-container>
    <v-row no-gutters justify="center" align="center" class="my-4 my-md-0"
      ><router-link
        :to="{
          name: 'Home',
        }"
      >
        <v-img
          max-height="40"
          max-width="300"
          contain
          src="../assets/heading.png"
          lazy-src="../assets/heading-low.png"
          class="nav--dark"
          ><template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row> </template
        ></v-img>
        <v-img
          max-height="40"
          max-width="300"
          contain
          src="../assets/heading2.png"
          lazy-src="../assets/heading2-low.png"
          class="nav--light"
          ><template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row> </template
        ></v-img> </router-link
    ></v-row>
    <v-row
      no-gutters
      justify="center"
      align="center"
      class="my-0 my-sm-4 mx-auto"
    >
      <v-col v-for="page in pages" :key="page.index" :cols="page.col">
        <router-link
          :to="{
            name: page.name,
          }"
        >
          <v-img
            max-height="30"
            contain
            :src="page.imgDark"
            :lazy-src="page.lazyDark"
            class="nav--dark"
            ><template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
          <v-img
            max-height="30"
            contain
            :src="page.imgLight"
            :lazy-src="page.lazyLight"
            class="nav--light"
            ><template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data: () => {
    return {
      pages: [
        {
          path: "/gallery",
          name: "Gallery",
          imgDark: require("@/assets/Gallery.png"),
          lazyDark: require("@/assets/Gallery-low.png"),
          imgLight: require("@/assets/Gallery2.png"),
          lazyLight: require("@/assets/Gallery2-low.png"),
          col: 7,
          exact: false,
        },
        {
          path: "/cv",
          name: "CurriculumVitae",
          imgDark: require("@/assets/cv.png"),
          lazyDark: require("@/assets/cv-low.png"),
          imgLight: require("@/assets/cv2.png"),
          lazyLight: require("@/assets/cv2-low.png"),
          col: 5,
          exact: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
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
