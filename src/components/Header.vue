<template>
  <v-app-bar flat max-height="132" height="132" color="transparent" class="nav px-16">
    <router-link
      :to="{
        name: 'Home',
      }"
    >
      <v-img
        max-width="450"
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
        max-width="450"
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
          </v-row>
        </template>
        ></v-img
      >
    </router-link>
    <router-link
      v-for="page in pages"
      :key="page.index"
      :to="{
        name: page.name,
      }"
    >
      <v-img
        :max-width="page.width"
        :src="page.imgDark"
        :lazy-src="page.lazyDark"
        class="nav--dark ml-8"
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
        class="nav--light ml-8"
        ><template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row> </template
      ></v-img>
    </router-link>
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
          md: 2,
          width: "148",
          exact: false,
        },
        {
          path: "/cv",
          name: "CurriculumVitae",
          imgDark: require("@/assets/cv.png"),
          lazyDark: require("@/assets/cv-low.png"),
          imgLight: require("@/assets/cv2.png"),
          lazyLight: require("@/assets/cv2-low.png"),
          width: "61",
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
