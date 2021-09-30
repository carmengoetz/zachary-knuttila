<template>
  <v-dialog
    v-model="dialog[index]"
    transition="fade-transition"
    max-width="1400"
    content-class="elevation-0"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-hover v-slot="{ hover }">
        <v-img
          max-width="500"
          :src="image"
          :lazy-src="lazy"
          v-bind="attrs"
          v-on="on"
          class="mx-auto"
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
              justify="center"
              align="center"
              class="transition-slow-in-slow-out portfolio--reveal"
            >
              {{ title }} - {{ date }}
            </v-row>
          </v-expand-transition>
        </v-img>
      </v-hover>
    </template>
    <v-card color="transparent">
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn fab text @click="$set(dialog, index, false)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-actions>
      <v-img contain height="700" :src="image" :lazy-src="lazy" class="mx-auto"
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
  name: "PortfolioImage",
  props: ["index", "image", "lazy", "title", "date"],
  data: () => ({
    dialog: [],
  }),
};
</script>

<style lang="scss" scoped>
.portfolio {
  &--reveal {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 48px;
    background-color: #360000;
    color: #bec6f3;
    @media (prefers-color-scheme: dark) {
      background-color: #bec6f3;
      color: #360000;
    }
  }
}
</style>
