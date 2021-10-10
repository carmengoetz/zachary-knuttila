<template>
  <v-container>
    <v-row class="d-none d-sm-flex">
      <v-col cols="12" lg="6">
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
      <v-col cols="12" lg="6">
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
    <v-row no-gutters class="d-flex d-sm-none">
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
        title: "The Sound of Wishing I was Anywhere Else",
        medium: "Stone Lithograph",
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
  methods: {
    getImageWidth: () => {
      return window.matchMedia("(min-width: 1904px)").matches ? "400" : "300";
    },
  },
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
