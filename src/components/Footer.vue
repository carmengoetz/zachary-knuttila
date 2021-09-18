<template>
  <v-footer padless class="footer pt-3">
    <v-col>
      <v-row justify="start" class="ml-10">
        <v-card-text>
          {{ new Date().getFullYear() }} —
          <strong
            >Zachary Knuttila |
            <a href="https://www.carmengoetz.ca" target="_blank"> Carmen Goetz </a>
          </strong>
        </v-card-text>
      </v-row>
    </v-col>
    <v-col>
      <v-row justify="end" class="mr-10">
        <v-btn
          v-for="social in socials"
          :key="social.name"
          class="footer__button mx-1"
          icon
          :href="social.link"
          target="_blank"
        >
          <v-icon size="24">
            {{ social.icon }}
          </v-icon>
        </v-btn>
        <v-dialog v-model="dialog" width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="footer__button mx-1" icon v-bind="attrs" v-on="on">
              <v-icon size="24"> {{ "mdi-email" }} </v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-actions class="footer__dialog px-6 pt-4">
              <v-card-title class="text-h5">Contact Zachary</v-card-title>
              <v-spacer></v-spacer>
              <v-btn fab text @click="dialog = false" class="footer__dialog--close">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-actions>
            <Contact />
          </v-card>
        </v-dialog>
      </v-row>
    </v-col>
  </v-footer>
</template>

<script>
import Contact from "./Contact.vue";
export default {
  components: { Contact },
  name: "Footer",
  data: () => ({
    dialog: false,
    socials: [
      {
        link: "https://www.instagram.com/zacharyknuttila/",
        name: "Instagram",
        icon: "mdi-instagram",
      },
      {
        link: "https://www.youtube.com/user/ZacKnuttila/",
        name: "YouTube",
        icon: "mdi-youtube",
      },
      {
        link: "https://twitter.com/zacharyknuttila",
        name: "Twitter",
        icon: "mdi-twitter",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
@media (prefers-color-scheme: light) {
  .footer {
    background-color: #bec6f3 !important;
    color: #360000 !important;

    &__button {
      color: #360000 !important;
    }

    a {
      color: #360000 !important;
    }

    &__dialog {
      background-color: #bec6f3 !important;
      color: #360000 !important;

      &--close {
        color: #360000 !important;
      }
    }
  }
}
@media (prefers-color-scheme: dark) {
  .footer {
    background-color: #360000 !important;
    color: #bec6f3 !important;
    &__button {
      color: #bec6f3 !important;
    }

    a {
      color: #bec6f3 !important;
    }

    &__dialog {
      background-color: #360000 !important;
      color: #bec6f3 !important;

      &--close {
        color: #bec6f3 !important;
      }
    }
  }
}
</style>
