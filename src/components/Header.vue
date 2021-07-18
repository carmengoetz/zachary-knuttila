<template>
  <v-container>
    <v-row no-gutters justify="center" class="mt-16"
      ><router-link
        :to="{
          name: 'Home',
        }"
      >
        <v-card-title> Zachary Knuttila </v-card-title>
      </router-link></v-row
    >
    <v-row no-gutters justify="center" class="mt-8">
      <router-link
        v-for="page in pages"
        class="px-6"
        :key="page.index"
        :to="{
          name: page.name,
        }"
      >
        {{ page.name }}
      </router-link>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => {
    return {
      pages: [
        { path: "/portfolio", name: "Portfolio", exact: false },
        { path: "/cv", name: "CurriculumVitae", exact: false },
      ],
    };
  },
};
</script>
