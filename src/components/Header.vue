<template>
  <v-app-bar
    flat
    max-height="132"
    height="132"
    color="transparent"
    class="nav mt-n2 mb-n6 my-sm-0 px-0 px-md-16"
  >
    <v-row no-gutters>
      <v-col cols="12" md="9" xl="10">
        <router-link
          :to="{
            name: 'Home',
          }"
        >
          <v-img
            :max-width="getImageWidth()"
            contain
            src="../assets/heading.png"
            lazy-src="../assets/heading-low.png"
            class="nav--dark mx-auto mx-md-0 my-2 my-md-0"
            ><template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
          <v-img
            :max-width="getImageWidth()"
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
      ><v-spacer></v-spacer>
      <v-col
        :cols="page.cols"
        :md="page.md"
        xl="1"
        v-for="page in pages"
        :key="page.index"
      >
        <router-link
          :to="{
            name: page.name,
          }"
        >
          <v-img
            :max-width="page.width"
            :src="page.imgDark"
            :lazy-src="page.lazyDark"
            class="nav--dark mr-md-0 ml-md-0"
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
            class="nav--light mr-md-0 ml-md-0"
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
          cols: "6",
          md: "2",
          width: window.matchMedia("(min-width: 600px)").matches ? "148" : "111",
          class: "ml-auto",
          exact: false,
        },
        {
          path: "/cv",
          name: "CurriculumVitae",
          imgDark: require("@/assets/cv.png"),
          lazyDark: require("@/assets/cv-low.png"),
          imgLight: require("@/assets/cv2.png"),
          lazyLight: require("@/assets/cv2-low.png"),
          cols: "6",
          md: "1",
          width: window.matchMedia("(min-width: 600px)").matches ? "61" : "46",
          class: "ml-16",
          exact: false,
        },
      ],
    };
  },
  methods: {
    getImageWidth: () => {
      return window.matchMedia("(min-width: 600px)").matches ? "450" : "300";
    },
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
