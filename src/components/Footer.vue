<template>
  <v-footer padless class="footer pt-3">
    <v-col class="text-center" cols="12">
      <v-row justify="center">
        <v-btn
          v-for="social in socials"
          :key="social.name"
          class="mx-1"
          color="black"
          icon
          :href="social.link"
          target="_blank"
        >
          <v-icon size="24">
            {{ social.icon }}
          </v-icon>
        </v-btn>
      </v-row>
      <v-row>
        <v-card-text class="black--text">
          {{ new Date().getFullYear() }} — <strong>Zachary Knuttila</strong>
        </v-card-text>
      </v-row>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => {
    return {
      socials: [
        {
          link: "https://www.twitch.tv/creativereyne",
          name: "Twitch",
          icon: "mdi-twitch",
        },
        {
          link: "https://www.youtube.com/channel/UCyHVoqh4TK6XTRIi6m6d6UQ",
          name: "YouTube",
          icon: "mdi-youtube",
        },
        {
          link: "https://www.instagram.com/creativereyne/",
          name: "Instagram",
          icon: "mdi-instagram",
        },
        {
          link: "https://twitter.com/CreativeReyne",
          name: "Twitter",
          icon: "mdi-twitter",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~vuetify/src/styles/styles.sass";

.footer {
}
</style>
