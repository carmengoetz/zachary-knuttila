<template>
  <v-container>
    <v-row no-gutters justify="center" align="center"
      ><router-link
        :to="{
          name: 'Home',
        }"
      >
        <v-img
          max-height="40"
          max-width="350"
          contain
          src="../assets/heading.png"
          lazy-src="../assets/heading.png"
          ><template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row> </template
        ></v-img> </router-link
    ></v-row>
    <v-row no-gutters justify="center" align="center" class="my-0 my-sm-4 mx-auto">
      <v-col v-for="page in pages" :key="page.index" :cols="page.col">
        <router-link
          :to="{
            name: page.name,
          }"
        >
          <v-img max-height="40" contain :src="page.img" :lazy-src="page.img"
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
          path: "/portfolio",
          name: "Portfolio",
          img: require("@/assets/Gallery.png"),
          col: 7,
          exact: false,
        },
        {
          path: "/cv",
          name: "CurriculumVitae",
          img: require("@/assets/cv.png"),
          col: 5,
          exact: false,
        },
      ],
    };
  },
};
</script>
