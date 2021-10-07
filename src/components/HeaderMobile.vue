<template>
  <v-app-bar
    flat
    max-height="132"
    height="132"
    color="transparent"
    class="nav mt-n2 mb-n6 my-sm-0 px-0"
  >
    <v-row no-gutters>
      <v-col cols="12">
        <router-link
          :to="{
            name: 'Home',
          }"
        >
          <v-img
            max-width="300"
            contain
            src="../assets/heading.png"
            lazy-src="../assets/heading-low.png"
            class="nav--dark mx-auto mx-md-0 my-2"
            ><template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
          <v-img
            max-width="300"
            contain
            src="../assets/heading2.png"
            lazy-src="../assets/heading2-low.png"
            class="nav--light mx-auto mx-md-0"
            ><template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
            ></v-img
          >
        </router-link></v-col
      >
      <v-col cols="6" v-for="page in pages" :key="page.index">
        <router-link
          :to="{
            name: page.name,
          }"
        >
          <v-img
            :max-width="page.width"
            :src="page.imgDark"
            :lazy-src="page.lazyDark"
            class="nav--dark"
            :class="page.class"
            ><template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
          <v-img
            :max-width="page.width"
            :src="page.imgLight"
            :lazy-src="page.lazyLight"
            class="nav--light"
            :class="page.class"
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
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderMobile",
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
          width: "111",
          class: "ml-auto ",
          exact: false,
        },
        {
          path: "/cv",
          name: "CurriculumVitae",
          imgDark: require("@/assets/cv.png"),
          lazyDark: require("@/assets/cv-low.png"),
          imgLight: require("@/assets/cv2.png"),
          lazyLight: require("@/assets/cv2-low.png"),
          md: 1,
          width: "46",
          class: "ml-16 ",
          exact: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  z-index: 1;
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
