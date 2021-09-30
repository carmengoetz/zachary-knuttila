<template>
  <v-container>
    <v-row justify="center" justify-sm="start" align="center"
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
          lazy-src="../assets/heading2-low.png"
          class="gallery--dark my-4 my-md-8"
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
          lazy-src="../assets/heading-low.png"
          class="gallery--light my-4 my-md-8"
          ><template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row> </template
        ></v-img> </router-link
    ></v-row>
    <v-row class="d-none d-sm-flex">
      <v-col>
        <v-row v-for="image in images" :key="image.index">
          <div v-if="image.index % 2 == 0" class="my-8 mx-auto">
            <GalleryImage
              :index="image.index"
              :image="image.image"
              :lazy="image.imageLazy"
              :title="image.title"
              :medium="image.medium"
              :date="image.date"
            />
          </div>
        </v-row>
      </v-col>
      <v-col>
        <v-row v-for="image in images" :key="image.index">
          <div v-if="image.index % 2 != 0" class="my-8 mx-auto">
            <GalleryImage
              :index="image.index"
              :image="image.image"
              :lazy="image.imageLazy"
              :title="image.title"
              :medium="image.medium"
              :date="image.date"
            />
          </div>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="d-flex d-sm-none">
      <div v-for="image in images" :key="image.index" class="mx-auto">
        <GalleryImageMobile
          :index="image.index"
          :image="image.image"
          :lazy="image.imageLazy"
          :title="image.title"
          :medium="image.medium"
          :date="image.date"
        />
      </div>
    </v-row>
  </v-container>
</template>

<script>
import GalleryImage from "../components/GalleryImage.vue";
import GalleryImageMobile from "../components/GalleryImageMobile.vue";

export default {
  components: { GalleryImage, GalleryImageMobile },
  name: "Gallery",
  data: () => ({
    dialog: [],
    images: [
      {
        index: 0,
        image: require("@/assets/gallery/LearningToTieShoesGuessingGenerativeAnimation2018.jpg"),
        imageLazy: require("@/assets/gallery/LearningToTieShoesGuessingGenerativeAnimation2018-low.jpg"),
        title: "Learning to Tie Shoes - Guessing ",
        medium: "Generative Animation",
        date: "2018",
      },
      {
        index: 1,
        image: require("@/assets/gallery/DoYouFeelAloneTogetherRisograph2019.jpg"),
        imageLazy: require("@/assets/gallery/DoYouFeelAloneTogetherRisograph2019-low.jpg"),
        title: "Do You Feel Alone Together",
        medium: "Risograph",
        date: "2019",
      },
      {
        index: 2,
        image: require("@/assets/gallery/TheSoundOfWishingIWasAnywhereElseStoneLithograph2018.png"),
        imageLazy: require("@/assets/gallery/TheSoundOfWishingIWasAnywhereElseStoneLithograph2018-low.png"),
        title: "Learning to Tie Shoes",
        medium: "Guessing Generative Animation",
        date: "2018",
      },
      {
        index: 3,
        image: require("@/assets/gallery/TopographicalMapOfUnrealMoons1Lithograph2016.jpg"),
        imageLazy: require("@/assets/gallery/TopographicalMapOfUnrealMoons1Lithograph2016-low.jpg"),
        title: "Topographical Map of Unreal Moons 1",
        medium: "Lithograph",
        date: "2016",
      },
      {
        index: 4,
        image: require("@/assets/gallery/TopographicalMapOfUnrealMoons2Lithograph2016.jpg"),
        imageLazy: require("@/assets/gallery/TopographicalMapOfUnrealMoons2Lithograph2016-low.jpg"),
        title: "Topographical Map of Unreal Moons 2",
        medium: "Lithograph",
        date: "2016",
      },
      {
        index: 5,
        image: require("@/assets/gallery/TopographicalMapOfUnrealMoons3Lithograph2016.jpg"),
        imageLazy: require("@/assets/gallery/TopographicalMapOfUnrealMoons3Lithograph2016-low.jpg"),
        title: "Topographical Map of Unreal Moons 3",
        medium: "Lithograph",
        date: "2016",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.gallery {
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
