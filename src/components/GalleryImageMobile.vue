<template>
  <v-container fluid>
    <v-img max-width="300" :src="image" :lazy-src="lazy" class="mx-auto"
      ><template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <v-row no-gutters align="center" class="gallery--reveal px-4">
      {{ title.toUpperCase() }}<br />
      {{ medium }} {{ date }}
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "GalleryImage",
  props: ["index", "image", "lazy", "title", "medium", "date"],
  data: () => ({
    dialog: [],
  }),
};
</script>

<style lang="scss" scoped>
.gallery {
  &--reveal {
    height: 50px;
    font-family: "Raleway", sans-serif;
    font-weight: 600;
    font-size: 12px;
    background-color: #360000;
    color: #bec6f3;
    @media (prefers-color-scheme: dark) {
      background-color: #bec6f3;
      color: #360000;
    }
  }
}
</style>
