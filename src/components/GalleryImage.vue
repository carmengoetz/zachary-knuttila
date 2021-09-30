<template>
  <v-dialog
    v-model="dialog[index]"
    transition="fade-transition"
    max-width="1400"
    content-class="elevation-0"
    fullscreen
  >
    <template v-slot:activator="{ on, attrs }">
      <v-hover v-slot="{ hover }">
        <v-img
          max-width="500"
          contain
          :src="image"
          :lazy-src="lazy"
          v-bind="attrs"
          v-on="on"
          class="gallery__image mx-auto"
          ><template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
          <v-expand-transition>
            <v-row
              no-gutters
              v-if="hover"
              align="center"
              class="transition-slow-in-slow-out gallery--reveal pl-4"
            >
              {{ title.toUpperCase() }}<br />
              {{ medium }} {{ date }}
            </v-row>
          </v-expand-transition>
        </v-img>
      </v-hover>
    </template>
    <v-card color="transparent">
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn fab text @click="$set(dialog, index, false)" class="gallery__close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-actions>
      <v-img contain max-height="700" :src="image" :lazy-src="lazy" class="mx-auto"
        ><template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row> </template
      ></v-img>
    </v-card>
  </v-dialog>
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
  &__image {
    &:hover {
      cursor: pointer;
    }
  }

  &__close {
    color: #360000;
    @media (prefers-color-scheme: dark) {
      color: #bec6f3;
    }
  }

  &--reveal {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    font-family: "Raleway", sans-serif;
    font-weight: 600;
    background-color: #360000;
    color: #bec6f3;
    @media (prefers-color-scheme: dark) {
      background-color: #bec6f3;
      color: #360000;
    }
  }
}
</style>
