<template>
  <v-container>
    <v-row no-gutters justify="center"
      ><router-link
        :to="{
          name: 'Home',
        }"
      >
        <v-card-title> Zachary Knuttila </v-card-title>
      </router-link></v-row
    >
    <v-row no-gutters justify="center" class="my-4">
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
  name: "Header",
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
