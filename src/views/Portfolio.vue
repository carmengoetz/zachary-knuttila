<template>
  <v-container>
    <v-row class="ml-lg-n16"
      ><router-link
        :to="{
          name: 'Home',
        }"
      >
        <v-card-title> Zachary Knuttila </v-card-title>
      </router-link></v-row
    >
    <v-row class="mt-n8 mt-sm-0">
      <v-col>
        <v-row v-for="image in images" :key="image.index">
          <div v-if="image.index % 2 == 0" class="my-4 my-sm-8 mx-auto">
            <PortfolioImage
              :index="image.index"
              :image="image.image"
              :lazy="image.imageLazy"
              :title="image.title"
              :date="image.date"
            />
          </div>
        </v-row>
      </v-col>
      <v-col>
        <v-row v-for="image in images" :key="image.index">
          <div v-if="image.index % 2 != 0" class="my-4 my-sm-8 mx-auto">
            <PortfolioImage
              :index="image.index"
              :image="image.image"
              :lazy="image.imageLazy"
              :title="image.title"
              :date="image.date"
            />
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PortfolioImage from "../components/PortfolioImage.vue";

export default {
  components: { PortfolioImage },
  name: "Portfolio",
  data: () => ({
    dialog: [],
    images: [
      {
        index: 0,
        image: require("@/assets/portfolio/test1.jpg"),
        imageLazy: require("@/assets/portfolio/test1.jpg"),
        title: "title",
        date: "date",
      },
      {
        index: 1,
        image: require("@/assets/portfolio/test2.jpg"),
        imageLazy: require("@/assets/portfolio/test2.jpg"),
        title: "title",
        date: "date",
      },
      {
        index: 2,
        image: require("@/assets/portfolio/test3.jpg"),
        imageLazy: require("@/assets/portfolio/test3.jpg"),
        title: "title",
        date: "date",
      },
      {
        index: 3,
        image: require("@/assets/portfolio/test4.jpg"),
        imageLazy: require("@/assets/portfolio/test4.jpg"),
        title: "title",
        date: "date",
      },
      {
        index: 4,
        image: require("@/assets/portfolio/test5.jpg"),
        imageLazy: require("@/assets/portfolio/test5.jpg"),
        title: "title",
        date: "date",
      },
      {
        index: 5,
        image: require("@/assets/portfolio/test6.jpg"),
        imageLazy: require("@/assets/portfolio/test6.jpg"),
        title: "title",
        date: "date",
      },
      {
        index: 6,
        image: require("@/assets/portfolio/test7.jpg"),
        imageLazy: require("@/assets/portfolio/test7.jpg"),
        title: "title",
        date: "date",
      },
      {
        index: 7,
        image: require("@/assets/portfolio/test8.jpg"),
        imageLazy: require("@/assets/portfolio/test8.jpg"),
        title: "title",
        date: "date",
      },
      {
        index: 8,
        image: require("@/assets/portfolio/test9.jpg"),
        imageLazy: require("@/assets/portfolio/test9.jpg"),
        title: "title",
        date: "date",
      },
      {
        index: 9,
        image: require("@/assets/portfolio/test10.jpg"),
        imageLazy: require("@/assets/portfolio/test10.jpg"),
        title: "title",
        date: "date",
      },
    ],
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
    @media (prefers-color-scheme: dark) {
      background-color: #bec6f3;
      color: #360000;
    }
    @media (prefers-color-scheme: light) {
      background-color: #360000;
      color: #bec6f3;
    }
  }
}
</style>
